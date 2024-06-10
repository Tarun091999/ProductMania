import { ActionReducerMap, createSelector } from "@ngrx/store";
import { productTypeFormReducer, productTypeFormState, } from "./productType-form-reducer";
import * as  ProductTypeFormSelection from './productType-form-reducer'


export interface RootReducerState {
    productTypeForm: productTypeFormState;
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    productTypeForm: productTypeFormReducer
};

export const getSelectedProductTypeFormState= (state: RootReducerState)=>state.productTypeForm
export const getSelectedProductTypeForm = createSelector(getSelectedProductTypeFormState , ProductTypeFormSelection.getProductTypeSelectedForm)