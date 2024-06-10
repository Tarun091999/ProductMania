import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { AddProductTypesComponent } from './ProductTypes/add-product-types/add-product-types.component';
import { EditProductTypesComponent } from './ProductTypes/edit-product-types/edit-product-types.component';

const routes: Routes = [
{
path:"home" , component:HomeComponent 
},
{
path:"products", component:ProductsComponent
},
{
path:"suppliers" , component:SupplierComponent
},
{
path:"addProduct" , component:AddProductComponent
},
{
path:"editProduct/:id" , component:EditProductComponent
},
{
  path:"productType" , component:ProductTypeComponent
},
{
  path :"addProductType" , component:AddProductTypesComponent
},
{
path :"editProductType/:id" , component:EditProductTypesComponent
},
{
  path:"" , redirectTo:"home", pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
