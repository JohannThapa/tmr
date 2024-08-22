/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions } from '../../../../../shared/models/chart-options';
import { ThemeService } from 'src/app/core/services/theme.service';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { BitqueryService } from 'src/app/core/services/bitquery.service';
import { Observable } from 'rxjs';

@Component({
  selector: '[tmr-bitcoin-chart-card]',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, NgApexchartsModule, NgFor, CurrencyPipe],
  templateUrl: './bitcoin-chart-card.component.html',
  styleUrl: './bitcoin-chart-card.component.scss',
})
export class BitcoinChartCardComponent implements OnInit {
  transactions$!: Observable<any[]>;
  public chartOptions!: Partial<ChartOptions>;
  public transactions: any[] = []; // Store transactions
  public formattedTransactions: { time: string; amount: number; change: number }[] = [];

  constructor(
    private themeService: ThemeService,
    private bitcoinService: BitqueryService, // Inject the service
  ) {}

  ngOnInit(): void {
    this.fetchBitcoinTransactions();
  }

  fetchBitcoinTransactions(): void {
    const network = 'bitcoin';
    const limit = 10;
    const offset = 0;
    const { from, till } = this.bitcoinService.getCurrentDateRange();
    this.transactions$ = this.bitcoinService.getBitcoinTransactions(network, limit, offset, from, till);
    this.transactions$.subscribe((transactions) => {
      this.transactions = transactions;
      this.formattedTransactions = transactions.map((txn, index) => {
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
          colors: [this.getPrimaryColor()], // Updated color
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
            formatter: function (val) {
              return val + ' BTC';
            },
          },
        },
        colors: [this.getPrimaryColor()],
      };
    });
  }
  formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  public formatTimeOnly(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
  }

  public getPrimaryColor(): string {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    return this.HSLToHex(primaryColor);
  }
  private calculateChange(index: number): number {
    if (index === 0 || this.transactions.length < 2) {
      return 0; // No change for the first transaction or if there's not enough data
    }

    const previousTransaction = this.transactions[index - 1];
    const currentTransaction = this.transactions[index];

    if (!previousTransaction.input_value_usd || !currentTransaction.input_value_usd) {
      return 0; // Handle cases where value might be missing
    }

    const previousValue = previousTransaction.input_value_usd;
    const currentValue = currentTransaction.input_value_usd;

    return ((currentValue - previousValue) / previousValue) * 100; // Rate of change percentage
  }

  calculatePercentageChange(): number {
    if (this.transactions.length < 2) {
      return 0; // Not enough data to calculate change
    }

    // Ensure amounts are available and are numbers
    const initialAmount = this.transactions[0].input_value_usd;
    const latestAmount = this.transactions[this.transactions.length - 1].input_value_usd;

    // Check for valid amounts
    if (initialAmount == null || latestAmount == null || initialAmount === 0) {
      return 0; // Avoid division by zero and handle null values
    }

    return ((latestAmount - initialAmount) / initialAmount) * 100;
  }

  private HSLToHex(color: string): string {
    const colorArray = color.split('%').join('').split(' ');
    const colorHSL = colorArray.map(Number);
    const hsl = {
      h: colorHSL[0],
      s: colorHSL[1],
      l: colorHSL[2],
    };

    const { h, s, l } = hsl;

    const hDecimal = l / 100;
    const a = (s * Math.min(hDecimal, 1 - hDecimal)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = hDecimal - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

      // Convert to Hex and prefix with "0" if required
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
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
}
