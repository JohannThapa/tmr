/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, CurrencyPipe, DecimalPipe, NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AugmentedBlockchainData, IEthereumTransaction, ISolanaTransaction } from 'src/app/core/models/blockchain';
import { CryptoType } from 'src/app/core/types/crypto-type';
import { CscOutputTransactionComponent } from './csc-output-transaction.component';
import { SingleLoaderComponent } from 'src/app/shared/loaders/cards/single-loader/single-loader.component';
import { ISingleCardStyle } from '../../../models/single-card';
import { CryptoEnum } from 'src/app/core/enums/crypto.enum';

@Component({
    selector: '[tmr-single-card]',
    imports: [
        CommonModule,
        NgStyle,
        CurrencyPipe,
        DecimalPipe,
        AngularSvgIconModule,
        NgClass,
        CscOutputTransactionComponent,
        SingleLoaderComponent,
    ],
    templateUrl: './crypto-single-card.component.html',
    styleUrl: './crypto-single-card.component.scss'
})
export class CryptoSingleCardComponent {
  @Input() cryptoType!: CryptoType;
  @Input() cryptoData?: AugmentedBlockchainData;
  @Input() cardStyle!: ISingleCardStyle;
  crypto = CryptoEnum;

  getCryptoType(): CryptoType {
    if (this.cryptoData?.bitcoin?.outputs) {
      return CryptoEnum.Bitcoin;
    } else if (this.cryptoData?.ethereum?.transactions) {
      return CryptoEnum.Ethereum;
    } else if (this.cryptoData?.solana?.transactions) {
      return CryptoEnum.Solana;
    }
    return CryptoEnum.Ethereum;
  }

  getCrypto(type: CryptoType): IEthereumTransaction | ISolanaTransaction | null {
    const transactions =
      type === CryptoEnum.Ethereum
        ? this.cryptoData?.ethereum?.transactions
        : type === CryptoEnum.Solana
        ? this.cryptoData?.solana?.transactions
        : undefined;
    return transactions && transactions.length > 0 ? transactions[0] : null;
  }

  constructor() {}

  get balanceLabel(): string {
    switch (this.cryptoType) {
      case CryptoEnum.Bitcoin:
        return 'Balance:';
      case CryptoEnum.Solana:
        return 'Amount:';
      case CryptoEnum.Ethereum:
        return 'Total:';
      default:
        return 'Balance:';
    }
  }

  formatPrice(price: string): string {
    const parsedPrice = parseFloat(price);
    const decimalPart = Math.round(parsedPrice * 100) / 100;
    return decimalPart.toFixed(2) + ' USD';
  }
}
