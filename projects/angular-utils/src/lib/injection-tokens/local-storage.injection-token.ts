import { inject, InjectionToken } from "@angular/core";
import { WINDOW } from "./window.injection-token";

export const LOCAL_STORAGE = new InjectionToken<Storage>('Local Storage Object', {
  factory: () => inject(WINDOW).localStorage
});
