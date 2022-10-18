import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import classes from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = localStorage.getItem('cartItems')
  const {isAuthenticated, loading, user} = useSelector((state)=>state.user)
  return (
    <div>
      <div className={classes.tip}>
        <div className={classes.tipCol}>
          <h6>
            <FontAwesomeIcon
              style={{
                paddingRight: "10px",
                fontSize: "20px",
                marginTop: "10px",
              }}
              icon={faPhoneSquare}
            />
            Customer Care No: <span>(+91) 9920050123</span>
          </h6>
        </div>
        <div className={classes.tipCol}>
          {/* {!userName ? (
            <div>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                {" "}
                <h6>
                  <FontAwesomeIcon
                    style={{
                      paddingRight: "10px",
                      fontSize: "20px",
                      marginTop: "10px",
                    }}
                    icon={faUser}
                  />
                  Login
                </h6>
              </Link>
            </div>
          ) : (
            <div className={classes.dropdown}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {userPhoto && (
                  <img
                    style={{
                      width: "40px",
                      margin: "10px",
                      borderRadius: "50%",
                    }}
                    src={userPhoto}
                    alt="[profile"
                  />
                )} */}
          {/* <h6 style={{ marginTop: "10px" }}>Hey! {userName}</h6>
              </div>

              <div className={classes.dropdownContent}>
                <p>My Profile</p>
                <p onClick={handleAuth}>Logout</p>
              </div>
            </div>
          )} */}
          <Link style={{textDecoration:"none"}} to="/cart">
          <div>
            <h6 style={{color:"white"}}>
              <FontAwesomeIcon
                style={{
                  paddingRight: "10px",
                  fontSize: "20px",
                  marginTop: "10px",
                }}
                icon={faShoppingCart}
              />
              Cart
            </h6>
          </div>
          </Link>
          {!isAuthenticated && (<div>
          <Link className={classes.loginButton} to="/login"><h6>Login</h6></Link>
      </div>)}
        </div>
      </div>
      
      <div className={classes.logoDiv}>
        <img src={Logo} width="300px" alt="" />
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
