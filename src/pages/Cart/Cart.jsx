import { CartStyled } from "./CartStyled";
import CartProduct from "../../components/CartProduct/CartProduct";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMyProducts } from "../../axios/Products";
import { useSelector } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

const Cart = () => {
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const prod = await getMyProducts(token);
      setLoading(false);
      setMyProducts(prod);
    };
    fetchData();
  }, []);

  return (
    <CartStyled>
      <h2>My Products</h2>
      {loading ? (
        <Spinner />
      ) : !myProducts.length ? (
        <>
          <h2>You don't have any product yet 😥.</h2>
          <h2>
            If you want to add a new product:{" "}
            <Link to={"/add"} className="go-back-link">
              Click here.
            </Link>
          </h2>
        </>
      ) : (
        myProducts.map((prod) => {
          return <CartProduct key={prod._id} token={token} {...prod} />;
        })
      )}
    </CartStyled>
  );
};

export default Cart;
