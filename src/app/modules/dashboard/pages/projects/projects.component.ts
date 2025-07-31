import { Component } from '@angular/core';
import { PrjHeaderComponent } from '../../components/projects/prj-header/prj-header.component';
import { SliderA1Component } from 'src/app/shared/components/carousels/slider-a1/slider-a1.component';

@Component({
    selector: 'app-projects',
    imports: [PrjHeaderComponent, SliderA1Component],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {}
