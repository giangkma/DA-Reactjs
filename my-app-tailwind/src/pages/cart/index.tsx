import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProductsFromCart } from "../../redux/reducers/product";
import { removeProductFromCartAction } from "../../redux/actions/product";

export const CartPage = () => {
  const productsFromCart = useAppSelector(getProductsFromCart);
  const dispatch = useAppDispatch();

  const remoteProductFromCart = (id: string) => {
    dispatch(removeProductFromCartAction(id));
  };

  return (
    <div className="p-5">
      <h1 className="mb-10 border-b pb-4 text-2xl">
        Cart ({productsFromCart?.length})
      </h1>
      <div className="flex flex-col gap-4">
        {productsFromCart?.map((product) => {
          return (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-16 h-16" src={product.image} alt="" />
                <div>
                  <p>{product.name}</p>
                  <p className="text-sm">Price: {product.price}</p>
                  <p className="text-sm">Quantity: 1</p>
                </div>
              </div>
              <button
                onClick={() => {
                  remoteProductFromCart(product.id);
                }}
                className="bg-red-600 text-white rounded-sm w-8 h-8"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
