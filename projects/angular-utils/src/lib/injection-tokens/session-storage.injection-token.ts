import { inject, InjectionToken } from "@angular/core";
import { WINDOW } from "./window.injection-token";

export const SESSION_STORAGE = new InjectionToken<Storage>('WINDOW.SESSION_STORAGE TOKEN', {
  factory: () => inject(WINDOW).sessionStorage
});
