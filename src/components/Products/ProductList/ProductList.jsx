import { useDispatch, useSelector } from "react-redux";
import {
  BtnMoreStyled,
  ProductListContainerStyled,
  ProductListStyled,
} from "./ProductListStyled";
// import Spinner from "../../../components/UI/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";
import {
  increaseLimit,
  resetLimit,
} from "../../../redux/reducers/productsReducer/productsSlice";
import { getProducts } from "../../../axios/Products.js";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(resetLimit());
    const fetchData = async () => {
      const prod = await getProducts(token);
      setProducts(prod);
    };
    fetchData();
  }, []);

  // if (loading) return <Spinner />;
  // if (error) return <h3 style={{ margin: "2rem" }}>{error}</h3>;

  return (
    <>
      <ProductListContainerStyled>
        <ProductListStyled>
          {products?.map((product) => {
            return <ProductCard key={product._id} {...product} />;
          })}
        </ProductListStyled>
        <BtnMoreStyled>
          <ButtonStyled
            bg="var(--accept)"
            bgh="var(--accept-hover)"
            col="var(--text-white)"
            w="10rem"
            p="0.5rem"
            onClick={() => dispatch(increaseLimit())}
          >
            More
          </ButtonStyled>
        </BtnMoreStyled>
      </ProductListContainerStyled>
    </>
  );
};

export default ProductList;
