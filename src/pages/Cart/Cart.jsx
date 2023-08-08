import { CartStyled } from "./CartStyled";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled";
import { areYouSureAlert } from "../../components/UI/Alerts/Alerts";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const subTotal = cartProduct.reduce(
    (acc, prod) => prod.price * prod.quantity + acc,
    0
  );

  return (
    <CartStyled>
      <h2>My products Cart</h2>
      {cartProduct.length > 0 && (
        <ButtonStyled
          bg="var(--cancel)"
          bgh="var(--cancel-hover)"
          col="var(--text-white)"
          p="0.5rem 1.3rem"
          onClick={() => {
            areYouSureAlert(
              "You are going to delete all products",
              "Your cart is now empty",
              "Yes, delete all",
              "Deleted",
              dispatch
            );
          }}
        >
          Delete All
        </ButtonStyled>
      )}

      {cartProduct.map((prod) => {
        return <CartProduct key={prod.id} {...prod} />;
      })}
      {!cartProduct.length ? (
        <>
          <h2>Your cart is Empty 😥.</h2>
          <h2>
            If you want to buy a game:{" "}
            <Link to={"/"} className="go-back-link">
              Go back.
            </Link>
          </h2>
        </>
      ) : (
        <div className="total-section">
          <div className="total-section-items">
            <p>Subtotal:</p>
            <div className="total-subtotal">
              <FcMoneyTransfer />
              <p>{subTotal.toFixed(2)}</p>
            </div>
          </div>
          <div className="total-section-items">
            <p>Descuento:</p>
            <p>-25%</p>
          </div>
          <hr />
          <div className="total-section-items">
            <p>Total:</p>
            <div className="total-subtotal">
              <FcMoneyTransfer />
              <p>{(subTotal - subTotal * 0.25).toFixed(2)}</p>
            </div>
          </div>
          <ButtonStyled
            bg="var(--accept)"
            bgh="var(--accept-hover)"
            col="var(--text-white)"
            p="0.5rem 1.3rem"
            onClick={() => {
              areYouSureAlert(
                "You're going to buy the products",
                "¡Congratulations!",
                "Yes, buy now!",
                "Thank you for buying",
                dispatch
              );
            }}
          >
            Buy now!
          </ButtonStyled>
        </div>
      )}
    </CartStyled>
  );
};

export default Cart;
