import { Component} from '@angular/core';

import { EXPERIENCE } from '../../../pages/experience/data/experience';
import { ITimelineData } from 'src/app/core/models/experience.model';
import { CommonModule, DatePipe } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'tmr-exp-mobile-timelines',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './exp-mobile-timelines.component.html',
  styleUrl: './exp-mobile-timelines.component.scss'
})
export class ExpMobileTimelinesComponent{
  experienceData: ITimelineData[] = EXPERIENCE;
  selectedIndex: number = 0;

  constructor(private sanitizer: DomSanitizer) {}


 getSanitizedDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }

}
