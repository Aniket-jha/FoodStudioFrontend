import React,{Fragment} from 'react'
import MetaData from "../Layouts/MetaData";
import CheckoutSteps from "../cart/CheckoutSteps";
import { Typography } from "@material-ui/core";
const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
    console.log(orderInfo);
  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={2} />
      <div className="confirmOrderPage">
        <div className='paymentBox'>
        <h1>Pay Through-</h1>
            <button>UPI</button>
            <button>UPI</button>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{orderInfo.subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{orderInfo.shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{orderInfo.tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{orderInfo.totalPrice}</span>
            </div>

           
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Payment