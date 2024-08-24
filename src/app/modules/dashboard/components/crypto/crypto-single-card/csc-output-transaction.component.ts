import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IBitcoinOutput, IEthereumTransaction, ISolanaTransaction } from 'src/app/core/models/blockchain';

@Component({
  selector: 'tmr-csc-output-transaction',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DecimalPipe],
  template: `
    <!-- Bitcoin transaction -->
    <ng-container *ngIf="isBitcoin; else transactionTemplate">
      <div class="flex items-end justify-between text-sm font-semibold text-muted-foreground">
        <span>Price: {{ formatPrice(output?.price || '0') }}</span>
        <span>Quantity: {{ output?.value | number : '1.2-2' }}</span>
      </div>
      <div class="mt-6 flex items-center justify-between">
        <button
          class="lex-none rounded-md bg-card px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">
          Balance:
        </button>
        <button
          class="hover:bg-primary-600 flex-none rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">
          {{ output?.balanceInUSD | currency }}
        </button>
      </div>
    </ng-container>
    <!-- End Bitcoin transaction -->

    <!-- Ethereum transaction -->
    <ng-template #transactionTemplate>
      <ng-container *ngIf="isEthereum; else solanaTemplate">
        <div class="flex items-end justify-between text-sm font-semibold text-muted-foreground">
          <span>Price: {{ formatPrice(ethereumTransaction?.price || '0') }}</span>
          <span>Quantity: {{ ethereumTransaction?.quantity | number : '1.2-2' }}</span>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <button
            class="lex-none rounded-md bg-card px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">
            Total:
          </button>
          <button
            class="hover:bg-primary-600 flex-none rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">
            {{ ethereumTransaction?.total | currency }}
          </button>
        </div>
      </ng-container>
      <!-- End Ethereum transaction -->

      <!-- Solana transaction -->
      <ng-template #solanaTemplate>
        <div class="flex items-end justify-between text-sm font-semibold text-muted-foreground">
          <span>Price: {{ formatPrice(solanaTransaction?.price || '0') }}</span>
          <span>Quantity: {{ solanaTransaction?.amount | number : '1.2-2' }}</span>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <button
            class="lex-none rounded-md bg-card px-4 py-2.5 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">
            Amount:
          </button>
          <button
            class="hover:bg-primary-600 flex-none rounded-md bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground">
            {{ solanaTransaction?.amountInUSD | currency }}
          </button>
        </div>
      </ng-template>
    </ng-template>
    <!-- End Solana transaction -->
  `,
  styles: ``,
})
export class CscOutputTransactionComponent {
  @Input() output?: IBitcoinOutput | null;
  @Input() solanaTransaction!: ISolanaTransaction | null;
  @Input() ethereumTransaction!: IEthereumTransaction | null;
  @Input() isBitcoin = false;
  @Input() isEthereum = false;

  formatPrice(price: string | undefined): string {
    if (!price) return '0.00 USD';
    const parsedPrice = parseFloat(price);
    return `${parsedPrice.toFixed(2)} USD`;
  }
}
