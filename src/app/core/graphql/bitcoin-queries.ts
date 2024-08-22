import { gql } from "apollo-angular";

export const getBitcoinAverageTransactionFeeQuery = gql`
  query ($network: BitcoinNetwork!, $dateFormat: String!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
    bitcoin(network: $network) {
      transactions(options: {asc: "date.date"}, date: {since: $from, till: $till}) {
        date: date {
          date(format: $dateFormat)
        }
        count: countBigInt
        feeValue
        avgFee: feeValue(calculate: average)
      }
    }
  }
`;

export const getBitcoinTransactionsQuery = gql`
  query ($network: BitcoinNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime) {
    bitcoin(network: $network) {
      transactions(
        options: {desc: ["block.height", "index"], limit: $limit, offset: $offset}
        time: {since: $from, till: $till}
      ) {
        block {
          timestamp {
            time(format: "%Y-%m-%d %H:%M:%S")
          }
          height
        }
        inputValue
        input_value_usd: inputValue(in: USD)
        outputCount
        inputCount
        index
        hash
        feeValue
        fee_value_usd: feeValue(in: USD)
      }
    }
  }
`;
