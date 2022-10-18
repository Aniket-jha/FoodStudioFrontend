import React from 'react'
import classes from "./Header.module.css"
const Headline = (props) => {
  return (
    <div>
        <div className={classes.background}>
            <h2>{props.title}</h2>
        </div>
    </div>
  )
}

export default Headline