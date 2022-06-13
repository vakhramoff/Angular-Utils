import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[debounceTime]',
  standalone: true,
})
export class DebounceTimeDirective implements OnChanges, OnDestroy {
  private timeoutId?: number;

  @Input()
  debounceTime = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('debounceTime' in changes) {
      this.clearTimer();
      this.createTimer(this.debounceTime);
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  private createTimer(ms: number) {
    this.timeoutId = setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, ms);
  }

  private clearTimer() {
    clearTimeout(this.timeoutId);
    this.viewContainerRef.clear();
  }
}
