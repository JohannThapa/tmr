import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output, DOCUMENT } from '@angular/core';
import { filter, fromEvent, Subscription } from 'rxjs';
// import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[tmr-click-outside]',
  standalone: true,
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();

  private documentClickSubscription: Subscription | undefined;

  constructor(
    private readonly element: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click')
      .pipe(
        filter((event): event is MouseEvent => {
          const target = event.target as HTMLElement | null;
          return !!target && !this.isInside(target);
        }),
      )
      .subscribe(() => {
        this.clickOutside.emit();
      });
  }

  ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck);
  }
}
