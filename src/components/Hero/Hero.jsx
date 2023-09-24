import { HeroStyled } from "./HeroStyled";

import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <HeroStyled>
      <img className="logo-img" src={logo} alt="Logo Image" />
      <h1>Panel Administrador</h1>
    </HeroStyled>
  );
};

export default Hero;
