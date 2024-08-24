import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ICrypto } from '../../../models/crypto';

@Component({
  selector: '[tmr-crypto-transaction-table-item]',
  templateUrl: './crypto-transaction-table-item.component.html',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, AngularSvgIconModule, CurrencyPipe],
})
export class CryptoTransactionTableItemComponent {
  @Input() crypto = <ICrypto>{};

  constructor() {}
}
