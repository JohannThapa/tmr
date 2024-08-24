import { CommonModule, CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { IAvgFeeBitcoin } from '../../../models/crypto';
import { IDualCardStyle } from '../../../models/single-card';

@Component({
  selector: '[tmr-crypto-dual-card]',
  templateUrl: './crypto-dual-card.component.html',
  standalone: true,
  imports: [CommonModule, NgStyle, NgIf, CurrencyPipe, AngularSvgIconModule],
})
export class CryptoDualCardComponent {
  @Input() avg: IAvgFeeBitcoin = <IAvgFeeBitcoin>{};
  @Input() image: string = '';
  @Input() avatar: string = '';
  @Input() title: string = 'Average Bitcoin Transaction Fee';
  @Input() cardStyle: IDualCardStyle = {
    container: {
      height: '420px',
      width: '',
    },
    image: {
      height: '240px',
      width: '240px',
    },
  };
  get transactions() {
    if (this.avg.transactions.length == 0) return [];
    return this.avg.transactions;
  }

  constructor() {}
}
