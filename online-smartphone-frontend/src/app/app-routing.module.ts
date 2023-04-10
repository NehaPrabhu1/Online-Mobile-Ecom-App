import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminVendorsComponent } from './components/admin/admin-vendors/admin-vendors.component';

const routes: Routes = [
  {path:'admin',component:AdminDashboardComponent},
  {path:'admin/products',component:AdminProductsComponent},
  {path:'admin/vendors',component:AdminVendorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
