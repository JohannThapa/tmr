import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../../models/nft';
import { NgStyle, CurrencyPipe, NgClass } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
    selector: '[nft-single-card]',
    templateUrl: './nft-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe, AngularSvgIconModule, NgClass],
})
export class NftSingleCardComponent implements OnInit {
  @Input() nft: Nft = <Nft>{};

  constructor() {}

  ngOnInit(): void {}
}
