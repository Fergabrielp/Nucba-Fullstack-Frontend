import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { ButtonStyled } from "../../components/UI/Button/ButtonStyled.js";
import { RegisterContainer } from "./RegisterStyled.js";
import { useFormik } from "formik";
import { registerSchema } from "../../formik/validationSchema.js";
import Spinner from "../../components/UI/Spinner/Spinner.jsx";
import { LoginRegisterAlert } from "../../components/UI/Alerts/Alerts.js";
import { register } from "../../axios/Register.js";
import VerifyUser from "../VerifyUser/VerifyUser.jsx";
import { useState } from "react";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const {
    handleSubmit,
    isSubmitting,
    handleChange,
    values,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    validationSchema: registerSchema,

    onSubmit: async (formData) => {
      try {
        await register(formData);
        setIsRegistered(true);
        LoginRegisterAlert("success", `User succesfully registered`);
      } catch (error) {
        LoginRegisterAlert("fail", `We've had a problem registering user`);
      }
    },
  });

  return (
    <>
      {isRegistered ? (
        <VerifyUser
          email={values.email}
          isRegistered={isRegistered}
          setIsRegistered={setIsRegistered}
        />
      ) : (
        <RegisterContainer>
          <h2>Register</h2>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="userName">
                  <FaUser />
                </label>
                <input
                  name="userName"
                  type="text"
                  placeholder="user name"
                  onChange={handleChange}
                  value={values.userName}
                  onBlur={handleBlur}
                  className={
                    errors.userName && touched.userName ? "input-error" : ""
                  }
                />
              </div>
              {errors.userName && touched.userName && (
                <small className="error-msg">{errors.userName}</small>
              )}
            </div>
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="email">
                  <FaEnvelope />
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="user@domain.com"
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
            <div className="input-error-container">
              <div className="input-container">
                <label htmlFor="repeatPassword">
                  <FaLock />
                </label>
                <input
                  name="repeatPassword"
                  type="password"
                  placeholder="repeat password"
                  onChange={handleChange}
                  value={values.repeatPassword}
                  onBlur={handleBlur}
                  className={
                    errors.repeatPassword && touched.repeatPassword
                      ? "input-error"
                      : ""
                  }
                />
              </div>

              {errors.repeatPassword && touched.repeatPassword && (
                <small className="error-msg">{errors.repeatPassword}</small>
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
                Register
              </ButtonStyled>
            )}
            <small>
              Already have an account? <Link to="/">Login</Link>
            </small>
          </form>
        </RegisterContainer>
      )}
    </>
  );
};

export default Register;
