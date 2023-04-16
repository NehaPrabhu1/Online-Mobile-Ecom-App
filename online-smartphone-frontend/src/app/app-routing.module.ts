import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminVendorsComponent } from './components/admin/admin-vendors/admin-vendors.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path: 'home' , component: ProductComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'contact-us' , component: ContactUsComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'admin/products',component:AdminProductsComponent},
  {path:'admin/vendors',component:AdminVendorsComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
