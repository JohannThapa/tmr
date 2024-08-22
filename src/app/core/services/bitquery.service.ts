/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { GRAPHQL_V1_API_URL } from '../constants/api-url';
import { environment } from 'src/environments/environment';
import { Apollo } from 'apollo-angular';
import { catchError, map, Observable, of } from 'rxjs';
import { IBlockChainData } from '../models/blockchain';
import { getCryptoDataQuery } from '../graphql/crypto-queries';
import { getBitcoinAverageTransactionFeeQuery, getBitcoinTransactionsQuery } from '../graphql/bitcoin-queries';

@Injectable({
  providedIn: 'root',
})
export class BitqueryService {
  private apiUrl = GRAPHQL_V1_API_URL;
  private apiKey = environment.bitQueryApiKey.v1;

  constructor(private apollo: Apollo) {}

  public getCurrentDateRange(): { from: string; till: string } {
    const now = new Date();
    const from = new Date(now.setHours(0, 0, 0, 0)).toISOString();
    const till = new Date().toISOString();
    return { from, till };
  }

  getBitcoinTransactions(
    network: string,
    limit: number,
    offset: number,
    from?: string,
    till?: string,
  ): Observable<any[]> {
    const { from: defaultFrom, till: defaultTill } = this.getCurrentDateRange();
    const queryFrom = from || defaultFrom;
    const queryTill = till || defaultTill;

    return this.apollo
      .watchQuery<any>({
        query: getBitcoinTransactionsQuery,
        variables: {
          network,
          limit,
          offset,
          from: queryFrom,
          till: queryTill,
        },
        context: {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        },
      })
      .valueChanges.pipe(
        map((result) => result.data.bitcoin.transactions),
        catchError((error) => {
          console.error('Error fetching Bitcoin transactions', error);
          return of([]);
        }),
      );
  }

  getAverageBitcoinTransactionFee(network: string, dateFormat: string, from?: string, till?: string): Observable<any> {
    const { from: defaultFrom, till: defaultTill } = this.getCurrentDateRange();
    const queryFrom = from || defaultFrom;
    const queryTill = till || defaultTill;

    return this.apollo
      .watchQuery<any>({
        query: getBitcoinAverageTransactionFeeQuery,
        variables: {
          network,
          dateFormat,
          from: queryFrom,
          till: queryTill,
        },
        context: {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        },
      })
      .valueChanges.pipe(
        map(({ data }) => data.bitcoin),
        catchError((error) => {
          console.error('Error fetching average Bitcoin transaction fee', error);
          return of({});
        }),
      );
  }
  getCryptoData(limit: number, date: string): Observable<IBlockChainData> {
    const query = getCryptoDataQuery(limit, date);
    return this.apollo
      .watchQuery<IBlockChainData>({
        query,
        context: {
          headers: {
            'X-API-KEY': this.apiKey,
          },
        },
      })
      .valueChanges.pipe(
        map((result) => result.data),
        catchError((error) => {
          console.error('Error fetching crypto data', error);
          return of({});
        }),
      );
  }

  getBitcoinData(limit: number, date: string): Observable<any> {
    return this.getCryptoData(limit, date).pipe(map((data) => data.bitcoin));
  }

  getSolanaData(limit: number, date: string): Observable<any> {
    return this.getCryptoData(limit, date).pipe(map((data) => data.solana));
  }

  getEthereumData(limit: number, date: string): Observable<any> {
    return this.getCryptoData(limit, date).pipe(map((data) => data.ethereum));
  }
}
