import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilter } from "./filters";

const search = () => {
  const searchInput = document.querySelector(".search-wrapper_input");
  const searchBtn = document.querySelector(".search-btn");

  searchInput.addEventListener("input", (event) => {
    const value = event.target.value;
    getData().then((data) => renderGoods(searchFilter(data, value)));
  });
};

export default search;
