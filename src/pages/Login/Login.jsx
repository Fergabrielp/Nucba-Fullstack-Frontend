import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "./LoginStyled.js";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled.js";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/userReducer/userSlice.js";
import { loginSchema } from "../../formik/validationSchema.js";
import { Formik, useFormik } from "formik";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/fbConfig.js";
import { LoginRegisterAlert } from "../../components/UI/Alerts/Alerts.js";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (email, password, resetForm) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach(async (user) => {
      if (
        (await user.data().email) === email &&
        (await user.data().password) === password
      ) {
        dispatch(loginUser(user));
        navigate("/");
        LoginRegisterAlert("success", `Welcome ${user.data().userName}`);
      } else {
        LoginRegisterAlert("fail", `Sorry, user does not exists`);
        resetForm();
      }
    });
  };

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

    onSubmit: (formData, { resetForm }) => {
      handleLogin(formData.email, formData.password, resetForm);
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
