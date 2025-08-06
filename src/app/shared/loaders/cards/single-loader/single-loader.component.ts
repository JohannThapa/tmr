import { Component, Input } from '@angular/core';
import { ISingleCardImage, ISize } from 'src/app/modules/dashboard/models/single-card';

@Component({
  selector: '[tmr-single-card-loader]',
  imports: [],
  templateUrl: './single-loader.component.html',
  styleUrl: './single-loader.component.scss',
})
export class SingleLoaderComponent {
  @Input() container: ISize = {
    height: '420',
    width: '',
  };
  @Input() image: ISingleCardImage = {
    container: {
      height: '240',
      width: '',
    },
    icon: {
      height: '40px',
      width: '40px',
    },
  };
}
