import { useSelector } from "react-redux";
import {
  ProductListContainerStyled,
  ProductListStyled,
} from "./ProductListStyled";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../../axios/Products.js";
import { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prod = await getProducts(token);
      setLoading(false);
      setProducts(prod);
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductListContainerStyled>
        <ProductListStyled>
          {loading ? (
            <Spinner />
          ) : !products.length ? (
            <h1>Product list is empty.</h1>
          ) : (
            products.map((product) => {
              return <ProductCard key={product._id} {...product} />;
            })
          )}
        </ProductListStyled>
      </ProductListContainerStyled>
    </>
  );
};

export default ProductList;
