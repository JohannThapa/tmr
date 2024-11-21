/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgFor, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonA2Component } from '../../animations/button-a2/button-a2.component';

@Component({
  selector: 'tmr-slider-a1',
  standalone: true,
  imports: [NgFor, NgStyle, AngularSvgIconModule, ButtonA2Component],
  templateUrl: './slider-a1.component.html',
  styleUrl: './slider-a1.component.scss',
})
export class SliderA1Component implements AfterViewInit {
  @ViewChild('slider', { static: true }) slider!: ElementRef;

  slides = [
    {
      image: '/assets/images/projects/project-1.jpg',
      title: '"Front-end development"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
    {
      image: '/assets/images/projects/project-3.jpg',
      title: '"Website design"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
    {
      image: '/assets/images/projects/project-2.jpg',
      title: '"Full stack"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
    {
      image: '/assets/images/projects/project-4.jpg',
      title: '"App development"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
    {
      image: '/assets/images/projects/project-5.jpg',
      title: '"Graphic design"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
    {
      image: '/assets/images/projects/project-6.jpg',
      title: '"Backend development"',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.',
      buttonText: 'Visit site',
    },
  ];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.addSliderClickEvent();
  }

  addSliderClickEvent() {
    const sliderElement = this.slider.nativeElement;
    this.renderer.listen(sliderElement, 'click', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches('.next')) {
        this.nextSlide();
      }
      if (target.matches('.prev')) {
        this.previousSlide();
      }
    });
  }

  nextSlide() {
    const sliderElement = this.slider.nativeElement;
    const firstSlide = sliderElement.querySelector('.item');
    if (firstSlide) {
      this.renderer.setStyle(firstSlide, 'transition', 'transform 0.75s ease-in-out');
      this.renderer.setStyle(firstSlide, 'transform', 'translateX(-100%)');

      setTimeout(() => {
        this.renderer.removeStyle(firstSlide, 'transform');
        this.renderer.appendChild(sliderElement, firstSlide);
      }, 250);
    }
  }

  previousSlide() {
    const sliderElement = this.slider.nativeElement;
    const slides = sliderElement.querySelectorAll('.item');
    const lastSlide = slides[slides.length - 1];
    if (lastSlide) {
      this.renderer.setStyle(lastSlide, 'transition', 'transform 0.75s ease-in-out');
      this.renderer.setStyle(lastSlide, 'transform', 'translateX(100%)');
      setTimeout(() => {
        this.renderer.removeStyle(lastSlide, 'transform');
        this.renderer.insertBefore(sliderElement, lastSlide, slides[0]);
      }, 250);
    }
  }
  handleButtonClick(): void {
    console.log('click');
  }
}
