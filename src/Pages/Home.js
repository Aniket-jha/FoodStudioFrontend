import React from 'react'
import Headline from '../components/Headline'
import Banner from '../components/Home/Banner'
import BelowBanner from '../components/Home/BelowBanner'
import Products from '../components/Home/Products'
import Companies from '../components/Home/Companies'
import UnderProduct from '../components/Home/UnderProduct'
import classes from "../components/Home/Home.module.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import MetaData from '../components/Layouts/MetaData'
import { useSelector } from 'react-redux'
const Home = () => {
   const {
    products,
    
  } = useSelector((state) => state.products);
  
  console.log(products)
  return (
    <div >
    <Header/>
    <MetaData title="Home" />
      <Banner/>
      <BelowBanner/>
      <div className={classes.dividerDiv}>
      <Headline title="Our Products"/>
      <Products/>
      </div>
       <UnderProduct/>
      <div className={classes.dividerDiv}>
      <Headline title="Our Products"/>
      <Companies/>
      </div>
     <Footer/>
    </div>
  )
}

export default Home