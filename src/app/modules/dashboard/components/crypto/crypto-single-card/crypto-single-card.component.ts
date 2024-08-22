/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, CurrencyPipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AugmentedBlockchainData, IBitcoin, IEthereum, ISolana } from 'src/app/core/models/blockchain';
import { CryptoType } from 'src/app/core/types/crypto-type';

@Component({
  selector: '[tmr-single-card]',
  standalone: true,
  imports: [CommonModule, NgStyle, CurrencyPipe, DecimalPipe, AngularSvgIconModule, NgClass],
  templateUrl: './crypto-single-card.component.html',
  styleUrl: './crypto-single-card.component.scss',
})
export class CryptoSingleCardComponent {
  @Input() cryptoType!: CryptoType;
  @Input() cryptoData?: AugmentedBlockchainData;
  getCryptoData(type: CryptoType) {
    return this.cryptoData?.[type];
  }

  isBitcoin(data: any): data is IBitcoin {
    return !!data?.outputs;
  }

  isEthereum(data: any): data is IEthereum {
    return !!data?.transactions;
  }

  isSolana(data: any): data is ISolana {
    return !!data?.transactions;
  }

  constructor() {
    console.log(this.cryptoData);
  }

  formatPrice(price: string): string {
    const parsedPrice = parseFloat(price);
    const decimalPart = Math.round(parsedPrice * 100) / 100;
    return decimalPart.toFixed(2) + ' USD';
  }
}
