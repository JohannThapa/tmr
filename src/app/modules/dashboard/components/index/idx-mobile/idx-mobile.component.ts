import { Input, Component } from '@angular/core';
import { CustomImgComponent } from 'src/app/shared/components/images/custom-img/custom-img.component';
import { BubbleCardComponent } from 'src/app/shared/components/cards/bubble-card/bubble-card.component';
import { SocialButtonComponent } from 'src/app/shared/components/button-groups/social-button/social-button.component';
import { ISocials } from 'src/app/shared/models/socials';
import { SOCIAL_LINKS } from 'src/app/core/constants/social-links';

@Component({
  selector: 'tmr-idx-mobile',
  standalone: true,
  imports: [BubbleCardComponent, CustomImgComponent, SocialButtonComponent],
  templateUrl: './idx-mobile.component.html',
  styleUrl: './idx-mobile.component.scss',
})
export class IdxMobileComponent {
  @Input() isColor: boolean = false;
  @Input() socialLinks: ISocials[] = SOCIAL_LINKS;
  @Input() profilePicture: string = 'assets/images/rupak.png';
}
