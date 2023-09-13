import { defaultValues } from '@src/utils/constantes';

import { Predicate } from '@models/index';

export default async function () {
  const predicates: Partial<Predicate>[] = [
    {
      name: 'predicate_name',
      predicateAddress: defaultValues['address'],
      abi: 'abi',
      configurable: 'configurable',
      bytes: 'bytes',
      description: 'description',
      addresses: [defaultValues['address'], defaultValues['address']],
      minSigners: 3,
      owner: 'owner',
      network: 'network',
      chainId: 2231,
    },
  ];

  const existingPredicates = await Predicate.find({
    where: [
      { predicateAddress: predicates[0].predicateAddress },
      { abi: predicates[0].abi },
    ],
  });

  if (existingPredicates.length) {
    return;
  }

  for await (const predicate of predicates) {
    await Predicate.create(predicate).save();
  }
}
