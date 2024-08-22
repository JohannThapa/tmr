import { AugmentedBlockchainData } from "src/app/core/models/blockchain";

export const Fake: AugmentedBlockchainData = {
  bitcoin: {
    outputs: [
      {
        balanceInUSD: 108480285.45452397,
        value: 1487.06910486,
        price: '72949.0546875001',
        block: {
          height: 834585,
          __typename: 'Block',
        },
        __typename: 'BitcoinTransactionOutput',
      },
      {
        balanceInUSD: 338041265.5946221,
        value: 4633.93620442,
        price: '72949.05468750029',
        block: {
          height: 834584,
          __typename: 'Block',
        },
        __typename: 'BitcoinTransactionOutput',
      },
      {
        balanceInUSD: 234016734.7992185,
        value: 3207.94746144,
        price: '72949.0546875016',
        block: {
          height: 834583,
          __typename: 'Block',
        },
        __typename: 'BitcoinTransactionOutput',
      },
      {
        balanceInUSD: 385673266.30122507,
        value: 5286.88504537,
        price: '72949.05468750057',
        block: {
          height: 834582,
          __typename: 'Block',
        },
        __typename: 'BitcoinTransactionOutput',
      },
      {
        balanceInUSD: 223047328.33330914,
        value: 3057.57667853,
        price: '72949.05468749985',
        block: {
          height: 834581,
          __typename: 'Block',
        },
        __typename: 'BitcoinTransactionOutput',
      },
    ],
    image: './assets/icons/mindset.svg',
    title: 'Bitcoin',
    __typename: 'Bitcoin',
  },
  solana: {
    transactions: [
      {
        amountInUSD: 5.7687920412831355,
        amount: 0.035116991,
        price: '164.27352905273506',
        block: {
          height: 254012451,
          __typename: 'SolanaBlockInfo',
        },
        __typename: 'SolanaTransaction',
      },
      {
        amountInUSD: 22.184238072622893,
        amount: 0.135044509,
        price: '164.27352905272804',
        block: {
          height: 254012450,
          __typename: 'SolanaBlockInfo',
        },
        __typename: 'SolanaTransaction',
      },
      {
        amountInUSD: 10.169593805276712,
        amount: 0.061906467,
        price: '164.2735290527355',
        block: {
          height: 254012449,
          __typename: 'SolanaBlockInfo',
        },
        __typename: 'SolanaTransaction',
      },
      {
        amountInUSD: 6.9914004096346405,
        amount: 0.042559507,
        price: '164.27352905273645',
        block: {
          height: 254012448,
          __typename: 'SolanaBlockInfo',
        },
        __typename: 'SolanaTransaction',
      },
      {
        amountInUSD: 11.823191682912618,
        amount: 0.071972592,
        price: '164.27352905273466',
        block: {
          height: 254012447,
          __typename: 'SolanaBlockInfo',
        },
        __typename: 'SolanaTransaction',
      },
    ],
    image: './assets/icons/website.svg',
    title: 'Solana',
    __typename: 'Solana',
  },
  ethereum: {
    transactions: [
      {
        total: 61926.85323911832,
        quantity: 15.529759450942231,
        price: '3987.6247558593736',
        block: {
          height: 19429555,
          __typename: 'Block',
        },
        __typename: 'EthereumTransactions',
      },
      {
        total: 298298.4196548246,
        quantity: 74.80604066782058,
        price: '3987.624755859376',
        block: {
          height: 19429554,
          __typename: 'Block',
        },
        __typename: 'EthereumTransactions',
      },
      {
        total: 104732.20298036987,
        quantity: 26.264307549620217,
        price: '3987.6247558593755',
        block: {
          height: 19429553,
          __typename: 'Block',
        },
        __typename: 'EthereumTransactions',
      },
      {
        total: 143760.58077417128,
        quantity: 36.05168228603528,
        price: '3987.6247558593773',
        block: {
          height: 19429552,
          __typename: 'Block',
        },
        __typename: 'EthereumTransactions',
      },
      {
        total: 135702.5993281663,
        quantity: 34.03093511463592,
        price: '3987.624755859375',
        block: {
          height: 19429551,
          __typename: 'Block',
        },
        __typename: 'EthereumTransactions',
      },
    ],
    image: './assets/icons/interview.svg',
    title: 'Ethereum',
    __typename: 'Ethereum',
  },
};
