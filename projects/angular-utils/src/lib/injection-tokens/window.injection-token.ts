import { InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window>('GLOBAL WINDOW TOKEN', {
  factory: () => window
});
