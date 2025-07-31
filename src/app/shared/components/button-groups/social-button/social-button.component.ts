import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SOCIAL_LINKS } from 'src/app/core/constants/social-links';
import { ISocials } from 'src/app/shared/models/socials';

@Component({
    selector: 'tmr-social-button',
    imports: [NgFor, NgStyle],
    templateUrl: './social-button.component.html',
    styleUrl: './social-button.component.scss'
})
export class SocialButtonComponent {
  @Input() isColor: boolean = false;
  @Input() socialLinks: ISocials[] = SOCIAL_LINKS;

  isOpen: boolean = false;

  toggleIcons() {
    this.isOpen = !this.isOpen;
  }
}
