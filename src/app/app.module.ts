import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./_core/MaterialModule";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
import {CheckoutComponent} from './checkout/checkout.component';
import { CouponComponent } from './coupon/coupon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
