import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CarsService } from './cars/cars.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { NavigationService } from './navigation.service';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './user/users.module';
import { PageModule } from './page/page.module';
import { PageHeaderComponent } from './page/page-header/page-header.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { TitleGuard } from './title.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent,
    PageHeaderComponent,
    NavBarComponent,
    FooterComponent,
    PageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    CarsModule,
    UsersModule,
    PageModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CarsService,
    AuthService,
    NavigationService,
    TitleGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
