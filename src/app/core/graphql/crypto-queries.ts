import { gql } from 'apollo-angular';

export const getCryptoDataQuery = (limit: number, date: string) => gql`
  query MyQuery {
    bitcoin {
      outputs(options: { desc: ["block.height"], limit: ${limit} }, date: { is: "${date}" }) {
        balanceInUSD: value(in: USD)
        value
        price: expression(get: "balanceInUSD / value")
        block {
          height
        }
      }
    }
    solana {
      transactions(options: { desc: ["block.height"], limit: ${limit} }, date: { is: "${date}" }) {
        amountInUSD: transactionFee(in: USD)
        amount: transactionFee
        price: expression(get: "amountInUSD / amount")
        block {
          height
        }
      }
    }
    ethereum {
      transactions(options: { desc: ["block.height"], limit: ${limit} }, date: { is: "${date}" }) {
        total: amount(in: USD)
        quantity: amount
        price: expression(get: "total/quantity")
        block {
          height
        }
      }
    }
  }
`;
