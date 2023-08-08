import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import ProductList from "../../components/Products/ProductList/ProductList";
import { HomeStyled } from "./HomeStyled";
import ProductListSearch from "../../components/Search/ProductListSearch/ProductListSearch";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  const isSearching = useSelector((state) => state.products.isSearching);

  return (
    <HomeStyled>
      <Hero />
      {!isSearching ? (
        <>
          <Filters />
          <ProductList />
        </>
      ) : (
        <ProductListSearch />
      )}
    </HomeStyled>
  );
};

export default Home;
