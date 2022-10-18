import React from "react";
import ErrorIcon from "@material-ui/icons/Error";
import HomeIcon from "@material-ui/icons/Home";
import "./Error.css";
import { Link } from "react-router-dom";
const UserAuthError = () => {
  return (
    <div className="errorbox">
      <ErrorIcon style={{ color: "red", fontSize: "80px" }} />
      <h1>You are not at the right place</h1>
      <Link className="homeLink" to="/">
        <div>
          <HomeIcon style={{ fontSize: "25px", marginRight: "10px" }} />
          Return Home{" "}
        </div>
      </Link>
    </div>
  );
};

export default UserAuthError;
