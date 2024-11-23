import { Component } from '@angular/core';
import { ExpHeaderComponent } from '../../components/experience/exp-header/exp-header.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExpHeaderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
