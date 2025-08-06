import { Component } from '@angular/core';
import { ExpHeaderComponent } from '../../components/experience/exp-header/exp-header.component';
import { ExpTechnologiesComponent } from '../../components/experience/exp-technologies/exp-technologies.component';
import { ExpTimelinesComponent } from '../../components/experience/exp-timelines/exp-timelines.component';
import { ITimelineData } from 'src/app/core/models/experience.model';
import { EXPERIENCE } from './data/experience';
import { ITechnology } from 'src/app/core/models/project.model';
import { TECHNOLOGIES } from './data/technologies';
import { ResponsiveService } from 'src/app/core/services/responsive.service';
import { CommonModule } from '@angular/common';
import { ExpMobileTimelinesComponent } from '../../components/experience/exp-mobile-timelines/exp-mobile-timelines.component';

@Component({
  selector: 'app-experience',
  imports: [
    CommonModule,
    ExpHeaderComponent,
    ExpTechnologiesComponent,
    ExpTimelinesComponent,
    ExpMobileTimelinesComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience: ITimelineData[];
  technology: ITechnology[];

  isMobile$ = this.responsiveService.isMobile$;
  isDesktop$ = this.responsiveService.isDesktop$;

  constructor(private responsiveService: ResponsiveService) {
    this.experience = EXPERIENCE;
    this.technology = TECHNOLOGIES;
  }
}
