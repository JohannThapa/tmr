import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';
import { CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[tmr-crypto-auctions-table-item]',
  templateUrl: './nft-auctions-table-item.component.html',
  standalone: true,
  imports: [AngularSvgIconModule, CurrencyPipe],
})
export class NftAuctionsTableItemComponent {
  @Input() auction = <Nft>{};

  constructor() {}
}
