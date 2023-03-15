import React, { Fragment, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../Products/ProductCard";
import classes from "./Home.module.css";
import Loader from "../Products/Loader";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
// Import Swiper styles
import "swiper/css";
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
      //alert?.error(error);
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
        <Swiper
          spaceBetween={0}
          className=""
          draggable={true}
          breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
       
         1440:{
          width:1440,
          slidesPerView:4
        }
      }}
          autoplay={{
            delay: 500,
            disableOnInteraction:false,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products &&
            products.map((product, key) => (
               <SwiperSlide>
              <ProductCard key={product._id} product={product} />
              </SwiperSlide>
            ))}
            </Swiper>
        </div>
      )}
    </Fragment>
  );
};

export default Products;
