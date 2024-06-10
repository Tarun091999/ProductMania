import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductTypeService } from 'src/app/service/product-type.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICategory } from 'src/app/Interfaces/ICategory';
@Component({
  selector: 'app-add-single-product-type-form',
  templateUrl: './add-single-product-type-form.component.html',
  styleUrls: ['./add-single-product-type-form.component.css'],
})
export class AddSingleProductTypeFormComponent {
  selectedValue = '';
  constructor(private _productTypeService: ProductTypeService , public dialogRef : MatDialogRef<AddSingleProductTypeFormComponent>,
    @Inject(MAT_DIALOG_DATA)public data : ICategory
  ) {}
  productTypeForm = new FormGroup({
    productType: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  get productTypeName() {
    return this.productTypeForm.controls.productType;
  }
  onSubmit() {
    if (this.productTypeForm.valid) {
      this._productTypeService.insertSingleProductType(
        this.productTypeName.value!
      );
      this.productTypeForm.clearValidators();
    } else {
      this.productTypeName.markAllAsTouched();
    }
  }
  closeDialogue(){
    this.selectedValue=""
    this.dialogRef.close();
  }
}
