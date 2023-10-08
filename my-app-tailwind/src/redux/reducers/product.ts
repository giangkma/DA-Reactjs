import { IProduct } from "../../domain/product";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
  SET_PRODUCT,
} from "../const/product";
import { RootState } from "../store";

// Reducer function
export interface IProductState {
  products: IProduct[];
  cart: IProduct[];
}

const initialState: IProductState = {
  products: [],
  cart: [],
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PRODUCT: {
      const newState = { ...state };
      newState.products = action.payload;
      return newState;
    }
    case ADD_PRODUCT_TO_CART: {
      const newState = { ...state };
      // check id and increase quantity

      newState.cart = newState.cart.concat(action.payload);
      return newState;
    }
    case REMOVE_PRODUCT_TO_CART: {
      const newState = { ...state };
      newState.cart = newState.cart.filter(
        (product) => product.id !== action.payload
      );
      return newState;
    }
    default:
      return state;
  }
};

export const getProducts = (state: RootState) => state.product.products;
export const getProductsFromCart = (state: RootState) => state.product.cart;
