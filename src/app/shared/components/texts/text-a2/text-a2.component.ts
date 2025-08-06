import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Subject, takeUntil } from 'rxjs';
import { TECH_SKILLS, TECH_STACKS } from 'src/app/core/constants/tech-stacks';
import { BorderType } from 'src/app/core/types/border-type';
import { IStack } from 'src/app/core/models/tech-stacks.model';
import { ButtonA2Component } from '../../animations/button-a2/button-a2.component';

@Component({
  selector: '[tmr-text-a2]',
  imports: [CommonModule, NgClass, ButtonA2Component],
  template: `
    <div id="container" class="text-center text-2xl font-bold text-foreground">
      <div class=" flex h-auto items-center justify-center">
        <p class="text-shadow-light">A</p>
        <div id="flip" class="h-[45px] w-auto overflow-hidden">
          <div class="animate-show">
            <div *ngFor="let item of skills">
              <div
                [ngClass]="item === 'Full-stack Developer' ? 'bg-background text-primary' : 'bg-primary text-white'"
                class="mb-[45px] inline-block h-[45px] px-2 py-1">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
        <p class="text-shadow-light">crafting exceptional</p>
      </div>
      exceptional digital solutions from inception to deployment.
      <!-- I leverage <span class="text-primary">[ {{ currentStack }} ]</span> to build exceptional digital products. -->
      <section class="h-[100px]"></section>
      <div
        tmr-button-a2
        [text]="btnText"
        [bgClass]="btnBorderClass"
        [hasAnimation]="btnAnimation"
        routerLink="/skills"
        (buttonClick)="handleButtonClick()"></div>
    </div>
  `,
})
export class TextA2Component implements OnInit, OnDestroy {
  @Input() skills: string[] = TECH_SKILLS;
  @Input() btnText: string = 'Button';
  @Input() stacks: IStack[] = TECH_STACKS;
  @Input() btnAnimation: boolean = true;
  @Input() btnBorderClass: BorderType = 'primary';
  currentStack: string = this.stacks[0].name;
  private destroy$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {
    interval(1300)
      .pipe(
        map((i: number) => this.stacks[i % this.stacks.length]),
        takeUntil(this.destroy$),
      )
      .subscribe((stack: IStack) => {
        this.currentStack = stack.name;
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
