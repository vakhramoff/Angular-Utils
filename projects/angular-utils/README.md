# Angular Utils

---

**This version of the library is developed using Angular 14. Consider using 0.4.0 for older versions of Angular!**

This library contains utils for Angular projects.

Type in a console to install:

```
npm i @vakhramoff/angular-utils
// in case of yarn
yarn add @vakhramoff/angular-utils
```

---

## Services

### Event Bus

How to import:

```typescript
import { EventBusService } from "@vakhramoff/angular-utils";
```

Import service in any component's constructor:

```typescript
constructor(private eventBus: EventBusService) {}
```

#### How to emit

Emit your message:

```typescript
this.eventBus.emit({
  type: "TEST_MESSAGE",
  payload: ["Test message payload"],
});
```

#### How to subscribe

Listen to a specific type of messages in other part of your Angular app:

```typescript
this.eventBus.on("TEST_MESSAGE").subscribe((payload) => {
  // do what you want with a payload...
});
```

---

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

---

## Directives

Directives are standalone.

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

#### Single-time Usage

Use in your template:

```angular2html
<div *debounceTime="1000">
  <!-- ... -->
</div>
```

#### Variable Binding

You can bind to some variable from the component.

_NOTE: Timer restarts on a variable change!_

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

---

## Pipes

Pipes are standalone.

### To Locale String

Transforms given value to a string value in the current locale.
If transformation couldn't be made, the given value is returned.

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

---

## Injection Tokens

Tokens that can be used in a DI Provider.

> For detailed explanation see the official documentation about an [InjectionToken](https://angular.io/api/core/InjectionToken).
>
> It's also useful to read about [Dependency Injection](https://angular.io/guide/dependency-injection) and [Dependency Providers](https://angular.io/guide/dependency-injection-providers).

### Window

Provides access to global `window` object.

#### How to use

Use in your component:

```typescript
import { WINDOW } from '@vakhramoff/angular-utils';

// Inject it in a component's constructor
constructor(@Inject(WINDOW) private readonly window: Window) {
  // And use :)
}
```

### Local Storage

Provides access to `window.localStorage` object.

#### How to use

Use in your component:

```typescript
import { LOCAL_STORAGE } from '@vakhramoff/angular-utils';

// Inject it in a component's constructor
constructor(@Inject(LOCAL_STORAGE) private readonly localStorage: Storage) {
  // And use :)
}
```

### Session Storage

Provides access to `window.sessionStorage` object.

#### How to use

Use in your component:

```typescript
import { SESSION_STORAGE } from '@vakhramoff/angular-utils';

// Inject it in a component's constructor
constructor(@Inject(SESSION_STORAGE) private readonly sessionStorage: Storage) {
  // And use :)
}
```
