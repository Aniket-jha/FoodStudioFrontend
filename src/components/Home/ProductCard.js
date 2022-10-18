import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "./Home.module.css"
const ProductCard = ({product}) => {
  return (
    <Card className={classes.card}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className={classes.cardBox}>
        <h4>{product.name}</h4>
       
        <button className={classes.cartButton}>Add to Cart</button>
        <hr  />
         <h6>
        {product.price}
        </h6>
      </Card.Body>
    </Card>
  )
}

export default ProductCard