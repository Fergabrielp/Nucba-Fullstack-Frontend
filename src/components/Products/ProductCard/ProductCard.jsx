import { CardStyled } from "./ProductCardStyled";
import { FcMoneyTransfer } from "react-icons/fc";
import "animate.css";

const ProductCard = ({
  title,
  shortDescription,
  thumbnail,
  platform,
  genre,
  price,
  quantity,
}) => {
  return (
    <CardStyled className="animate__animated animate__bounceIn animate__fast">
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>{shortDescription}</p>
      <div className="platform-genre-container">
        <h4>{platform}</h4>
        <h4>{genre}</h4>
      </div>
      <div className="price-cart-container">
        <div className="price">
          <FcMoneyTransfer />
          <p>{price}</p>
        </div>
        <div>{quantity} Units</div>
      </div>
    </CardStyled>
  );
};

export default ProductCard;
