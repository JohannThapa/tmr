import { Component, Input } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NgStyle, CurrencyPipe, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: '[tmr-crypto-single-card]',
  templateUrl: './nft-single-card.component.html',
  standalone: true,
  imports: [NgStyle, CurrencyPipe, AngularSvgIconModule, NgClass],
})
export class NftSingleCardComponent {
  @Input() nft: Nft = <Nft>{};

  constructor() {}
}
