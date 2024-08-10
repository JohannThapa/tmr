import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';

@Component({
    selector: 'app-nft',
    templateUrl: './nft.component.html',
    standalone: true,
    imports: [
        NftHeaderComponent,
        NftDualCardComponent,
        NftSingleCardComponent,
        NftChartCardComponent,
        NftAuctionsTableComponent,
    ],
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'Angular with Tailwind CSS',
        creator: 'Aastha Thapa',
        current_price: 43.21,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_price: 22,
        // image: './assets/images/img-01.jpg',
        image: './assets/icons/working.svg',
        avatar: './assets/avatars/rupak.png',
      },
      {
        id: 34356772,
        title: 'Collabration',
        price: 879,
        last_price: 899,
        // image: './assets/icons/map.svg',
        image: './assets/icons/interview.svg',
      },
      {
        id: 34356773,
        title: 'Top notch codes',
        price: 33.3,
        last_price: 25,
        image: './assets/icons/website.svg',
        // image: './assets/icons/complete.svg',
      },
    ];
  }

  ngOnInit(): void {}
}
