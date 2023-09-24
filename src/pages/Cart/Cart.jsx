import { CartStyled } from "./CartStyled";
import CartProduct from "../../components/CartProduct/CartProduct";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled";
import { areYouSureAlert } from "../../components/UI/Alerts/Alerts";
import { useState, useEffect, useCallback } from "react";
import { getMyProducts } from "../../axios/Products";
import { useSelector } from "react-redux";

const Cart = () => {
  const [myProducts, setMyProducts] = useState([]);

  const token = useSelector((state) => state.user.token);

  const fetchData = async () => {
    const prod = await getMyProducts(token);
    setMyProducts(prod);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <CartStyled>
      <h2>My Products</h2>
      {myProducts.length > 0 && (
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

      {myProducts.length > 0 &&
        myProducts.map((prod) => {
          return <CartProduct key={prod._id} token={token} {...prod} />;
        })}
      {!myProducts.length && (
        <>
          <h2>You don't have products yet 😥.</h2>
          <h2>
            If you want to add a new product:{" "}
            <Link to={"/"} className="go-back-link">
              Click here.
            </Link>
          </h2>
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
