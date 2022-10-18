import React from 'react'
import Footer from '../components/Footer'
import Header from "./../components/Header"
import classes from "./Contact.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faLocation, faLocationPin, faLocationPinLock, faMailBulk, faPhone, faPhoneSquare, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div>
        <Header/>
        <h1 className={classes.contactTitle}>Get In Touch</h1>
                       <div className={classes.contactContent}>
                  
                    <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"10px",fontSize:"20px",marginTop:"5px",}} icon={faLocationPin}/>
                      </div>
                      <div>
                        <h5 >Address:- <span>G-19, Dryfruit Market, APMC Market, Sectar-19, Vashi, Navi-Mumbai-400703</span></h5>
                      </div>
                    </div>
                     <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"10px",fontSize:"20px",marginTop:"5px",}} icon={faPhone}/>
                      </div>
                      <div>
                        <h5 > (+91) 9920050123</h5>
                      </div>
                    </div>
                     <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"20px",fontSize:"20px",marginTop:"5px",}} icon={faMailBulk}/>
                      </div>
                      <div>
                        <h5 > info@foodstudio.co.in</h5>
                      </div>
                    </div>
                  
                </div>
                <h1 className={classes.contactFormTitle}>Contact Us Now</h1>
                 <form className={classes.contactForm}>
                        <div className={classes.formPart}>
                            <input placeholder='Enter your first name ' type="text" />
                            <input placeholder='Enter your Email Id' type="email" />
                        </div>
                         <div className={classes.formPart}>
                            <input placeholder='Enter your Contact No' type="tel" />
                            <input placeholder='Enter your Subject ' type="text" />
                        </div>
                        <div className={classes.formPart}>
                            <textarea placeholder='Enter your Message'  cols="30" rows="10"></textarea>
                        </div>
                    </form>
            
        <Footer/>
    </div>
  )
}

export default Contact