import { format } from "date-fns";
import { IProduct } from "../../../domain/product";
import { useAppDispatch } from "../../../redux/store";
import { addProductToCartAction } from "../../../redux/actions/product";

interface IProps {
  product: IProduct;
}

export const Product = ({ product }: IProps) => {
  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addProductToCartAction(product));
  };

  return (
    <div>
      <>
        <div className="relative mx-auto w-full max-w-sm pt-6">
          <div className="rounded-lg">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="">
              <div className="mt-4 grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    <h2
                      className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                      title="New York"
                    >
                      {product.name}
                    </h2>
                    <p
                      className="mt-2 line-clamp-1 text-sm text-gray-800"
                      title="New York, NY 10004, United States"
                    >
                      {format(new Date(product.createdAt), "dd MMMM yyyy")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase"> $ </span>
                    <span className="text-lg">{product.price}</span>
                  </p>
                </div>
              </div>
              <div className="mt-2 border-t border-gray-200 pt-3">
                {product.description}
              </div>
            </div>
            <button
              type="button"
              onClick={onAddToCart}
              className="inline-block mt-2 bg-blue-500 rounded bg-primary text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal "
            >
              Add to cart
            </button>
          </div>
        </div>
      </>
    </div>
  );
};
