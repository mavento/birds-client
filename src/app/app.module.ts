import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./_core/MaterialModule";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { CouponComponent } from './coupon/coupon.component';
import { CouponDialogComponent } from './coupon-dialog/coupon-dialog.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    CouponComponent,
    CouponDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  entryComponents:[CouponDialogComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
