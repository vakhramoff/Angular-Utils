import { inject, InjectionToken } from "@angular/core";
import { WINDOW } from "./window.injection-token";

export const SESSION_STORAGE = new InjectionToken<Storage>('Session Storage Object', {
  factory: () => inject(WINDOW).sessionStorage
});
