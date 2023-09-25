import { useNavigate, useParams } from "react-router-dom";
import { AddProductStyled } from "../../AddProduct/AddProductStyled";
import { ButtonStyled } from "../../UI/Button/ButtonStyled.js";
import { useFormik } from "formik";
import { editMyProduct, getOneProduct } from "../../../axios/Products.js";
import { useSelector } from "react-redux";
import { productSchema } from "../../../formik/validationSchema.js";
import { LoginRegisterAlert } from "../../UI/Alerts/Alerts.js";
import Spinner from "../../UI/Spinner/Spinner.jsx";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchData = async () => {
      const prod = await getOneProduct(token, id);
      setproduct(prod[0]);
    };
    fetchData();
  }, [id]);

  const productValues = {
    title: "",
    thumbnail: "",
    shortDescription: "",
    description: "",
    platform: "",
    genre: "",
    price: "",
    quantity: "",
  };

  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    setValues,
  } = useFormik({
    initialValues: productValues,

    validationSchema: productSchema,

    onSubmit: async (formData, { resetForm }) => {
      try {
        await editMyProduct(token, id, formData);
        LoginRegisterAlert("success", `Product successfully edited`);
        navigate("/cart");
      } catch (error) {
        LoginRegisterAlert("fail", `We've had a problem editting product`);
        resetForm();
      }
    },
  });

  useEffect(() => {
    // Establecer los valores del formulario una vez que los datos del producto estén disponibles
    setValues({
      title: product.title || "",
      thumbnail: product.thumbnail || "",
      shortDescription: product.shortDescription || "",
      description: product.description || "",
      platform: product.platform || "",
      genre: product.genre || "",
      price: product.price || "",
      quantity: product.quantity || "",
    });
  }, [product, setValues]);

  return (
    <>
      {product.length < 1 ? (
        <Spinner />
      ) : (
        <AddProductStyled>
          <h2>Edit Product</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Tomb Raider"
                  onChange={handleChange}
                  value={values.title}
                  onBlur={handleBlur}
                  className={errors.title && touched.title ? "input-error" : ""}
                />
              </div>
              {errors.title && touched.title && (
                <small className="error-msg">{errors.title}</small>
              )}
            </div>
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="thumbnail">Image</label>
                <input
                  name="thumbnail"
                  type="text"
                  placeholder="https://awesome-image.jpg"
                  onChange={handleChange}
                  value={values.thumbnail}
                  onBlur={handleBlur}
                  className={
                    errors.thumbnail && touched.thumbnail ? "input-error" : ""
                  }
                />
              </div>
              {errors.thumbnail && touched.thumbnail && (
                <small className="error-msg">{errors.thumbnail}</small>
              )}
            </div>
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="shortDescription">Short Description</label>
                <input
                  name="shortDescription"
                  type="text"
                  placeholder="Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor"
                  onChange={handleChange}
                  value={values.shortDescription}
                  onBlur={handleBlur}
                  className={
                    errors.shortDescription && touched.shortDescription
                      ? "input-error"
                      : ""
                  }
                />
              </div>
              {errors.shortDescription && touched.shortDescription && (
                <small className="error-msg">{errors.shortDescription}</small>
              )}
            </div>

            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor. Armed only with raw instincts and the ability to push beyond the limits of human endurance, Lara must fight to unravel the dark history of a forgotten island to escape its relentless hold."
                  onChange={handleChange}
                  value={values.description}
                  onBlur={handleBlur}
                  className={
                    errors.description && touched.description
                      ? "input-error"
                      : ""
                  }
                />
              </div>
              {errors.description && touched.description && (
                <small className="error-msg">{errors.description}</small>
              )}
            </div>

            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="platform">Platform</label>
                <input
                  name="platform"
                  type="text"
                  placeholder="PC"
                  onChange={handleChange}
                  value={values.platform}
                  onBlur={handleBlur}
                  className={
                    errors.platform && touched.platform ? "input-error" : ""
                  }
                />
              </div>
              {errors.platform && touched.platform && (
                <small className="error-msg">{errors.platform}</small>
              )}
            </div>

            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="genre">Genre</label>
                <input
                  name="genre"
                  type="text"
                  placeholder="Adventure"
                  onChange={handleChange}
                  value={values.genre}
                  onBlur={handleBlur}
                  className={errors.genre && touched.genre ? "input-error" : ""}
                />
              </div>
              {errors.genre && touched.genre && (
                <small className="error-msg">{errors.genre}</small>
              )}
            </div>

            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="price">Price</label>
                <input
                  name="price"
                  type="number"
                  step={0.01}
                  placeholder="19.99"
                  onChange={handleChange}
                  value={values.price}
                  onBlur={handleBlur}
                  min={1}
                  className={errors.price && touched.price ? "input-error" : ""}
                />
              </div>
              {errors.price && touched.price && (
                <small className="error-msg">{errors.price}</small>
              )}
            </div>

            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="quantity">Quantity</label>
                <input
                  name="quantity"
                  type="number"
                  placeholder="100"
                  onChange={handleChange}
                  value={values.quantity}
                  onBlur={handleBlur}
                  min={1}
                  className={
                    errors.quantity && touched.quantity ? "input-error" : ""
                  }
                />
              </div>
              {errors.quantity && touched.quantity && (
                <small className="error-msg">{errors.quantity}</small>
              )}
            </div>
            {isSubmitting ? (
              <Spinner />
            ) : (
              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                w="100%"
                p="0.5rem 1.3rem"
                type="submit"
              >
                Aply changes
              </ButtonStyled>
            )}
          </form>
        </AddProductStyled>
      )}
    </>
  );
};

export default EditProduct;
