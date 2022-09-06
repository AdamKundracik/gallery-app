import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            // console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 403:     //forbidden
                console.error("Na toto nemáš práva!");
                break;
              case 500:     //server side error
                console.error("Vyskytol sa problém na servery!");
                break;
              case 404:     //not found
                console.error("Žiadaná služba sa nenašla!");
                break;
            }
          }
        } else {
          console.error("Vyskytla sa chyba");
        }
        return throwError(() => error);
      })
    );
  }
}
