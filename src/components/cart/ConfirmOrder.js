import React, { Fragment } from "react";
import CheckoutSteps from "../cart/CheckoutSteps";
import { useSelector,useDispatch } from "react-redux";
import MetaData from "../Layouts/MetaData";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Logo from "../../assets/logo.png"
import { UPDATE_PRODUCT_RESET } from "../../constants/productsConstant";
import {
  updateStock,
} from "../../actions/productAction";
import {createOrder} from "../../actions/orderAction"
import axios from "axios"
import { removeItemsFromCart } from "../../actions/cartAction";

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const {products }  = useSelector((state)=>state.products)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  let productContent = {}
  let updatedStock 
cartItems.map((item)=>{
  productContent =   products.find(product=>product._id===item.product)
   updatedStock = productContent.Stock - item.quantity
   console.log(productContent.Stock)
  return updatedStock
  
})
console.log(updatedStock)

 productContent.Stock = updatedStock
  console.log(productContent._id)





  

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country},${shippingInfo.phoneNo}`;

  const proceedToPayment =  async () => {
//     const orderData = {
//       itemsPrice:subtotal,
//       shippingPrice:shippingCharges,
//       taxPrice:tax,
//       totalPrice:totalPrice,
//       shippingInfo:shippingInfo,
//       orderItems:cartItems,
//       user:user._id
//     };
     
   
//    sessionStorage.setItem("orderInfo", JSON.stringify(orderData));

     
//         const {data:{payment}}  = await axios.post("https://backend.foodstudio.co.in/api/v1/orders", {
//             amount:orderData.totalPrice,
//         })
//         const {data:{key}} = await axios.get("https://backend.foodstudio.co.in/api/v1/getKey")
//         console.log(payment);
//         var options = {
//     key: key, // Enter the Key ID generated from the Dashboard
//     amount: payment.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "Food Studio",
//     description: "Test Transaction",
//     image: Logo,
//     order_id:payment.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url:"https://backend.foodstudio.co.in/api/v1/paymentverification",
//     "handler": function (response){
    
//       if(response.razorpay_payment_id){
//           orderData.paymentInfo = {
//             id: response.razorpay_payment_id,
//             status: "succeeded",
//           };
//          dispatch(createOrder(orderData))
//          dispatch(updateStock(productContent._id,productContent))
//          cartItems.map((item)=>(
//           dispatch(removeItemsFromCart(item.product))
//          ))
         
//          navigate("/paymentSuccess")
//         }
//          else{
//             console.log("There is an issue")
//           }
//    },
//     prefill: {
//         "name": user.name,
//         "email": user.email,
        
//     },
//     notes: {
//         "address": "Razorpay Corporate Office"
//     },
//     theme: {
//         "color": "#000"
//     }
// };
// const razor = new window.Razorpay(options);
//   razor.open()

 navigate("/paymentSuccess")
     
  };
  

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button style={{marginBottom:"15px"}} onClick={proceedToPayment}>Pay Through Card/UPI</button>
            <button style={{marginBottom:"15px"}} onClick={proceedToPayment}>Cash on Delivery</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
