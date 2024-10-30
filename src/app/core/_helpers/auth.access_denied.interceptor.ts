import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class AccessDeniedInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.error && error.error.message === "Access is denied") {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Access Denied',
                        detail: 'You do not have permission to access this resource.',
                        life: 5000
                    });
                }
                return throwError(() => error);
            })
        );
    }
}
