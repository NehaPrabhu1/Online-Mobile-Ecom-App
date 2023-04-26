import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminVendorsComponent } from './components/admin/admin-vendors/admin-vendors.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AddressComponent } from './components/address/address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    AdminProductsComponent,
    AdminVendorsComponent,
    AboutusComponent,
    FooterComponent,
    NavigationAdminComponent,
    ContactUsComponent,
    ProductComponent,
    ProductDetailsComponent,
    AddressComponent,
    CheckoutComponent,
    OrdersComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    LogoutComponent,
    ForgetPasswordComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
