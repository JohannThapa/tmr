import { DatePipe, NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ITimelineData } from 'src/app/core/models/experience.model';
import { BadgeA1Component } from 'src/app/shared/components/badges/badge-a1/badge-a1.component';
import { calculateDuration } from 'src/app/shared/utils/date';
import { EXPERIENCE } from '../../../pages/experience/data/experience';

@Component({
  selector: 'tmr-exp-timelines',
  imports: [NgFor, DatePipe, AngularSvgIconModule, BadgeA1Component],
  templateUrl: './exp-timelines.component.html',
  styleUrl: './exp-timelines.component.scss',
})
export class ExpTimelinesComponent implements AfterViewInit {
  @Input() timelineData: ITimelineData[] = EXPERIENCE;

  constructor(private el: ElementRef, private renderer: Renderer2, private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    const targets = this.el.nativeElement.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'in-view');
          }
        });
      },
      { threshold: 0.5 },
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targets.forEach((target: any) => observer.observe(target));
  }

  getTotalDuration(start: string, end: string) {
    return calculateDuration(start, end);
  }

  getSanitizedDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }
}
