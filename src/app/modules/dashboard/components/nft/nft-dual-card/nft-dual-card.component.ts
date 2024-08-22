import { Component, Input } from '@angular/core';
import { NgStyle, CurrencyPipe, NgIf, CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IAvgFeeBitcoin } from '../../../models/crypto';

@Component({
  selector: '[tmr-crypto-dual-card]',
  templateUrl: './nft-dual-card.component.html',
  standalone: true,
  imports: [CommonModule, NgStyle, NgIf, CurrencyPipe, AngularSvgIconModule],
})
export class NftDualCardComponent {
  @Input() avg: IAvgFeeBitcoin = <IAvgFeeBitcoin>{};
  @Input() image: string = '';
  @Input() avatar: string = '';
  @Input() title: string = 'Average Bitcoin Transaction Fee';

  get transactions() {
    if (this.avg.transactions.length == 0) return [];
    return this.avg.transactions;
  }

  constructor() {}
}
