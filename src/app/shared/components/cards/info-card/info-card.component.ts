import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tmr-info-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  @Input() projectTitle: string = 'THE';
  @Input() projectSubtitle: string = 'HEALTH';
  @Input() projectCategory: string = 'Heart Health';
  @Input() articleCount: number = 78;

  @Input() featuredArticle = {
    heading: 'Article of the day',
    title: 'How Sugar Really Affects Your Cholesterol',
    description:
      "If you're like most people, you probably think it's high-cholesterol foods like eggs or shrimp that are the worst for your cholesterol levels. But that's not really the case.",
    author: 'Delia Freeman',
    date: '21 Feb 2019',
  };

  @Input() secondaryArticle = {
    title: 'Should You Be Taking Fish Oil? What a Cardiologist Tells His Patients',
    description: 'The story of fish oil and heart health started with the observation that several populations ...',
    author: 'Delia Freeman',
    date: '21 Feb 2019',
  };

  @Input() topics: string[] = ['Nutrition & healthy food', 'Mind and mood', 'Fitness and sport', 'Beauty and skincare'];

  @Input() bottomLinks = [
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
  ];

  @Input() popularLinks = [
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
    {
      title: 'These are the best health books that came out in 2018',
      author: 'Sam Knight',
      date: '28.12.2018',
      url: '#',
    },
  ];

  @Input() socialLinks = [
    { iconClass: 'fab fa-facebook' },
    { iconClass: 'fab fa-twitter' },
    { iconClass: 'fab fa-instagram' },
  ];
}
