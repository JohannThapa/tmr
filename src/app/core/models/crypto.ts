export interface ICryptoData {
  bitcoin: IBitcoinData;
  solana: ISolanaData;
  ethereum: IEthereumData;
}

export interface IBitcoinData {
  outputs: ICryptoOutput[];
}

export interface ISolanaData {
  transactions: ICryptoTransaction[];
}

export interface IEthereumData {
  transactions: IEthereumTransaction[];
}

export interface ICryptoOutput {
  balanceInUSD: number;
  value: number;
  price: string;
  block: {
    height: number;
  };
}

export interface ICryptoTransaction {
  amountInUSD: number;
  amount: number;
  price: string;
  block: {
    height: number;
  };
}

export interface IEthereumTransaction {
  total: number;
  quantity: number;
  price: string;
  block: {
    height: number;
  };
}
