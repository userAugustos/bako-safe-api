import { Predicate, Transaction, TransactionType } from '@src/models';
import { IPagination } from '@src/utils/pagination';
import {
  ICreateTransactionPayload,
  ITransactionResponse,
  ITransactionsGroupedByMonth,
} from './types';
import { IDeposit } from '../predicate/types';
import { TransactionStatus } from 'bakosafe';

export const formatTransactionsResponse = (
  transactions: IPagination<Transaction> | Transaction[],
): IPagination<ITransactionResponse> | ITransactionResponse[] => {
  if (Array.isArray(transactions)) {
    return transactions.map(Transaction.formatTransactionResponse);
  } else {
    return {
      ...transactions,
      data: transactions.data.map(Transaction.formatTransactionResponse),
    };
  }
};

const convertToArray = (groupedData: { [key: string]: ITransactionResponse[] }) => {
  return Object.keys(groupedData).map(monthYear => ({
    monthYear,
    transactions: groupedData[monthYear],
  }));
};

export const groupedTransactions = (
  transactions: IPagination<ITransactionResponse> | ITransactionResponse[],
): IPagination<ITransactionsGroupedByMonth> | ITransactionsGroupedByMonth => {
  const transactionArray: ITransactionResponse[] = Array.isArray(transactions)
    ? transactions
    : transactions.data;

  const groupedData = transactionArray.reduce((acc, transaction) => {
    const options = { year: 'numeric', month: 'long' } as const;
    const monthYear = transaction.createdAt.toLocaleDateString('en-US', options);

    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(transaction);
    return acc;
  }, {} as { [key: string]: ITransactionResponse[] });

  const groupedArray = convertToArray(groupedData);

  if (!Array.isArray(transactions)) {
    return {
      currentPage: transactions.currentPage,
      totalPages: transactions.totalPages,
      nextPage: transactions.nextPage,
      prevPage: transactions.prevPage,
      perPage: transactions.perPage,
      total: transactions.total,
      data: groupedArray,
    };
  }

  // Caso a resposta não seja uma paginação, retornar com mesmo formato de uma.
  return {
    currentPage: 1,
    totalPages: 1,
    nextPage: null,
    prevPage: null,
    perPage: transactionArray.length,
    total: transactionArray.length,
    data: groupedArray,
  };
};

export const formatPayloadToCreateTransaction = (
  deposit: IDeposit,
  predicate: Predicate,
  address: string,
): ICreateTransactionPayload => {
  const formattedAssets = deposit.operations
    .map(operation =>
      operation.assetsSent.map(asset => ({
        to: operation.from.address,
        assetId: asset.assetId,
        //@ts-ignore
        amount: asset.amount.format(),
      })),
    )
    .flat();

  const payload = {
    txData: deposit.txData,
    type: TransactionType.DEPOSIT,
    name: `DEPOSIT_${deposit.id}`,
    hash: deposit.id.slice(2),
    sendTime: deposit.date,
    gasUsed: deposit.gasUsed,
    predicateId: predicate.id,
    predicateAddress: address,
    status: TransactionStatus.SUCCESS,
    resume: {
      hash: deposit.id,
      status: TransactionStatus.SUCCESS,
      witnesses: [predicate.owner.address],
      requiredSigners: predicate.minSigners,
      totalSigners: predicate.members.length,
      predicate: {
        id: predicate.id,
        address: predicate.predicateAddress,
      },
      id: '',
    },
    assets: formattedAssets,
    witnesses: [
      {
        ...predicate.owner,
        account: predicate.owner.id,
        createdAt: deposit.date,
      },
    ],
    predicate,
    createdBy: predicate.owner,
    summary: null,
  };

  return payload;
};
