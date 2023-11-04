// import React from "react";
import "./sort.styles.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsArray } from "../../store/products/product.selector";
import { selectIsSorted } from "../../store/products/product.selector";
import { selectSortedProds } from "../../store/products/product.selector";
import {
  sortProduct,
  unsortProduct,
} from "../../store/products/product.action";

function Sort() {
  const products = useSelector(selectProductsArray);
  const sortedProds = useSelector(selectSortedProds);
  const isSorted = useSelector(selectIsSorted);

  const dispatch = useDispatch();

  const handleSort = () => {
    if (!isSorted) {
      dispatch(sortProduct(sortedProds));
      toast("Products Sorted According To Price!");
    } else {
      dispatch(unsortProduct(products));
      toast("Removed Filter!");
    }
  };

  return (
    <div onClick={handleSort} className="sort-btn">
      {isSorted ? <button className="remove">Remove Filter</button> : <button className="sort">Sort by price</button>}
    </div>
  );
}

export default Sort;
