import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InfoCardComponent } from 'src/app/shared/components/cards/info-card/info-card.component';

@Component({
    selector: 'app-prj-modal',
    imports: [InfoCardComponent, NgIf],
    templateUrl: './prj-modal.component.html',
    styleUrl: './prj-modal.component.scss'
})
export class PrjModalComponent {
  @Input() isVisible: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() projectDetail: any | undefined;
  @Output() closeModalEvent = new EventEmitter<void>();
  featured = {
    heading: 'Featured Article',
    title: 'Best UI/UX Practices',
    description: 'Learn how to design exceptional web applications...',
    author: 'John Doe',
    date: '24 Nov 2024',
  };

  secondary = {
    title: 'Introduction to Angular 18',
    description: 'Discover the latest features in Angular 18...',
    author: 'Jane Smith',
    date: '23 Nov 2024',
  };

  bottomArticles = [
    { title: 'Improving Web Performance', author: 'Anna', date: '01 Jan 2024', url: '#' },
    { title: 'Responsive Design', author: 'Chris', date: '15 Mar 2024', url: '#' },
  ];

  popularArticles = [{ title: 'Top 10 Frameworks', author: 'Sam', date: '10 Oct 2024', url: '#' }];

  socialIcons = [{ iconClass: 'fab fa-github' }, { iconClass: 'fab fa-linkedin' }];

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
  }
}
