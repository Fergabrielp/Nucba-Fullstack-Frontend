import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUserAltSlash,
  FaPlus,
  FaClipboardList,
} from "react-icons/fa";
import { ButtonStyled } from "../UI/Button/ButtonStyled";
import { NavbarStyled, LinkStyled, LogoStyled } from "./NavbarStyled";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutAlert } from "../UI/Alerts/Alerts";

const Navbar = () => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState(false);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const userName = useSelector((state) => state.user.name);

  const navigate = useNavigate();

  return (
    <NavbarStyled>
      <NavLink to={isLogged ? "/home" : "/"}>
        <LogoStyled src={logo} alt="logo imagen" height={40} />
      </NavLink>
      <div className={`burger-menu ${toggleBurgerMenu ? "open-menu" : ""}`}>
        {!isLogged ? (
          <>
            <NavLink
              className="home-icon"
              to="/"
              onClick={() => {
                setToggleBurgerMenu(!toggleBurgerMenu);
              }}
            >
              <ButtonStyled
                bg="var(--bg)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 8rem"
              >
                <div className="icon-p-container">
                  <FaHome size="1.5rem" color="var(--text-white)" />
                  <p>HOME</p>
                </div>
              </ButtonStyled>
            </NavLink>
            <NavLink
              to="/"
              onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}
            >
              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 8rem"
                type="submit"
              >
                <div className="icon-p-container">
                  <FaUser size="1.5rem" color="var(--text-white)" />
                  <p>LOGIN</p>
                </div>
              </ButtonStyled>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              className="home-icon"
              to="/home"
              onClick={() => {
                setToggleBurgerMenu(!toggleBurgerMenu);
              }}
            >
              <ButtonStyled
                bg="var(--bg)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 8rem"
              >
                <div className="icon-p-container">
                  <FaHome size="1.5rem" color="var(--text-white)" />
                  <p>HOME</p>
                </div>
              </ButtonStyled>
            </NavLink>
            <NavLink
              className="cart-icon"
              to="/cart"
              onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}
            >
              <ButtonStyled
                bg="var(--bg)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 6.5rem"
              >
                <div className="icon-p-container">
                  <FaShoppingCart size="1.3rem" color="var(--text-white)" />
                  <p>MY PRODUCTS</p>
                </div>
              </ButtonStyled>
            </NavLink>
            <NavLink className="cart-icon" to="/add">
              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 6.5rem"
              >
                <div className="icon-p-container">
                  <FaPlus size="1.3rem" color="var(--text-white)" />

                  <p>ADD PRODUCT</p>
                </div>
              </ButtonStyled>
            </NavLink>
            <ButtonStyled
              bg="var(--cancel)"
              bgh="var(--cancel-hover)"
              col="var(--text-white)"
              p="0.5rem 7.5rem"
              onClick={() => {
                logoutAlert(
                  "You're going to Logout",
                  "¡See you soon!",
                  "Yes, logout!",
                  "Logged out from Fer-Games",
                  dispatch,
                  navigate
                );
                setToggleBurgerMenu(!toggleBurgerMenu);
              }}
            >
              <div className="icon-p-container">
                <FaUserAltSlash size="1.3rem" color="var(--text-white)" />
                <p>LOGOUT</p>
              </div>
            </ButtonStyled>
          </>
        )}
      </div>

      <LinkStyled>
        {!isLogged ? (
          <>
            <FaBars
              size="1.5rem"
              color="var(--text-white)"
              className="burger-icon"
              onClick={() => {
                setToggleBurgerMenu(!toggleBurgerMenu);
              }}
            />
            <NavLink className="home-icon" to={isLogged ? "/home" : "/"}>
              <FaHome size="1.5rem" color="var(--text-white)" />
            </NavLink>
            <NavLink to="/">
              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 1.3rem"
                type="submit"
              >
                Login
              </ButtonStyled>
            </NavLink>
          </>
        ) : (
          <>
            <h3>{userName}</h3>
            <FaBars
              size="1.5rem"
              color="var(--text-white)"
              className="burger-icon"
              onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}
            />
            <NavLink className="home-icon" to={isLogged ? "/home" : "/"}>
              <FaHome size="1.5rem" color="var(--text-white)" />
            </NavLink>
            <NavLink className="cart-icon" to="/cart">
              <FaClipboardList size="1.3rem" color="var(--text-white)" />
              {/* <BubbleCart>{quantity}</BubbleCart> */}
            </NavLink>
            <NavLink to="/add">
              <ButtonStyled
                bg="var(--accept)"
                bgh="var(--accept-hover)"
                col="var(--text-white)"
                p="0.5rem 1.3rem"
              >
                <FaPlus size="1.3rem" color="var(--text-white)" />
              </ButtonStyled>
            </NavLink>
            <ButtonStyled
              bg="var(--cancel)"
              bgh="var(--cancel-hover)"
              col="var(--text-white)"
              p="0.5rem 1.3rem"
              onClick={() => {
                logoutAlert(
                  "You're going to Logout",
                  "¡See you soon!",
                  "Yes, logout!",
                  "Logged out from Fer-Games",
                  dispatch,
                  navigate
                );
              }}
            >
              Logout
            </ButtonStyled>
          </>
        )}
      </LinkStyled>
    </NavbarStyled>
  );
};

export default Navbar;
