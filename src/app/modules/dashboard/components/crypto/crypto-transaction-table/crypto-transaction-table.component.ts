import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CRYPTO_DATA } from './fake';
import { SimpleTableLoaderComponent } from 'src/app/shared/loaders/tables/simple-table-loader/simple-table-loader.component';
import { CryptoTransactionTableItemComponent } from '../crypto-transaction-table-item/crypto-transaction-table-item.component';
import { ICrypto } from '../../../models/crypto';

@Component({
  selector: '[tmr-crypto-transaction-table]',
  templateUrl: './crypto-transaction-table.component.html',
  standalone: true,
  imports: [CommonModule, NgFor, SimpleTableLoaderComponent, CryptoTransactionTableItemComponent],
})
export class CryptoTransactionTableComponent {
  public currencies: ICrypto[] = [];
  public loading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
      this.currencies = CRYPTO_DATA;
    }, 3000);
  }
}
