export interface AugmentedBlockchainData {
  bitcoin: IBitcoin & { image?: string; title?: string };
  solana: ISolana & { image?: string; title?: string };
  ethereum: IEthereum & { image?: string; title?: string };
}

export interface Iblockchain {
  data?: IBlockChainData;
}

export interface IBlockChainData {
  bitcoin?: IBitcoin;
  solana?: ISolana;
  ethereum?: IEthereum;
}

export interface IBitcoin {
  outputs?: IBitcoinOutput[];
  __typename?: string;
}

export interface IBitcoinOutput {
  balanceInUSD?: number;
  value?: number;
  price?: string;
  block?: Block;
  __typename?: string;
}

export interface Block {
  height?: number;
  __typename?: string;
}

export interface IEthereum {
  transactions?: IEthereumTransaction[];
  __typename?: string;
}

export interface IEthereumTransaction {
  total?: number;
  quantity?: number;
  price?: string;
  block?: Block;
  __typename?: string;
}

export interface ISolana {
  transactions?: ISolanaTransaction[];
  __typename?: string;
}

export interface ISolanaTransaction {
  amountInUSD?: number;
  amount?: number;
  price?: string;
  block?: Block;
  __typename?: string;
}

export interface ITransaction {
  amountInUSD?: number;
  amount?: number;
  price?: string;
  block?: Block;
  __typename?: string;
  total?: number;
  quantity?: number;
}
