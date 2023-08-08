import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { LayoutStyled } from "./LayoutStyled";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutStyled>{children}</LayoutStyled>
      <Footer />
    </>
  );
};

export default Layout;
