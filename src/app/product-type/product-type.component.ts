import { ChangeDetectorRef, Component } from '@angular/core';
import { ICategory } from '../Interfaces/ICategory';
import { ProductTypeService } from '../service/product-type.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent {


  prouctTypes:ICategory[]= [];
  displayedColumns: string[] = ['id','ProductTypeName' , "delete" , "edit"];
  dataSource =this.prouctTypes;
  constructor(private _productTypesService : ProductTypeService ){}
  
  ngOnInit(){
    this.getProductTypes()
  }

  getProductTypes(){
    this.prouctTypes= this._productTypesService.getProductTypes()
  }


}
