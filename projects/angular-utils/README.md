# Angular Utils

This library contains utils for Angular projects.

How to import it in your project:
```
import {
  EventBusService,
  HandleHttpErrors
} from '@vakhramoff/angular-utils';
```

## Event Bus (Service)

How to import:
```
import { EventBusService } from '@vakhramoff/angular-utils';
```

Import service in any component's constructor:
```
constructor(private eventBus: EventBusService) {}
```

### How to emit
Emit your message:
```
this.eventBus.emit({
  type: 'TEST_MESSAGE',
  payload: ['Test message payload']
});
```

### How to subscribe
Listen to a specific type of messages in other part of your Angular app:
```
this.eventBus.on('TEST_MESSAGE').subscribe((payload) => {
  // do what you want with a payload...
});
```


## HTTP Error Handler (Decorator)

Just decorate your methods which return Observables this way:
```
@HandleHttpErrors()
public getData(param: string): Observable<DataContract> {
  return this.http.get<DataContract>(`${environment.apiUrl}/data`);
}
```
The decorator takes one parameter (showAlert) whics is true by default,
so if you catch any error, it will show a browser alert.
In addition to that, this Decorator logs error into a console.
