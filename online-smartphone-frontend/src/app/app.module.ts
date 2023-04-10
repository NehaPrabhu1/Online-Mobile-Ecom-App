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
import { FormsModule } from '@angular/forms';
import { AdminVendorsComponent } from './components/admin/admin-vendors/admin-vendors.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    AdminProductsComponent,
    AdminVendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
