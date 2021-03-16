# Angular Utils

This library contains utils for Angular projects.

How to import it in your project:
```typescript
import {
  EventBusService,
  HandleHttpErrors
} from '@vakhramoff/angular-utils';
```

## Event Bus (Service)

How to import:
```typescript
import { EventBusService } from '@vakhramoff/angular-utils';
```

Import service in any component's constructor:
```typescript
constructor(private eventBus: EventBusService) {}
```

### How to emit
Emit your message:
```typescript
this.eventBus.emit({
  type: 'TEST_MESSAGE',
  payload: ['Test message payload']
});
```

### How to subscribe
Listen to a specific type of messages in other part of your Angular app:
```typescript
this.eventBus.on('TEST_MESSAGE').subscribe((payload) => {
  // do what you want with a payload...
});
```


## HTTP Error Handler (Decorator)

Just decorate your methods which return Observables this way:
```typescript
class DataEndpointService {
  // ...
  @HandleHttpErrors()
  public getData(param: string): Observable<DataContract> {
    return this.http.get<DataContract>(`${environment.apiUrl}/data`);
  }
  // ...
}
```
The decorator takes one parameter (showAlert) whics is true by default,
so if you catch any error, it will show a browser alert.
In addition to that, this Decorator logs error into a console.


## Cursor (Directive)

How to import:
```typescript
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
```angular2html
<div [cursor]="'pointer'">
  <!-- ... -->
</div>
```

### Variable Binding
Or bind to some variable from the component:
  - example.component.ts:
  ```typescript
  public currentCursor: TCursorType = this.isEnabled ? 'pointer' : 'default';
  ```
  - example.component.html:
  ```angular2html
  <div [cursor]="currentCursor">
    <!-- ... -->
  </div>
  ```


## To Locale String (Pipe)

Transforms given value to string value in the current locale.

How to import:
```typescript
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
```angular2html
<span class="current-date">
  {{ today | toLocaleString }}
</span>
```

### Component Usage
Use in your component:
```typescript
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
