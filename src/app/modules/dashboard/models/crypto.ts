export interface ICrypto {
  image?: string;
  title?: string;
  price?: number;
  volume?: number;
  marketCap?: number;
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
