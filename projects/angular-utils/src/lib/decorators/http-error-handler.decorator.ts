import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * TypeScript Decorator @HandleHttpErrors()
 * Must be applied to methods which return Observable
 * @param showAlert=true Show browser alert with error text
 * @description Allows to catch HTTP-request errors in Observables
 *              Shows error in console and in browser alerts
 */
export function HandleHttpErrors(showAlert: boolean = true): MethodDecorator {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value;

    descriptor.value = function decoratedFunction(): Observable<HttpResponse<any> | HttpErrorResponse> {
      const result = originalFunction.apply(this, arguments);

      if (result instanceof Observable) {
        return result.pipe(
          catchError((error: HttpErrorResponse) => {
            const errorTitle = error.status ?? 'HTTP Request Error';
            const errorText = error.message ?? 'unknown error';
            const errorMessage = `${errorTitle}: ${errorText}`;

            if (showAlert) {
              alert(errorMessage);
            }

            console.error('HTTP Error: ', error);

            throw error;
          }),
        );
      } else {
        throw new Error(`The @HandleHttpErrors() decorator must be applied only to methods which return Observable!`);
      }
    };
  };
}
