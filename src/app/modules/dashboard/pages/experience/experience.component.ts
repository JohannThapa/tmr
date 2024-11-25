import { Component } from '@angular/core';
import { ExpHeaderComponent } from '../../components/experience/exp-header/exp-header.component';
import { ExpTechnologiesComponent } from '../../components/experience/exp-technologies/exp-technologies.component';
import { ExpTimelinesComponent } from '../../components/experience/exp-timelines/exp-timelines.component';
import { ITimelineData } from 'src/app/core/models/experience.model';
import { EXPERIENCE } from './data/experience';
import { ITechnology } from 'src/app/core/models/project.model';
import { TECHNOLOGIES } from './data/technologies';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExpHeaderComponent, ExpTechnologiesComponent, ExpTimelinesComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experience: ITimelineData[];
  technology: ITechnology[];
  constructor() {
    this.experience = EXPERIENCE;
    this.technology = TECHNOLOGIES;
  }
}
