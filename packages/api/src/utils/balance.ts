import {
  BN,
  CoinQuantity,
  Output,
  OutputCoin,
  OutputType,
  TransactionRequestOutput,
  bn,
} from 'fuels';

import app from '@src/server/app';
import { Transaction } from '@src/models';

const isOutputCoin = (output: TransactionRequestOutput): output is OutputCoin =>
  output.type === OutputType.Coin;

const calculateTxReservedBalances = (
  transactions: Transaction[],
): CoinQuantity[] => {
  const reservedMap = new Map<string, BN>();

  transactions.forEach(transaction => {
    const { outputs } = transaction.resume;

    outputs
      .filter((output: TransactionRequestOutput) => isOutputCoin(output))
      .forEach((output: OutputCoin) => {
        const { assetId, amount } = output;
        const currentAmount = reservedMap.get(assetId) || new BN(0);
        reservedMap.set(assetId, currentAmount.add(amount));
      });
  });

  const result = Array.from(reservedMap, ([assetId, amount]) => ({
    assetId,
    amount,
  }));

  return result;
};

const calculateBalanceUSD = (balances: CoinQuantity[]): string => {
  let balanceUSD = 0;

  balances.forEach(balance => {
    const formattedAmount = parseFloat(balance.amount.format());
    const priceUSD = app._quoteCache.getQuote(balance.assetId);
    balanceUSD += formattedAmount * priceUSD;
  });

  return balanceUSD.toFixed(2);
};

const subCoins = (
  balances: CoinQuantity[],
  reservedCoins: CoinQuantity[],
): CoinQuantity[] => {
  const reservedMap = new Map(
    reservedCoins.map(coin => [coin.assetId, coin.amount]),
  );

  return balances
    .map(balance => {
      const reservedAmount = reservedMap.get(balance.assetId);
      const adjustedAmount = reservedAmount
        ? balance.amount.sub(reservedAmount)
        : balance.amount;
      return { ...balance, amount: adjustedAmount };
    })
    .filter(balance => balance.amount.gt(bn.parseUnits('0')));
};

export { isOutputCoin, calculateTxReservedBalances, calculateBalanceUSD, subCoins };
