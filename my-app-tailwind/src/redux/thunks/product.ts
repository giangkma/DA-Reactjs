import { IProduct } from "../../domain/product";
import { instance } from "../../libs/axios";
import { setProductsAction } from "../actions/product";
import { AppDispatch } from "../store";

export const getProductsThunk = () => {
  return async (dispatch: AppDispatch) => {
    const res: IProduct[] = await instance.get("/product");
    dispatch(setProductsAction(res));
  };
};
