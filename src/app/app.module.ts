import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationsComponent } from './navigations/navigations.component';
import { HomeComponent } from './home/home.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductsComponent } from './products/products.component';
import {MatButtonModule} from '@angular/material/button';
import { ProductService } from './service/product.service';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProductTypeComponent } from './product-type/product-type.component';
import { ProductTypeService } from './service/product-type.service';
import { SupplierService } from './service/supplier.service';
import { AddProductTypesComponent } from './ProductTypes/add-product-types/add-product-types.component';
import { EditProductTypesComponent } from './ProductTypes/edit-product-types/edit-product-types.component';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { AddSingleProductTypeFormComponent } from './ProductTypes/add-single-product-type-form/add-single-product-type-form.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './State/reducers/rootReducer';


@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    HomeComponent,
    SupplierComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ProductTypeComponent,
    AddProductTypesComponent,
    EditProductTypesComponent,
    AddSingleProductTypeFormComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [ProductService , ProductTypeService , SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
