import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { AuthInterceptor } from './core/_helpers/auth.interceptor';
import { AuthService } from './core/_services/auth.service';
import { HttpUtilService } from './util/service/http-util.service';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from './shared/components/spinner-component/spinner-component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccessDeniedInterceptor } from './core/_helpers/auth.access_denied.interceptor';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        SharedModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        SpinnerComponent
        ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AccessDeniedInterceptor, multi: true},
        AuthService,
        HttpUtilService,
        MessageService,
    ],
    bootstrap: [AppComponent],

})
export class AppModule {}
