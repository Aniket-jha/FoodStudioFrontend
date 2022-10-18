import React from "react";
import classes from "./Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dmart from "../../assets/dmart.png";
import jiomart from "../../assets/jiomart.png";
import amazon from "../../assets/amazon.png";
import naturebasket from "../../assets/naturebasket.png";
import reliancesmart from "../../assets/reliancesmart.png";
const Companies = () => {
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
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        arrows={false}
        keyBoardControl={true}
        customTransition="transform 900ms ease-in"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className={classes.multicarouselCompanies}
        centerMode={true}
         
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-60-px"
      >
        <div>
          <img width="70px" src={jiomart} alt="" />
        </div>
        <div>
          <img width="70px" src={reliancesmart} alt="" />
        </div>
        <div>
          <img width="70px" src={amazon} alt="" />
        </div>
        <div>
          <img width="70px" src={dmart} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Companies;
