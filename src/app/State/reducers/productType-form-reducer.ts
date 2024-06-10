

import { Action } from "../actions"
import { Update_Product_Type_Form } from "../actions/productType-form"
export interface productTypeFormState{
    selectedFormType : string
}

const initialState : productTypeFormState={
selectedFormType:""
}

export function productTypeFormReducer(state = initialState ,action:Action):productTypeFormState{
    debugger;
      switch (action.type) {
        case Update_Product_Type_Form: {
          return (state.selectedFormType = action.payload.data);
        }
        default: {
          return state;
        }
      }
}

//selectors 

export const getProductTypeSelectedForm=( state : productTypeFormState)=>state.selectedFormType