import { inject, InjectionToken } from "@angular/core";
import { WINDOW } from "./window.injection-token";

export const LOCAL_STORAGE = new InjectionToken<Storage>('WINDOW.LOCAL_STORAGE TOKEN', {
  factory: () => inject(WINDOW).localStorage
});
