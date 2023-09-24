import ProductList from "../../components/Products/ProductList/ProductList";
import { HomeStyled } from "./HomeStyled";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <HomeStyled>
      <Hero />
      <ProductList />
    </HomeStyled>
  );
};

export default Home;
