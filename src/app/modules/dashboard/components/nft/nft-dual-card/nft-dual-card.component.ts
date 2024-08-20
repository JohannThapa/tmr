import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[tmr-crypto-dual-card]',
  templateUrl: './nft-dual-card.component.html',
  standalone: true,
  imports: [NgStyle, CurrencyPipe, AngularSvgIconModule],
})
export class NftDualCardComponent {
  @Input() nft: Nft = <Nft>{};

  constructor() {}
}
