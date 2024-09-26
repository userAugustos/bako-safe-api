import { IQuote } from '@src/server/storage';
import { assets as fuelAssetsList, NetworkEthereum, NetworkFuel } from 'fuels';

export type IAsset = {
  symbol: string;
  slug?: string;
  id: string;
};

export type IAssetMapById = {
  [id: string]: {
    symbol: string;
    slug?: string;
  };
};

export type IAssetMapBySymbol = {
  [symbol: string]: {
    slug?: string;
    id: string;
  };
};
export type Asset = {
  name: string;
  slug: string;
  assetId: string;
  icon?: string;
  amount?: string;
};

export const fuelAssetsByChainId = (chainId: number): Asset[] =>
  fuelAssetsList.reduce<Asset[]>((acc, asset) => {
    console.log(asset);
    const network = asset.networks.find(
      network => network && network.chainId === chainId,
    );
    console.log(network);
    if (network && network.type === 'fuel') {
      acc.push({
        name: asset.name,
        slug: asset.symbol,
        assetId: network.assetId,
        icon: asset.icon,
      });
    }
    return acc;
  }, []);

export const fuelAssets = (): Asset[] =>
  fuelAssetsList.reduce<Asset[]>((acc, asset) => {
    const network = asset.networks.find(
      network => network.type === 'fuel',
    ) as NetworkFuel;
    if (network) {
      acc.push({
        name: asset.name,
        slug: asset.symbol,
        assetId: network.assetId,
        icon: asset.icon,
      });
    }
    return acc;
  }, []);

export const assets = fuelAssets().map(asset => {
  return {
    symbol: asset.slug,
    id: asset.assetId,
  };
});

export const assetsMapById: IAssetMapById = fuelAssets().reduce(
  (previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue.assetId]: {
        symbol: currentValue.slug,
        slug: currentValue.slug,
      },
    };
  },
  {},
);

export const assetsMapBySymbol: IAssetMapBySymbol = fuelAssets().reduce(
  (previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue.slug]: {
        slug: currentValue.slug,
        id: currentValue.assetId,
      },
    };
  },
  {},
);

export const QuotesMock: IQuote[] = Object.entries(assetsMapBySymbol).map(
  ([key, value]) => {
    const price = Math.random() * 100;
    return {
      assetId: value.id,
      price,
    };
  },
);
