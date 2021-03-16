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
})
export class DebounceTimeDirective implements OnChanges, OnDestroy {
  @Input() debounceTime = 0;

  private _timeoutId?: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if ('debounceTime' in changes) {
      this._clearTimer();
      this._createTimer(this.debounceTime);
    }
  }

  ngOnDestroy() {
    this._clearTimer();
  }

  private _createTimer(ms: number) {
    this._timeoutId = setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, ms);
  }

  private _clearTimer() {
    clearTimeout(this._timeoutId);
    this.viewContainerRef.clear();
  }
}
