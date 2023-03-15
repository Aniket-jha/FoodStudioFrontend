import React from "react";
import classes from "./Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dmart from "../../assets/dmart.png";
import jiomart from "../../assets/jiomart.png";
import amazon from "../../assets/amazon.png";
import naturebasket from "../../assets/naturebasket.png";
import reliancesmart from "../../assets/reliancesmart.png";
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
const Companies = () => {
  const companiesData = [dmart,jiomart,amazon,naturebasket,reliancesmart]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 0, // optional, default to 1.
    },
  };

  return (
    <div className={classes.multiDiv}>
      {" "}
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
        {
          companiesData.map(data=>(
             <SwiperSlide>
             <div className="swiperDiv" >
          <img  src={data} alt="" />
        </div >
          </SwiperSlide>
          ))
        }
          
         
          
        
       
        </Swiper>
    
    </div>
  );
};

export default Companies;
