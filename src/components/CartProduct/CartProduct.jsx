import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { ButtonStyled } from "../UI/Button/ButtonStyled";
import { CartProductStyled } from "./CartProductStyled";
import { FcMoneyTransfer } from "react-icons/fc";
import "animate.css";
import { deleteProductAlert } from "../UI/Alerts/Alerts";
import { useNavigate } from "react-router-dom";

const CartProduct = ({ _id, quantity, thumbnail, title, price, token }) => {
  const navigate = useNavigate();

  return (
    <CartProductStyled>
      <img src={thumbnail} alt={title} />
      <p className="title">{title}</p>
      <div className="price-container">
        <FcMoneyTransfer />
        <p className="price">{price.toFixed(2)}</p>
      </div>
      <div className="action-section">
        <div className="quantity-section">
          <p className="quantity">Cant: {quantity}</p>
        </div>
        <ButtonStyled
          bg="var(--cancel)"
          bgh="var(--cancel-hover)"
          col="var(--text-white)"
          p="0.5rem"
          onClick={() => navigate(`/edit/${_id}`)}
        >
          <FaEdit />
        </ButtonStyled>
        <ButtonStyled
          bg="var(--cancel)"
          bgh="var(--cancel-hover)"
          col="var(--text-white)"
          p="0.5rem"
          onClick={() => {
            deleteProductAlert(
              "You are going to delete this product",
              "This product was deleted",
              "Yes, delete it",
              "Deleted",
              _id,
              token
            );
          }}
        >
          <FaTrashAlt />
        </ButtonStyled>
      </div>
    </CartProductStyled>
  );
};

export default CartProduct;
