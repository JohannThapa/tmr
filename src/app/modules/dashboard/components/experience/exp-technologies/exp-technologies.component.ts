import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ITechnology } from 'src/app/core/models/project.model';
import { TECHNOLOGIES } from '../../../pages/experience/data/technologies';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'tmr-exp-technologies',
    imports: [AngularSvgIconModule, NgFor, NgClass],
    templateUrl: './exp-technologies.component.html',
    styleUrl: './exp-technologies.component.scss'
})
export class ExpTechnologiesComponent {
  @Input() tech: ITechnology[] = TECHNOLOGIES;
}
