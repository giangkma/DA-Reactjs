import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getProductsThunk } from "../../redux/thunks/product";
import { Loading } from "../../components/Loading";
import { getProducts, getProductsFromCart } from "../../redux/reducers/product";
import { Product } from "./components/Product";
import { useNavigate } from "react-router-dom";

// React.memo
export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const productsFromCart = useAppSelector(getProductsFromCart);
  const navigate = useNavigate();

  const getProductsData = async () => {
    try {
      setLoading(true);
      await dispatch(getProductsThunk());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="p-5">
      {loading && <Loading />}
      <div className="flex items-center justify-between">
        <h1>Home</h1>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ({productsFromCart?.length})
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
