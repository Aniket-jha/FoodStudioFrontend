import React, { useEffect } from "react";
import GroupIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import { getAllBanners } from "../../actions/bannerAction";
import MetaData from "../Layouts/MetaData";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
const { banners } = useSelector((state) => state.banners);
  const { orders } = useSelector((state) => state.allOrders);
  console.log(banners)
  const { users } = useSelector((state) => state.allUsers);
  const {isAuthenticated, loading , user} =useSelector((state)=>state.user)
  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    dispatch(getAllBanners());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#7F5283"],
        hoverBackgroundColor: ["#A6D1E6"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#7F5283", "#A6D1E6"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
    
   { user?.role==="admin" ? ( <><Sidebar/>

      <div className="dashboardContainer">
       

        <div className="dashboardSummary">
         
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
            <div className="headBox">
            <div>
              <ShopIcon style={{fontSize:"70px",backgroundColor:"#fff",color:"#7F5283",padding:"15px",borderRadius:"50px",marginRight:"15px"}}/>
              </div>
              <div>
              <p style={{margin:"5px",fontSize:"1.3rem",fontWeight:"400",fontFamily:"Roboto"}}>Product</p>
              <span style={{marginTop:"5px",fontFamily:"Roboto",fontSize:"1.5rem"}}>{products && products.length}</span>
              </div>
              </div>
            </Link>
            <Link to="/admin/orders">
            <div className="headBox">
            <div>
             <ShoppingCartIcon style={{fontSize:"70px",backgroundColor:"#fff",color:"#7F5283",padding:"15px", borderRadius:"50px",marginRight:"15px"}}/>
             </div>
             <div>
              <p style={{margin:"5px",fontSize:"1.3rem",fontWeight:"400",fontFamily:"Roboto"}}>Orders</p>
              <span  style={{marginTop:"5px",fontFamily:"Roboto",fontSize:"1.5rem"}}>{orders && orders.length}</span>
              </div>
              </div>
            </Link>
            <Link to="/admin/users">
            <div className="headBox">
            <div>
             <GroupIcon style={{fontSize:"70px",backgroundColor:"#fff",color:"#7F5283",padding:"15px",borderRadius:"50px",marginRight:"15px"}}/>
             </div>
             <div>
              <p style={{margin:"5px",fontSize:"1.3rem",fontWeight:"400",fontFamily:"Roboto"}}>Users</p>
              <span  style={{marginTop:"5px",fontFamily:"Roboto",fontSize:"1.5rem"}}>{users && users.length}</span>
              </div>
              </div>
            </Link>
            <Link to="/admin/banners">
            <div className="headBox">
            <div>
             <ImageIcon style={{fontSize:"70px",backgroundColor:"#fff",color:"#7F5283",padding:"15px",borderRadius:"50px",marginRight:"15px"}}/>
             </div>
             <div>
              <p style={{margin:"5px",fontSize:"1.3rem",fontWeight:"400",fontFamily:"Roboto"}}>Banners</p>
              <span style={{marginTop:"5px",fontFamily:"Roboto",fontSize:"1.5rem"}}>{banners ? banners.length : 0}</span>
              </div>
              </div>
            </Link>
          </div>
         
        </div>
         <div className="orderAndReviews">
         <div >
            <p style={{fontSize:"1.4rem",textAlign:"center",color:"2C3639"}}>
              Total Amount : <span style={{fontFamily:"Montserrat",fontWeight:"bold",color:"#5BB318"}}> ₹{totalAmount}</span>
            </p>
             <div className="lineChart">
         <Line data={lineState} />
        </div>
          </div>
          <div>
            <div className="doughnutChart">
            <p style={{fontSize:"1.4rem",textAlign:"center",color:"2C3639"}}>
              Products in Stocks : <span style={{fontFamily:"Montserrat",fontWeight:"bold",color:"#5BB318"}}> {products.length - outOfStock
      }</span>
            </p>
         <Doughnut data={doughnutState} />
        </div>
          </div>
          </div>
       

        
      </div></>) : (
        <div>
          Your are not a admin to access this resource
        </div>
      )}
    </div>
  );
};

export default Dashboard;