import React from "react";
import classes from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
const BelowBanner = () => {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.boxDiv}>
        <div className={classes.inner}>
          <div>
            <FontAwesomeIcon
              style={{
                paddingRight: "10px",
                fontSize: "50px",
                marginTop: "10px",
                color: "white",
              }}
              icon={faTruck}
            />
          </div>
          <div>
            <h5>Free Shipping</h5>
            <p>All Around the World</p>
          </div>
        </div>
      </div>
      <div className={classes.boxDiv}>
        {" "}
        <div className={classes.inner}>
          {" "}
          <div>
            <FontAwesomeIcon
              style={{
                paddingRight: "10px",
                fontSize: "50px",
                marginTop: "10px",
                color: "white",
              }}
              icon={faContactCard}
            />
          </div>
          <div>
            <h5>100% Secure Payment</h5>
            <p>Your Payment are Safe with us</p>
          </div>
        </div>
      </div>
      <div className={classes.boxDiv}>
        {" "}
        <div className={classes.inner}>
          {" "}
          <div>
            <FontAwesomeIcon
              style={{
                paddingRight: "10px",
                fontSize: "50px",
                marginTop: "10px",
                color: "white",
              }}
              icon={faPhone}
            />
          </div>
          <div>
            <h5>Call Us</h5>
            <p>Help Desk :- (+91) 9920050123</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BelowBanner;
