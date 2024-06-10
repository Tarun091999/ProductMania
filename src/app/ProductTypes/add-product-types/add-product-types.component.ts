import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFormType } from 'src/app/Interfaces/IFormType';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { AddSingleProductTypeFormComponent } from '../add-single-product-type-form/add-single-product-type-form.component';
import { Store } from '@ngrx/store';
import { RootReducerState, getSelectedProductTypeForm } from 'src/app/State/reducers/rootReducer';
import { UpdateProductTypeFormAction } from 'src/app/State/actions/productType-form';

@Component({
  selector: 'app-add-product-types',
  templateUrl: './add-product-types.component.html',
  styleUrls: ['./add-product-types.component.css']
})
export class AddProductTypesComponent {

  selectedValue=""
  formTypes : IFormType[]=[{
    value :"single", viewValue :"Single"
  },{
    value :"multiple", viewValue :"Multiple"
  }
]

constructor(private dialogModel : MatDialog , private store : Store<RootReducerState> ){}
productTypeForm= new FormGroup({
  productType: new FormControl("",[Validators.required , Validators.minLength(3) ])

})
get productTypeName ()
{
  return this.productTypeForm.controls.productType
}
openForm()
{
  this.store.dispatch(new UpdateProductTypeFormAction({data:this.selectedValue}))
  this.store.select(getSelectedProductTypeForm).subscribe(data=>
    console.log(data , "-->")
  )
// if(this.selectedValue==="single"){
// const dialogBox = this.dialogModel.open(AddSingleProductTypeFormComponent,{ width:'70vw' , height:"50vh"})
// dialogBox.afterClosed().subscribe(result=>{
//   console.log(result)
// })
// }
}


}
