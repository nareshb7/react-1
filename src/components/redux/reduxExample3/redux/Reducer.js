import { ADDPRODUCT, DELETEPRODUCT } from './ActionTypes';
const initialState = {
  products: [],
};
export const R3_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case DELETEPRODUCT: {
      let newObj = JSON.parse(JSON.stringify(state.products));
      let filtered = newObj.filter((item) => item.id != action.payload);
      return {
        ...state,
        products: filtered,
      };
    }
    default:
      return state;
  }
};
