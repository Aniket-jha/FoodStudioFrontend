import {
  NEW_BANNER_REQUEST,
  NEW_BANNER_FAIL,
  NEW_BANNER_SUCCESS,
  GET_ALL_BANNER_REQUEST,
  GET_ALL_BANNER_SUCCESS,
  GET_ALL_BANNER_FAIL,
  NEW_BANNER_RESET,
  CLEAR_ERRORS,
  DELETE_BANNER_FAIL,
  DELETE_BANNER_REQUEST,
  DELETE_BANNER_SUCCESS,
  DELETE_BANNER_RESET
} from "../constants/bannerConstants";


export const bannerReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_ALL_BANNER_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case GET_ALL_BANNER_SUCCESS:
      return {
        loading: false,
        banners:action.payload.banners
      };

    case GET_ALL_BANNER_FAIL:
    
      return {
        loading: false,
        error: action.payload,
      };
       case NEW_BANNER_RESET:
      return {
        ...state,
        success: false,
      };
      case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
   
    default:
      return state;
  }
};

export const newBannerReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case NEW_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_BANNER_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.banner,
      };
    case NEW_BANNER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
   
   
    default:
      return state;
  }
};

export const bannerDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BANNER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_BANNER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

   
    case DELETE_BANNER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_BANNER_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};