import { useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import {
  BrowserRouter,
Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Home';
import AllProducts from './Pages/AllProducts';
import Footer from './components/Footer';
import ProductDetails from './Pages/ProductDetails';
import Search from './Pages/Search';
import LoginSignup from './components/User/loginSignup';
import Profile from "./components/User/Profile"
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from './components/Layouts/Headers/UserOptions';
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Shipping from "./components/cart/Shipping"
import Cart from './components/cart/Cart';
import MyOrders from "./components/Orders/MyOrders"
import {useSelector} from "react-redux"
import OrderDetails from './components/Orders/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import UserAuthError from './components/ErrorPages/UserAuthError';
import ProductList from './components/Admin/ProductsList';
import UpdateProduct from './components/Admin/UpdateProduct';
import UsersList from './components/Admin/UsersList';
import UpdateUser from './components/Admin/UpdateUser';
import OrderList from './components/Admin/OrderList';
import ProcessOrder from './components/Admin/ProcessOrder';
import NewProduct from './components/Admin/NewProduct';
import ProductReviews from './components/Admin/ProductReviews';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NewBanner from './components/Admin/NewBanner';
import AllBanner from './components/Admin/AllBanner';
import WholeSale from './components/Wholesale/WholeSale';
import Payment from './components/cart/Payment';
import PaymentSuccess from './components/cart/PaymentSuccess';
import WholeSaleProductDetails from './components/Wholesale/WholeSaleProductDetails';
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    
  
      store.dispatch(loadUser());
   
    

    
  }, []);
  return (
    <div className="App">
    {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route exact path="/" element={<Home/>}   />
      <Route exact path="/about" element={<About/>}   />
      <Route exact path="/contact" element={<Contact/>}   />
      <Route exact path="/products" element={<AllProducts/>}   />
       <Route exact path="/Wholesale" element={<WholeSale/>}   />
           <Route exact path="/products/:keyword" element={<AllProducts/>}   />
      <Route exact path="/product/:id" element={<ProductDetails/>}   />
      <Route exact path="/cart" element={<Cart/>}   />
     {isAuthenticated && <Route exact path="/shipping" element={<Shipping/>}   />}
     {isAuthenticated && <Route exact path="/order/confirm" element={<ConfirmOrder/>}   />}
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="*" element={<UserAuthError/>} />
      <Route exact path='/login' element={<LoginSignup/>} />
   {isAuthenticated && <Route exact path='/account' element={<Profile/>} />  }
    
    {isAuthenticated && <Route exact path='/orders' element={<MyOrders/>} />  }
    {isAuthenticated && <Route exact path='paymentsuccess' element={<PaymentSuccess/>} />  }
    {isAuthenticated && <Route exact path='/order/:id' element={<OrderDetails/>} />  }
    {isAuthenticated && <Route exact path='/wholesale/:id' element={<WholeSaleProductDetails/>} />  }
   {isAuthenticated && <Route exact path='/password/update' element={<UpdatePassword/>} />  }
     {isAuthenticated && <Route exact path='/me/update' element={<UpdateProfile/>} />  }
     {isAuthenticated && user.role==="admin" && <Route exact path='/admin/dashboard' element={<Dashboard/>} />   }
        {isAuthenticated && user.role==="admin" && <Route exact path='/admin/banner' element={<NewBanner/>} />   }
                {isAuthenticated && user.role==="admin" && <Route exact path='/admin/banners' element={<AllBanner/>} />   }
      {isAuthenticated && user.role==="admin" && <Route exact path='/admin/products' element={<ProductList/>} />   }
      {isAuthenticated && user.role==="admin" && <Route exact path='/admin/product/:id' element={<UpdateProduct/>} />   }
       {isAuthenticated && user.role==="admin" && <Route exact path='/admin/user/:id' element={<UpdateUser/>} />   }
       {isAuthenticated && user.role==="admin" && <Route exact path='/admin/users' element={<UsersList/>} />   }
       {isAuthenticated && user.role==="admin" && <Route exact path='/admin/orders' element={<OrderList/>} />   }
        {isAuthenticated && user.role==="admin" && <Route exact path='/admin/order/:id' element={<ProcessOrder/>} />   }
         {isAuthenticated && user.role==="admin" && <Route exact path='/admin/product' element={<NewProduct/>} />   }
         {isAuthenticated && user.role==="admin" && <Route exact path='/admin/reviews' element={<ProductReviews/>} />   }
      <Route exact path='/password/forgot' element={<ForgotPassword/>} />  
      
     </Routes>
    
    </div>
  );
}

export default App;
