import { ResponseModel } from './responseModel';
import { Product } from 'src/app/models/product';

export interface ProductResponseModel extends ResponseModel {
  data: Product[];
}
