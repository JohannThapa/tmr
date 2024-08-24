/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../../../../../shared/models/chart-options';
import { ThemeService } from 'src/app/core/services/theme.service';
import { CommonModule, CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { BitqueryService } from 'src/app/core/services/bitquery.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SingleLoaderComponent } from 'src/app/shared/loaders/cards/single-loader/single-loader.component';
import { ISingleCardImage, ISize } from '../../../models/single-card';
import { hslToHexColor } from 'src/app/shared/utils/colors';

@Component({
  selector: '[tmr-bitcoin-chart-card]',
  standalone: true,
  imports: [
    CommonModule,
    AngularSvgIconModule,
    NgApexchartsModule,
    NgFor,
    CurrencyPipe,
    NgClass,
    SingleLoaderComponent,
  ],
  templateUrl: './bitcoin-chart-card.component.html',
  styleUrls: ['./bitcoin-chart-card.component.scss'],
})
export class BitcoinChartCardComponent implements OnInit, OnDestroy {
  @Input() container: ISize = {
    height: '420px',
    width: '',
  };
  @Input() image: ISingleCardImage = {
    container: {
      height: '240px',
      width: '',
    },
    icon: {
      height: '40px',
      width: '40px',
    },
  };

  transactions$!: Observable<any[]>;
  chartOptions!: Partial<ChartOptions>;
  transactions: any[] = [];
  formattedTransactions: { time: string; amount: number; change: number }[] = [];
  private destroy$ = new Subject<void>();

  constructor(private themeService: ThemeService, private bitcoinService: BitqueryService) {}

  ngOnInit(): void {
    this.fetchBitcoinTransactions();
  }

  fetchBitcoinTransactions(): void {
    const network = 'bitcoin';
    const limit = 10;
    const offset = 0;
    const { from, till } = this.bitcoinService.getCurrentDateRange();
    this.transactions$ = this.bitcoinService.getBitcoinTransactions(network, limit, offset, from, till);
    this.transactions$.pipe(takeUntil(this.destroy$)).subscribe((transactions) => {
      this.transactions = transactions;
      this.formatData();
    });
  }

  private formatData(): void {
    this.formattedTransactions = this.transactions.map((txn, index) => {
      const { block, input_value_usd } = txn;
      return {
        time: block.timestamp.time,
        amount: input_value_usd,
        change: this.calculateChange(index),
      };
    });

    const data = this.formattedTransactions.map((tx) => tx.amount);
    const categories = this.formattedTransactions.map((tx) => tx.time);
    this.chartOptions = {
      series: [
        {
          name: 'Bitcoin',
          data: data,
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: 150,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.2,
          stops: [15, 120, 100],
        },
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 3,
        colors: [this.getPrimaryColor()],
      },
      xaxis: {
        categories: categories,
        labels: {
          show: false,
        },
        crosshairs: {
          position: 'front',
          stroke: {
            color: this.getPrimaryColor(),
            width: 1,
            dashArray: 4,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      tooltip: {
        theme: this.themeService.theme().mode,
        y: {
          formatter: (val) => `${val} BTC`,
        },
      },
      colors: [this.getPrimaryColor()],
    };
  }

  public formatTimeOnly(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }

  public getPrimaryColor(): string {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    return hslToHexColor(primaryColor);
  }

  private calculateChange(index: number): number {
    if (index === 0 || this.transactions.length < 2) {
      return 0;
    }

    const previousTransaction = this.transactions[index - 1];
    const currentTransaction = this.transactions[index];

    if (!previousTransaction.input_value_usd || !currentTransaction.input_value_usd) {
      return 0;
    }

    const previousValue = previousTransaction.input_value_usd;
    const currentValue = currentTransaction.input_value_usd;

    return ((currentValue - previousValue) / previousValue) * 100;
  }

  public calculatePercentageChange(): number {
    if (this.transactions.length < 2) {
      return 0;
    }

    const initialAmount = this.transactions[0].input_value_usd;
    const latestAmount = this.transactions[this.transactions.length - 1].input_value_usd;

    if (initialAmount == null || latestAmount == null || initialAmount === 0) {
      return 0;
    }

    return ((latestAmount - initialAmount) / initialAmount) * 100;
  }
  public formatAmount(amount: number): string {
    if (amount >= 1e9) {
      return (amount / 1e9).toFixed(2) + 'b';
    } else if (amount >= 1e6) {
      return (amount / 1e6).toFixed(2) + 'm';
    } else if (amount >= 1e3) {
      return (amount / 1e3).toFixed(2) + 'k';
    } else {
      return amount.toFixed(2);
    }
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
