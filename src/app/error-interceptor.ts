import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { catchError, throwError } from "rxjs";
import { ErrorComponent } from "./error/error.component";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private dialog: MatDialog){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse) => {
        let errorMessage = 'An error occured!'
        if (error.error.message){
          errorMessage = error.error.message;
        }
        if (error.error){
          errorMessage = error.error;
        }
        this.dialog.open(ErrorComponent, {
          data: { message: errorMessage}
        });
        return throwError(() => {
          const error = new Error('Error intercepted');
          return error;
        });
      }));
  }
}
