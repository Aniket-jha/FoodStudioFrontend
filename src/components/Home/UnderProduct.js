import React from "react";
import classes from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheckCircle,
  faMobileScreen,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const UnderProduct = () => {
  return (
    <div>
      <div className={classes.upDiv}>
        <div className={classes.cardDiv}>
          <FontAwesomeIcon
            style={{
              paddingBottom: "20px",
              fontSize: "80px",
              marginTop: "10px",
              color: "rgb(31, 114, 159)",
            }}
            icon={faBriefcase}
          />
          <h4>Total Orders</h4>
          <h3>929</h3>
        </div>
        <div className={classes.cardDiv}>
          <FontAwesomeIcon
            style={{
              paddingBottom: "20px",
              fontSize: "80px",
              marginTop: "10px",
              color: "rgb(31, 114, 159)",
            }}
            icon={faUsers}
          />
          <h4>Happy Customer</h4>
          <h3>878</h3>
        </div>
        <div className={classes.cardDiv}>
          <FontAwesomeIcon
            style={{
              paddingBottom: "20px",
              fontSize: "80px",
              marginTop: "10px",
              color: "rgb(31, 114, 159)",
            }}
            icon={faCheckCircle}
          />
          <h4>Premium Products</h4>
          <h3>1756</h3>
        </div>
        <div className={classes.cardDiv}>
          <FontAwesomeIcon
            style={{
              paddingBottom: "20px",
              fontSize: "80px",
              marginTop: "10px",
              color: "rgb(31, 114, 159)",
            }}
            icon={faMobileScreen}
          />
          <h4>Support Service</h4>
          <h3>1823</h3>
        </div>
      </div>
    </div>
  );
};

export default UnderProduct;
