import { Component } from '@angular/core';
import { IdxHeaderComponent } from '../../components/index/idx-header/idx-header.component';
import { TextA1Component } from 'src/app/shared/components/texts/text-a1/text-a1.component';
import { IdxBubbleCardComponent } from '../../components/index/idx-bubble-card/idx-bubble-card.component';
import { BgA1Component } from 'src/app/shared/components/backgrounds/bg-a1/bg-a1.component';
import { TextA2Component } from 'src/app/shared/components/texts/text-a2/text-a2.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BgA1Component, IdxHeaderComponent, TextA1Component, TextA2Component, IdxBubbleCardComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
