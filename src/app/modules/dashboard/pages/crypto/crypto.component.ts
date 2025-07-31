import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { AugmentedBlockchainData } from 'src/app/core/models/blockchain';
import { BitqueryService } from 'src/app/core/services/bitquery.service';
import { CommonModule } from '@angular/common';
import { CryptoSingleCardComponent } from '../../components/crypto/crypto-single-card/crypto-single-card.component';
import { CryptoType } from 'src/app/core/types/crypto-type';
import { BitcoinChartCardComponent } from '../../components/crypto/bitcoin-chart-card/bitcoin-chart-card.component';
import { IBitcoinChart } from '../../models/charts';
import { IAvgFeeBitcoin } from '../../models/crypto';
import { SingleLoaderComponent } from 'src/app/shared/loaders/cards/single-loader/single-loader.component';
import { IDualCardStyle, ISingleCard } from '../../models/single-card';
import { DualCardData, SingleCardData } from './data/content';
import { DualLoaderComponent } from 'src/app/shared/loaders/cards/dual-loader/dual-loader.component';
import {
  CryptoChartCardComponent,
  CryptoDualCardComponent,
  CryptoHeaderComponent,
  CryptoTransactionTableComponent,
} from '../../components/crypto';

@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    imports: [
        CommonModule,
        CryptoHeaderComponent,
        CryptoDualCardComponent,
        CryptoSingleCardComponent,
        CryptoChartCardComponent,
        CryptoTransactionTableComponent,
        CryptoSingleCardComponent,
        BitcoinChartCardComponent,
        SingleLoaderComponent,
        DualLoaderComponent,
    ]
})
export class CryptoComponent implements OnInit, OnDestroy {
  cryptoData$!: Observable<AugmentedBlockchainData>;
  cryptoTypes: Array<CryptoType> = ['solana', 'ethereum'];

  private destroy$ = new Subject<void>();

  singleCardData: ISingleCard = SingleCardData;
  dualCardData: IDualCardStyle = DualCardData;
  bitcoinChartData!: IBitcoinChart;
  averageFee$!: Observable<IAvgFeeBitcoin>;
  constructor(private bitqueryService: BitqueryService) {}

  ngOnInit(): void {
    this.fetchAverageTransactionFee();

    this.fetchBitcoinTransactions();
    const currentDate = new Date().toISOString().split('T')[0]; //'YYYY-MM-DD'

    this.cryptoData$ = this.bitqueryService.getCryptoData(5, currentDate).pipe(
      map((data) => ({
        bitcoin: {
          ...data.bitcoin,
          image: './assets/icons/mindset.svg',
          title: 'Bitcoin',
        },
        solana: {
          ...data.solana,
          image: './assets/icons/bitcoin_p2p.svg',
          title: 'Solana',
        },
        ethereum: {
          ...data.ethereum,
          image: './assets/icons/ethereum.svg',
          title: 'Ethereum',
        },
      })),
      takeUntil(this.destroy$),
    );
  }
  fetchBitcoinTransactions(): void {}
  fetchAverageTransactionFee(): void {
    const network = 'bitcoin'; // Specify the network
    const dateFormat = 'yyyy-MM-dd'; // Specify the date format
    const { from, till } = this.bitqueryService.getCurrentDateRange();
    this.averageFee$ = this.bitqueryService.getAverageBitcoinTransactionFee(network, dateFormat, from, till);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
