import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subject, takeUntil } from 'rxjs';
import { TECH_SKILLS, TECH_STACKS } from 'src/app/core/constants/tech-stacks';
import { ButtonA1Component } from '../../animations/button-a1/button-a1.component';
import { BorderType } from 'src/app/core/types/border-type';

@Component({
  selector: '[tmr-text-a2]',
  standalone: true,
  imports: [CommonModule, NgClass, NgStyle, ButtonA1Component],
  template: `
    <div id="container" class="text-foreground text-2xl font-bold text-center">
      A full-stack developer crafting exceptional digital solutions from inception to deployment.
      <div class=" flex h-auto items-center justify-center">
        <p class="text-shadow-light">My expertise is in</p>
        <div id="flip" class="h-[45px] w-auto overflow-hidden">
          <div class="animate-show">
            <div *ngFor="let item of skills">
              <div
                [ngClass]="
                  item === ('UI/UX Designer' || 'E2E/Unit Tester')
                    ? 'bg-background text-primary'
                    : 'bg-primary text-white'
                "
                class="py-1 px-2 h-[45px] mb-[45px] inline-block">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <p class="text-shadow-light">&</p>
      </div>
      I leverage <span class="text-primary">[ {{ currentStack }} ]</span> to build exceptional digital products.
      <div
        tmr-button-a1
        [text]="btnText"
        [borderClass]="btnBorderClass"
        [hasAnimation]="btnAnimation"
        (buttonClick)="handleButtonClick()"></div>
    </div>
  `,
})
export class TextA2Component implements OnInit, OnDestroy {
  @Input() skills: string[] = TECH_SKILLS;
  @Input() btnText: string = 'Click';
  @Input() stacks: string[] = TECH_STACKS;
  @Input() btnAnimation: boolean = true;
  @Input() btnBorderClass: BorderType = 'primary';
  currentStack: string = this.stacks[0];
  private destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    interval(1300)
      .pipe(
        map((i) => this.stacks[i % this.stacks.length]),
        takeUntil(this.destroy$),
      )
      .subscribe((stack) => {
        this.currentStack = stack;
      });
  }
  handleButtonClick(): void {
    console.log('click');
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
