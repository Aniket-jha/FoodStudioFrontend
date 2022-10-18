import React,{useEffect} from 'react'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./paymentsuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {createOrder} from "../../actions/orderAction"
import {useDispatch} from "react-redux"
import {useSearchParams} from "react-router-dom"
const PaymentSuccess = () => {
    const searchQuery = useSearchParams()[0]
    const referenceNum = searchQuery.get("reference")
    console.log(referenceNum)
    
   
  return (
     <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  )
}

export default PaymentSuccess