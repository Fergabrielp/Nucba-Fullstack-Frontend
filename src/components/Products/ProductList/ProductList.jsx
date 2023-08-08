import { useDispatch, useSelector } from "react-redux";
import {
  BtnMoreStyled,
  ProductListContainerStyled,
  ProductListStyled,
} from "./ProductListStyled";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";
import {
  increaseLimit,
  resetLimit,
} from "../../../redux/reducers/productsReducer/productsSlice";
import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetLimit());
  }, []);
  const { products, loading, error, limit } = useSelector(
    (state) => state.products
  );

  if (loading) return <Spinner />;
  if (error) return <h3 style={{ margin: "2rem" }}>{error}</h3>;

  return (
    <>
      <ProductListContainerStyled>
        <ProductListStyled>
          {products?.map((product, index) => {
            if (limit > index) {
              return <ProductCard key={product.id} {...product} />;
            }
            return null;
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
