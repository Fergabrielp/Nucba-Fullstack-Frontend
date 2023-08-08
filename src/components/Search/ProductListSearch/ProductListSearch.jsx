import { useDispatch, useSelector } from "react-redux";

import Spinner from "../../UI/Spinner/Spinner";
import {
  BtnMoreStyled,
  ProductListContainerStyled,
  ProductListStyled,
} from "../../Products/ProductList/ProductListStyled";
import ProductCardSearch from "../ProductCardSearch/ProductCardSearch";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";
import {
  increaseLimit,
  resetLimit,
} from "../../../redux/reducers/productsReducer/productsSlice";
import { useEffect } from "react";

const ProductListSearch = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetLimit());
  }, []);

  const { productsFound, loading, error, limit } = useSelector(
    (state) => state.products
  );

  if (loading) return <Spinner />;
  if (error) return <h3 style={{ margin: "2rem" }}>{error}</h3>;

  return (
    <>
      <ProductListContainerStyled>
        <ProductListStyled>
          {productsFound?.map((product, index) => {
            if (limit > index) {
              return <ProductCardSearch key={product.id} {...product} />;
            }
            return null;
          })}
        </ProductListStyled>
        {productsFound.length >= 20 ? (
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
        ) : null}
      </ProductListContainerStyled>
    </>
  );
};

export default ProductListSearch;
