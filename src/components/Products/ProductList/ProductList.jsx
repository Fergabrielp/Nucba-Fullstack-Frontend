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
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      const prod = await getProducts(token);
      setProducts(prod);
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductListContainerStyled>
        <ProductListStyled>
          {!products.length ? (
            <Spinner />
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
