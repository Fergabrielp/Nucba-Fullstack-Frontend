import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetailStyled } from "./ProductDetailStyled";
import Spinner from "../../UI/Spinner/Spinner";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../../../redux/reducers/productsReducer/productDetailSlice";
import { OPTIONS, URL_GAME_DETAIL } from "../../../constants/Constants";
import { ButtonStyled } from "../../UI/Button/ButtonStyled";
import { addProductToCart } from "../../../redux/reducers/cartReducer/cartSlice";
import { AddToCartAlert } from "../../UI/Alerts/Alerts";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchinDetails = async () => {
      const { data } = await axios.get(
        URL_GAME_DETAIL + `${params.id}`,
        OPTIONS
      );
      dispatch(getProductDetail(data));
    };

    fetchinDetails();
  }, [params.id]);

  const detailProduct = useSelector(
    (state) => state.productDetail.detailProduct
  );

  const {
    id,
    description,
    developer,
    game_url,
    genre,
    minimum_system_requirements,
    platform,
    publisher,
    release_date,
    screenshots,
    thumbnail,
    title,
  } = detailProduct;

  const loading = useSelector((state) => state.productDetail.loadingDetail);
  const isLogged = useSelector((state) => state.user.isLogged);

  const price = (id / 10).toFixed(2);
  return (
    <ProductDetailStyled>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="title">
            <div></div>
            <h2>{title}</h2>
            <div className="title-btn">
              <ButtonStyled
                bg="var(--cancel)"
                bgh="var(--cancel-hover)"
                col="var(--text-white)"
                p="0.5rem 1.3rem"
                onClick={() => navigate("/")}
              >
                <FaArrowLeft />
              </ButtonStyled>

              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 1.3rem"
                onClick={() => {
                  {
                    isLogged
                      ? (AddToCartAlert(),
                        dispatch(
                          addProductToCart({ title, thumbnail, id, price })
                        ))
                      : navigate("/login");
                  }
                }}
              >
                Add to Cart
              </ButtonStyled>
            </div>
          </div>
          <div className="img-description-container">
            <img src={thumbnail} alt={title} />
            <p>{description}</p>
          </div>
          <div className="foot-data">
            <div>
              <p>
                <span>Developed by:</span> {developer}
              </p>
              <p>
                <span>Genre:</span> {genre}
              </p>
              <p>
                <span>Platform:</span> {platform}
              </p>
            </div>
            <div>
              <p>
                <span>Release date:</span> {release_date}
              </p>
              <p>
                <span>Publisher:</span> {publisher}
              </p>
            </div>
          </div>

          {screenshots ? (
            <div className="img-container">
              {screenshots.map((img) => (
                <img src={img.image} alt="Image" height={300} key={img.id} />
              ))}
            </div>
          ) : null}

          {minimum_system_requirements ? (
            <div className="requirements-container">
              <h3>Minimum system requirements</h3>
              <div>
                <p>
                  <span>Graphics:</span> {minimum_system_requirements?.graphics}
                </p>
                <p>
                  <span>Memory:</span> {minimum_system_requirements?.memory}
                </p>
                <p>
                  <span>Operation System:</span>{" "}
                  {minimum_system_requirements?.os}
                </p>
                <p>
                  <span>Processor:</span>{" "}
                  {minimum_system_requirements?.processor}
                </p>
                <p>
                  <span>Storage:</span> {minimum_system_requirements?.storage}
                </p>
              </div>
            </div>
          ) : null}
        </>
      )}
    </ProductDetailStyled>
  );
};

export default ProductDetail;
