/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
// import { map, takeUntil } from 'rxjs/operators';
import { AugmentedBlockchainData } from 'src/app/core/models/blockchain';
import { BitqueryService } from 'src/app/core/services/bitquery.service';
import { CommonModule } from '@angular/common';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { CryptoSingleCardComponent } from '../../components/crypto/crypto-single-card/crypto-single-card.component';
import { Nft } from '../../models/nft';
import { CryptoType } from 'src/app/core/types/crypto-type';
import { BitcoinChartCardComponent } from '../../components/crypto/bitcoin-chart-card/bitcoin-chart-card.component';
import { IBitcoinChart } from '../../models/charts';
import { IAvgFeeBitcoin } from '../../models/crypto';

@Component({
  selector: 'app-crypto',
  templateUrl: './nft.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NftHeaderComponent,
    NftDualCardComponent,
    NftSingleCardComponent,
    NftChartCardComponent,
    NftAuctionsTableComponent,
    CryptoSingleCardComponent,
    BitcoinChartCardComponent,
  ],
})
export class NftComponent implements OnInit, OnDestroy {
  cryptoData$!: Observable<AugmentedBlockchainData>;
  cryptoTypes: Array<CryptoType> = [ 'solana', 'ethereum'];

  private destroy$ = new Subject<void>();

  nft: Array<Nft>;
  bitcoinChartData!: IBitcoinChart;
  averageFee$!: Observable<IAvgFeeBitcoin>;
  constructor(private bitqueryService: BitqueryService) {
    this.nft = [
      {
        id: 34356771,
        title: 'Angular with Tailwind CSS',
        creator: 'Aastha Thapa',
        current_price: 43.21,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_price: 22,
        image: './assets/icons/working.svg',
        avatar: './assets/avatars/rupak.png',
      },
      {
        id: 34356772,
        title: 'Collaboration',
        price: 879,
        last_price: 899,
        image: './assets/icons/interview.svg',
      },
      {
        id: 34356773,
        title: 'Top notch codes',
        price: 33.3,
        last_price: 25,
        image: './assets/icons/website.svg',
      },
    ];
  }

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
          image: './assets/icons/website.svg',
          title: 'Solana',
        },
        ethereum: {
          ...data.ethereum,
          image: './assets/icons/interview.svg',
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
    const { from, till } = this.bitqueryService.getCurrentDateRange(); // Or specify custom dates

    this.averageFee$ = this.bitqueryService.getAverageBitcoinTransactionFee(network, dateFormat, from, till);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
