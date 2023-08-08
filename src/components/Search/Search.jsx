import { FaSearch } from "react-icons/fa";
import { SearchStyled } from "./SearchStyled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getsProductsFound,
  toggleIsLoading,
  toggleIsSearching,
} from "../../redux/reducers/productsReducer/productsSlice";
import { useNavigate } from "react-router-dom";
import { NotFoundAlert } from "../UI/Alerts/Alerts";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleSearch = (e, value) => {
    e.preventDefault();

    const valueToSearch = value.toLowerCase().trim();

    const productFound = products.filter((prod) =>
      prod.title.toLowerCase().includes(valueToSearch)
    );

    if (!productFound.length || productFound.length === 374) {
      NotFoundAlert("Product not found");
      dispatch(toggleIsSearching(false));
      navigate("/");
      setValue("");
      return;
    } else {
      dispatch(toggleIsLoading(true));
      dispatch(getsProductsFound(productFound));
      navigate("/");
      setValue("");
      return;
    }
  };

  return (
    <SearchStyled>
      <input
        value={value}
        type="text"
        placeholder="Buscar producto..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={(e) => handleSearch(e, value)}>
        <FaSearch size="0.8rem" color="var(--text-white)" />
      </button>
    </SearchStyled>
  );
};

export default Search;
