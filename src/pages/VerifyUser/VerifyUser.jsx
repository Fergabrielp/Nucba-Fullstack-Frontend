import { useNavigate } from "react-router-dom";
import { VerifyUserContainer } from "./VerifyUserStyled.js";
import { FaKey } from "react-icons/fa";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled.js";
import { useDispatch } from "react-redux";
import { verifySchema } from "../../formik/validationSchema.js";
import { useFormik } from "formik";
import { LoginRegisterAlert } from "../../components/UI/Alerts/Alerts.js";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";
import { verify } from "../../axios/Verify.js";

const VerifyUser = ({ email, setIsRegistered }) => {
  const navigate = useNavigate();

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
      code: "",
    },

    validationSchema: verifySchema,

    onSubmit: async (formData, { resetForm }) => {
      try {
        const { code } = formData;
        await verify(email, code);
        setIsRegistered(false);
        LoginRegisterAlert("success", `Email is verified now. Plase login.`);
        navigate("/login");
      } catch (error) {
        LoginRegisterAlert("fail", `We've had a problem verifying email`);
        resetForm();
      }
    },
  });

  return (
    <VerifyUserContainer>
      <h2>Ingrese el código enviado a su correo</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-error-container">
          <div className="input-container">
            <label htmlFor="email">
              <FaKey />
            </label>
            <input
              name="code"
              type="text"
              onChange={handleChange}
              value={values.code}
              onBlur={handleBlur}
              className={errors.code && touched.code ? "input-error" : ""}
            />
          </div>
          {errors.code && touched.code && (
            <small className="error-msg">{errors.code}</small>
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
            Enviar Código
          </ButtonStyled>
        )}
      </form>
    </VerifyUserContainer>
  );
};

export default VerifyUser;
