import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BusEvent } from './bus-event.type';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private eventBus$ = new Subject<BusEvent>();

  /**
   * Subscribe for event
   * @param type (EventType) Тип события
   */
  public on<P = any>(type: string): Observable<P> {
    return this.eventBus$.pipe(
      filter((event) => event.type === type),
      map((event) => event.payload)
    );
  }

  /**
   * Emit new event
   * @param event (BusEvent) Событие
   */
  public emit<P = any>(event: BusEvent<P>): void {
    this.eventBus$.next(event);
  }
}
