import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminVendorsComponent } from './components/admin/admin-vendors/admin-vendors.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { AddressComponent } from './components/address/address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'home', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/vendors', component: AdminVendorsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'address', component: AddressComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgotPassword', component: ForgetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
