import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer, newReviewReducer,productReducer,newProductReducer,reviewReducer,productReviewsReducer } from "./reducers/productReducer";
import {
  allUsersReducer,
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userReducer,
  
} from "./reducers/userReducer";
import {bannerReducer, newBannerReducer,bannerDeleteReducer} from "./reducers/bannerReducer"
import {cartReducer} from "./reducers/cartReducer"
import { newOrderReducer,myOrdersReducer,allOrdersReducer,orderReducer,orderDetailsReducer } from "./reducers/orderReducer";
const reducer = combineReducers({
  banners:bannerReducer,
  newBanner:newBannerReducer,
  bannerDelete:bannerDeleteReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile:profileReducer,
  newProduct:newProductReducer,
  review:reviewReducer,
  productReviews:productReviewsReducer,
  forgotPassword:forgotPasswordReducer,
  newReview:newReviewReducer,
  cart:cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  allUsers:allUsersReducer,
  product: productReducer,
  userDetails:userDetailsReducer
});

let initialState = {
  cart:{
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
