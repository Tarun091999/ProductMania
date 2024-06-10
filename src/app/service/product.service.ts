import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { ICategory } from '../Interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : IProduct[]  =[]
  constructor() { }
  
  getProducts(){
    let productList = localStorage.getItem("Products");
    if( productList)
    {
        this.products = JSON.parse(productList) as IProduct[]
    }
    return this.products;
  }
  
}
