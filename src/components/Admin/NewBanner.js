import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";

import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../Layouts/MetaData";

import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { NEW_BANNER_RESET } from "../../constants/bannerConstants";
import { createBanner,clearErrors } from "../../actions/bannerAction";

const NewBanner = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate()
  const { loading, error, success } = useSelector((state) => state.newBanner);

  
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

 

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Banner Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_BANNER_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

 
   

    images.forEach((image) => {
      myForm.append("images", image);
    });
     console.log(images)
    dispatch(createBanner(myForm));
     navigate("/admin/dashboard");
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1 >Create Banner</h1>

           
            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewBanner;