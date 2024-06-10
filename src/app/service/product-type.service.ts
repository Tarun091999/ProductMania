import { Injectable } from '@angular/core';
import { ICategory } from '../Interfaces/ICategory';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  productsTypeList : ICategory[] =[]
  constructor() { }
  getProductTypes(){
    let productTypes = localStorage.getItem("ProductTypes");
    if( productTypes)
    {
        this.productsTypeList = JSON.parse(productTypes) as ICategory[]
    }
    return this.productsTypeList;
  }
  
  insertSingleProductType(productType: string)
  {
    let productTypes = this.getProductTypes();
    let newProductType :ICategory={
      id:nanoid(),
      name:productType,
      type:productType
    }
    productTypes.push(newProductType)
    localStorage.setItem("ProductTypes" , JSON.stringify(productTypes))
  }
   
}
