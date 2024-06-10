import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IProduct } from '../Interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : IProduct[]=[]
  constructor ( private productService : ProductService , private router : Router){}
  ngOnInit(){
   this.products = this.productService.getProducts();
  }

 
}
