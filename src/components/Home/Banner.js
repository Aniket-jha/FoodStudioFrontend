import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../../assets/Banner1.webp"
import Banner2 from "../../assets/Banner2.webp"
import Banner3 from "../../assets/Banner3.webp"
import classes from "./Home.module.css"
import  {getAllBanners} from "../../actions/bannerAction"
import { useSelector, useDispatch } from 'react-redux';
const Banner = () => {
   const dispatch = useDispatch();
   const { error, banners } = useSelector((state) => state.banners);
 
   useEffect(() => {

      dispatch(getAllBanners());

   }, [dispatch,])
    console.log(banners)
  return (
    <div >
         <Carousel className={classes.banner}>
         {banners && banners.map((banner,key)=>(
              <Carousel.Item key={banner._id} className={classes.bannerImg}  interval={1000}>
        <img
          className="d-block w-100"
          src={banner.images[0].url}
          alt={banner._id}
        />
          </Carousel.Item>
         ))}
    
        
    
    
    </Carousel>
    </div>
  )
}

export default Banner