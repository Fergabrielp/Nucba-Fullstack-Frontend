import { FaCartPlus } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";

import { LinkButtonStyled } from "../../UI/LinkButton/LinkButtonStyled";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../redux/reducers/cartReducer/cartSlice";
import { CardStyled } from "../../Products/ProductCard/ProductCardStyled";
import { AddToCartAlert } from "../../UI/Alerts/Alerts";
import { useNavigate } from "react-router-dom";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";

const ProductCardSearch = ({
  title,
  short_description,
  thumbnail,
  platform,
  genre,
  id,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.user.isLogged);

  const price = (id / 10).toFixed(2);

  return (
    <CardStyled>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{short_description}</p>
      <div className="platform-genre-container">
        <h4>{platform}</h4>
        <h4>{genre}</h4>
      </div>
      <div className="price-cart-container">
        <div className="price">
          <FcMoneyTransfer />

          <p>{price}</p>
        </div>
        <ButtonStyled
          bg="var(--cancel)"
          col="var(--text-white)"
          bgh="var(--cancel-hover)"
          p="0.5rem 1.3rem"
          onClick={() => {
            {
              isLogged
                ? (AddToCartAlert(),
                  dispatch(addProductToCart({ title, thumbnail, id, price })))
                : navigate("/login");
            }
          }}
        >
          <FaCartPlus />
        </ButtonStyled>
      </div>
      <LinkButtonStyled
        bg="var(--accept)"
        col="var(--text-white)"
        bgh="var(--accept-hover)"
        w="100%"
        to={`${id}`}
      >
        Ver más
      </LinkButtonStyled>
    </CardStyled>
  );
};

export default ProductCardSearch;
