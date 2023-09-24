import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./LoginStyled.js";
import { ButtonStyled } from "../UI/Button/ButtonStyled.js";
import { productSchema } from "../../formik/validationSchema.js";
import { useFormik } from "formik";
import { LoginRegisterAlert } from "../UI/Alerts/Alerts.js";
import Spinner from "../UI/Spinner/Spinner.jsx";
import { createMyProduct } from "../../axios/Products.js";
import { useSelector } from "react-redux";

const AddProduct = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  const {
    handleSubmit,
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      title: "",
      thumbnail: "",
      shortDescription: "",
      description: "",
      platform: "",
      genre: "",
      price: "",
      quantity: "",
    },

    validationSchema: productSchema,

    onSubmit: async (formData, { resetForm }) => {
      try {
        await createMyProduct(token, formData);
        LoginRegisterAlert("success", `Product successfully added`);
        navigate("/cart");
      } catch (error) {
        LoginRegisterAlert("fail", `We've had a problem logging user`);
        resetForm();
      }
    },
  });

  return (
    <LoginContainer>
      <h2>Add Product</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-error-container">
          <div className="input-container">
            <label htmlFor="title"></label>
            <input
              name="title"
              type="text"
              placeholder="Title"
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
            <label htmlFor="thumbnail"></label>
            <input
              name="thumbnail"
              type="text"
              placeholder="Image link"
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
            <label htmlFor="shortDescription"></label>
            <input
              name="shortDescription"
              type="text"
              placeholder="Short Description"
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
            <label htmlFor="description"></label>
            <input
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
              className={
                errors.description && touched.description ? "input-error" : ""
              }
            />
          </div>
          {errors.description && touched.description && (
            <small className="error-msg">{errors.description}</small>
          )}
        </div>

        <div className="input-error-container">
          <div className="input-container">
            <label htmlFor="platform"></label>
            <input
              name="platform"
              type="text"
              placeholder="Platform"
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
            <label htmlFor="genre"></label>
            <input
              name="genre"
              type="text"
              placeholder="Genre"
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
            <label htmlFor="price"></label>
            <input
              name="price"
              type="number"
              step={0.01}
              placeholder="Price"
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
            <label htmlFor="quantity"></label>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
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
            Add
          </ButtonStyled>
        )}
      </form>
    </LoginContainer>
  );
};

export default AddProduct;
