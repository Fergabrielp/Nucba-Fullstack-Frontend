import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "./LoginStyled.js";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled.js";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/userReducer/userSlice.js";
import { loginSchema } from "../../formik/validationSchema.js";
import { useFormik } from "formik";
import { LoginRegisterAlert } from "../../components/UI/Alerts/Alerts.js";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";
import { login } from "../../axios/Login.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      email: "",
      password: "",
    },

    validationSchema: loginSchema,

    onSubmit: async (formData, { resetForm }) => {
      try {
        const { payload } = await login(formData);
        dispatch(loginUser(payload));
        LoginRegisterAlert("success", `Welcome to Fergames`);
        navigate("/home");
      } catch (error) {
        LoginRegisterAlert("fail", `We've had a problem logging user`);
        resetForm();
      }
    },
  });

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-error-container">
          <div className="input-container">
            <label htmlFor="email">
              <FaEnvelope />
            </label>
            <input
              name="email"
              type="email"
              placeholder="usuario@dominio.com"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
          </div>
          {errors.email && touched.email && (
            <small className="error-msg">{errors.email}</small>
          )}
        </div>
        <div className="input-error-container">
          <div className="input-container">
            <label htmlFor="password">
              <FaLock />
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
          </div>
          {errors.password && touched.password && (
            <small className="error-msg">{errors.password}</small>
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
            Ingresar
          </ButtonStyled>
        )}
        <small>
          No tienes una cuenta? <Link to="/register">Registrate</Link>
        </small>
      </form>
    </LoginContainer>
  );
};

export default Login;
