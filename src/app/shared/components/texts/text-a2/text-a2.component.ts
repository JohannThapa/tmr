import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval, map, Subject, takeUntil } from 'rxjs';

type StackType = 'Frontend' | 'Backend';
const SKILL = [
  'Full-stack Developer',
  'Web Developer',
  'UI/UX Designer',
  'Desktop/Mobile Developer',
  'E2E/Unit Tester',
];
const STACKS = ['Angular', 'React', 'NextJs', 'Flutter', 'NodeJs', 'NestJs', 'ExpressJs', 'Asp.net'];
@Component({
  selector: '[text-a2]',
  standalone: true,
  imports: [CommonModule, NgClass, NgStyle],
  template: `
    <div id="container" class=" text-foreground  text-3xl font-bold text-center">
      Currently i am working as a
      <div id="flip" class="h-[50px] overflow-hidden">
        <div class="animate-show">
          <div *ngFor="let item of skills">
            <div
              [ngClass]="item === ('UI/UX Designer' || 'E2E/Unit Tester') ? 'bg-background text-primary' : 'bg-primary text-white'"
              class=" py-1 px-3 h-[45px] mb-[45px] inline-block">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
      Stacks: <span class="text-primary">{{ currentStack }} </span>
    </div>
  `,
})
export class TextA2Component implements OnInit {
  frontendSkills = ['Angular', 'React', 'NextJs'];
  @Input() skills: string[] = SKILL;
  @Input() stacks: string[] = STACKS;
  currentSkillIndex: number = 0;
  stackArray: string[] = [];
  currentStack: string = this.stacks[0];
  private destroy$ = new Subject<void>();

  constructor() {}
  ngOnInit() {
    interval(500)
      .pipe(
        map((i) => this.stacks[i % this.stacks.length]),
        takeUntil(this.destroy$),
      )
      .subscribe((skill) => {
        this.currentStack = skill;
      });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get _currentSkill(): string {
    return this.currentStack;
  }
  set _currentSkill(skill: string) {
    console.log('Skill has changed to:', skill);
    this._currentSkill = skill;
  }
}
