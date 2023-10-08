import { IProduct } from "../../domain/product";
import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
  SET_PRODUCT,
} from "../const/product";

export const setProductsAction = (products: IProduct[]) => {
  return { type: SET_PRODUCT, payload: products };
};

export const addProductToCartAction = (product: IProduct) => {
  return { type: ADD_PRODUCT_TO_CART, payload: product };
};

export const removeProductFromCartAction = (id: string) => {
  return { type: REMOVE_PRODUCT_TO_CART, payload: id };
};
