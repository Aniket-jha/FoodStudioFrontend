import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "../Home/Home.module.css"
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const WholesaleCard = ({product}) => {
    const options={
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth < 600 ? 20 : 25,
        value:product.ratings,
        isHalf:true,
    }
  return (
    <Link className={classes.productBox} to={`/wholesale/${product._id}`}>
    <Card className={classes.card}>
      <Card.Img style={{width:"14rem"}} variant="top" src={ product.images[0].url} />
      <Card.Body className={classes.cardBox}>
        <h4 style={{fontSize:"1.3rem",fontFamily:"Montserrat",fontWeight:"500"}}>{product.name}</h4>
       
        <button className={classes.cartButton}>Add to Cart</button>
        <hr  />
         <h6>
       { `₹${product.price}`}
        </h6>
        <div>
            <ReactStars {...options} />{}
            <span>({product.numOfReviews} Reviews)</span>
        </div>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default WholesaleCard