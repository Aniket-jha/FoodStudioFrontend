import axios from "axios";
import {
  NEW_BANNER_REQUEST,
  NEW_BANNER_FAIL,
  NEW_BANNER_SUCCESS,
  GET_ALL_BANNER_REQUEST,
  GET_ALL_BANNER_SUCCESS,
  GET_ALL_BANNER_FAIL,
  CLEAR_ERRORS,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  DELETE_BANNER_FAIL
} from "../constants/bannerConstants";

export const getAllBanners = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BANNER_REQUEST });

    const { data } = await axios.get("/api/v1/banners");

    dispatch({
      type: GET_ALL_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Product
export const createBanner = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_BANNER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/banner/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_BANNER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteBanner = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BANNER_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/banner/${id}`);

    dispatch({
      type: DELETE_BANNER_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BANNER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};