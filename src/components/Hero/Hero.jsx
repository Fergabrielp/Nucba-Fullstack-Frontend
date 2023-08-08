import { HeroStyled } from "./HeroStyled";

import sale from "../../assets/sale.png";
import sale2 from "../../assets/sale2.png";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <HeroStyled>
      <img className="sale-left" src={sale} alt="Hero image" />
      <img className="logo-img" src={logo} alt="Logo Image" />
      <img className="sale-right" src={sale2} alt="Hero image" />
    </HeroStyled>
  );
};

export default Hero;
