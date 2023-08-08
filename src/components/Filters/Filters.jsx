import { useDispatch } from "react-redux";
import { CATEGORY, PLATFORM, SORT_BY } from "../../constants/Constants";
import { FiltersStyled } from "./FiltersStyled";
import { useEffect } from "react";
import { getFilteredProducts, getProductsData } from "../../axios/FetchData";
import { useState } from "react";
import { ButtonStyled } from "../UI/Button/ButtonStyled";
import { LinkButtonStyled } from "../UI/LinkButton/LinkButtonStyled";
import { resetLimit } from "../../redux/reducers/productsReducer/productsSlice";

const Filters = () => {
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!platform || !category || !sortBy || !showFilters) {
      getProductsData(dispatch);
      return;
    }
    dispatch(resetLimit()),
      getFilteredProducts(dispatch, platform, category, sortBy);
  }, [category, platform, sortBy, showFilters]);

  return (
    <FiltersStyled>
      {showFilters ? (
        <>
          <label>
            Platform:
            <select
              name="Plataforma"
              onChange={(e) => setPlatform(e.target.value)}
            >
              {PLATFORM.map((plat) => {
                return (
                  <option value={plat.item} key={plat.id}>
                    {plat.item.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Category
            <select
              name="Categorías"
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORY.map((cat) => {
                return (
                  <option value={cat.item} key={cat.id}>
                    {cat.item.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Sort By
            <select name="sort-by" onChange={(e) => setSortBy(e.target.value)}>
              {SORT_BY.map((sort) => {
                return (
                  <option value={sort.item} key={sort.id}>
                    {sort.item.toUpperCase()}
                  </option>
                );
              })}
            </select>
          </label>
          <ButtonStyled
            bg="var(--cancel)"
            bgh="var(--cancel-hover)"
            col="var(--text-white)"
            p="0.5rem 1.3rem"
            onClick={() => {
              setShowFilters(false), dispatch(resetLimit());
              setCategory(""), setPlatform(""), setSortBy("");
            }}
          >
            Delete Filters
          </ButtonStyled>
        </>
      ) : (
        <LinkButtonStyled
          bg="var(--accept)"
          bgh="var(--accept-hover)"
          col="var(--text-white)"
          p="0.5rem 1.3rem"
          onClick={() => {
            setShowFilters(true),
              dispatch(resetLimit()),
              setCategory("2d"),
              setPlatform("all"),
              setSortBy("alphabetical");
          }}
        >
          Add Filters
        </LinkButtonStyled>
      )}
    </FiltersStyled>
  );
};

export default Filters;
