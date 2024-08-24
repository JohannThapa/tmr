export interface ICrypto {
  image?: string;
  title?: string;
  volume?: number;
  name?: string;
  shortName?: string;
  price?: number;
  change1d?: number;
  marketCap?: number;
  volume24h?: number;
  circulatingSupply?: number;
}

export interface IAvgFeeBitcoin {
  transactions: IAvgFeeTransaction[];
  __typename?: string;
}

export interface IAvgFeeTransaction {
  date?: IAvgFeeDateClass;
  count?: string;
  feeValue?: number;
  avgFee?: number;
  __typename?: string;
}

export interface IAvgFeeDateClass {
  date?: string;
  __typename?: string;
}
