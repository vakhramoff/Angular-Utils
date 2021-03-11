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


## Cursor (Directive)

How to import:
```
import {
  DirectivesModule as AngularUtilsDirectivesModule
} from '@vakhramoff/angular-utils';

@NgModule({
  // ...
  imports: [
    // ...
    AngularUtilsDirectivesModule,
    // ^ add DirectivesModule to @NgModule.imports section
    // ...
  ],
  // ...
})
```

### Single-time Usage
Use in your template:
```
<div [cursor]="'pointer'">
  <!-- ... -->
</div>
```

### Variable Binding
Or bind to some variable from the component:
  - example.component.ts:
  ```
  public currentCursor: TCursorType = this.isEnabled ? 'pointer' : 'default';
  ```
  - example.component.html:
  ```
  <div [cursor]="currentCursor">
    <!-- ... -->
  </div>
  ```


## To Locale String (Pipe)

Transforms given value to string value in the current locale.

How to import:
```
import {
  PipesModule as AngularUtilsPipesModule
} from '@vakhramoff/angular-utils';

@NgModule({
  // ...
  imports: [
    // ...
    AngularUtilsPipesModule,
    // ^ add PipesModule to @NgModule.imports section
    // ...
  ],
  // ...
})
```

### Template Usage
Use in your template:
```
<span class="current-date">
  {{ today | toLocaleString }}
</span>
```

### Component Usage
Use in your component:
```
@Component({
  // ...
  providers: [ToLocaleStringPipe],
  // ^ add ToLocaleStringPipe to @Component.providers section
})

// Inject the Pipe
constructor(private toLocaleStringPipe: ToLocaleStringPipe) {}

// Use the pipe
this.toLocaleStringPipe.transform(this.myValue);
```
