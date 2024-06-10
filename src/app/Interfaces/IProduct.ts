import { ICategory } from "./ICategory";
import { ISubProducts } from "./ISubProducts";

export interface IProduct{
    id : number,
    name : string,
    type: ICategory[],
    supplierName : string,
    subProducts : ISubProducts[],
    
}