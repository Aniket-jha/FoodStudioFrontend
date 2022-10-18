import React, { Fragment, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../Products/ProductCard";
import classes from "./Home.module.css";
import Loader from "../Products/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes.ProductsBox}>
          {products &&
            products.map((product, key) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Products;
