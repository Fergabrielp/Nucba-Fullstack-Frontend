import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ButtonStyled } from "../UI/Button/ButtonStyled";
import { CartProductStyled } from "./CartProductStyled";
import { useDispatch } from "react-redux";
import {
  addProductToCart,
  substractItem,
} from "../../redux/reducers/cartReducer/cartSlice";
import { FcMoneyTransfer } from "react-icons/fc";
import "animate.css";
import { deleteProductAlert } from "../UI/Alerts/Alerts";

const CartProduct = ({ id, quantity, thumbnail, title, price }) => {
  const dispatch = useDispatch();

  return (
    <CartProductStyled>
      <img src={thumbnail} alt={title} />
      <p className="title">{title}</p>
      <div className="price-container">
        <FcMoneyTransfer />
        <p className="price">{(price * quantity).toFixed(2)}</p>
      </div>
      <div className="action-section">
        <div className="quantity-section">
          <ButtonStyled
            col="var(--cancel)"
            p="0.3rem"
            onClick={() => dispatch(substractItem(id))}
          >
            <FaMinus />
          </ButtonStyled>
          <p className="quantity">{quantity}</p>
          <ButtonStyled
            col="var(--accept)"
            p="0.3rem"
            onClick={() => dispatch(addProductToCart({ id }))}
          >
            <FaPlus />
          </ButtonStyled>
        </div>
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
              dispatch,
              id
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
