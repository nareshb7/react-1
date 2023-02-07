import { ADDPRODUCT, DELETEPRODUCT } from './ActionTypes';

export const AddProduct = (data) => {
  return {
    type: ADDPRODUCT,
    payload: data,
  };
};
export const DeleteProduct = (data) => {
  return {
    type: DELETEPRODUCT,
    payload: data,
  };
};
