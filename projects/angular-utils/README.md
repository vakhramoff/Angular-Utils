# Angular Utils

This library contains utils for Angular projects.

Type in a console to install:
  - via npm
    ```
    npm i @vakhramoff/angular-utils
    ```
  - via yarn
    ```
    yarn add @vakhramoff/angular-utils
    ```

## Services

### Event Bus

How to import:
```typescript
import { EventBusService } from '@vakhramoff/angular-utils';
```

Import service in any component's constructor:
```typescript
constructor(private eventBus: EventBusService) {}
```

#### How to emit
Emit your message:
```typescript
this.eventBus.emit({
  type: 'TEST_MESSAGE',
  payload: ['Test message payload']
});
```

#### How to subscribe
Listen to a specific type of messages in other part of your Angular app:
```typescript
this.eventBus.on('TEST_MESSAGE').subscribe((payload) => {
  // do what you want with a payload...
});
```

## Decorators

### HTTP Error Handler

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

## Directives

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

### Cursor
Changes the cursor style on the element.

#### Single-time Usage
Use in your template:
```angular2html
<div [cursor]="'pointer'">
  <!-- ... -->
</div>
```

#### Variable Binding
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

### Debounce Time
Shows the element after the given amount of milliseconds.

*NOTE: Timer restarts on a variable change.*

#### Single-time Usage
Use in your template:
```angular2html
<div *debounceTime="1000">
  <!-- ... -->
</div>
```

#### Variable Binding
Or bind to some variable from the component:
- example.component.ts:
  ```typescript
  public showAfterMilliseconds: number = 5000;
  ```
- example.component.html:
  ```angular2html
  <div *debounceTime="showAfterMilliseconds">
    <!-- ... -->
  </div>
  ```

## Pipes

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

### To Locale String
Transforms given value to a string value in the current locale.

#### Template Usage
Use in your template:
```angular2html
<span class="current-date">
  {{ today | toLocaleString }}
</span>
```

#### Component Usage
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
