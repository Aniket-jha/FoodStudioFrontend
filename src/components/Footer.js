import React from 'react'
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-regular-svg-icons'
import Intagram from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"
import Linkedin from "../assets/linkedin.png"
import Twitter from "../assets/twitter.png"
import { faLandmark, faLocation, faLocationPin, faLocationPinLock, faMailBulk, faPhone, faPhoneSquare, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div>
        <div className={classes.footDiv}>
            <div className={classes.footBox1}>
                <div>
                    <h2>Get In Touch</h2>
                    <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"10px",fontSize:"20px",marginTop:"10px",color:"white"}} icon={faLocationPin}/>
                      </div>
                      <div>
                        <h5 >Address:- <span>G-19, Dryfruit Market, APMC Market, Sectar-19, Vashi, Navi-Mumbai-400703</span></h5>
                      </div>
                    </div>
                     <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"10px",fontSize:"20px",marginTop:"10px",color:"white"}} icon={faPhone}/>
                      </div>
                      <div>
                        <h5 > (+91) 9920050123</h5>
                      </div>
                    </div>
                     <div className={classes.addressArea}>
                      <div>
                        <FontAwesomeIcon style={{paddingRight:"10px",fontSize:"20px",marginTop:"10px",color:"white"}} icon={faMailBulk}/>
                      </div>
                      <div>
                        <h5 > info@foodstudio.co.in</h5>
                      </div>
                    </div>
                    <h2>Connect with us</h2>
                    <div className={classes.social}>
                     <img src={Intagram} alt="" width="40px" />
                     <img src={Facebook} alt="" width="40px" />
                     <img src={Linkedin} alt="" width="40px" />
                     <img src={Twitter} alt="" width="40x" />
                    </div>
                </div>
                <div>
                      
                    </div>
            </div>
            <div className={classes.footBox2}><div>
                    <h2>POLICIES</h2>
                    <div>
                      <p>Terms and Service</p>
                      <p>Privacy Policy</p>
                      <p>Return Policy</p>
                      <p>Track Order</p>
                    </div>
                     <h2>SITEMAP</h2>
                    <div>
                      <p>My Account</p>
                      <p>About Us</p>
                      <p>Our Product</p>
                      <p>Contact Us</p>
                    </div>
                </div></div>
            <div className={classes.footBox3}><div>
                    <h2>Contact Us</h2>
                    <div>
                      <input className={classes.contactInput} placeholder='Your Name' type="text" />
                      <input className={classes.contactInput} placeholder='Your Email' type="text" />
                      <input className={classes.contactInput} placeholder='Subject' type="text" />
                      <textarea className={classes.contactTextArea} placeholder='Message' ></textarea>
                    </div>
                </div></div>
            <div className={classes.footBox4}><div>
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7471379559715!2d73.00610431482197!3d19.074852087088583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c17ca964cef1%3A0xf669eb6bb4d4554c!2sDryfruit%20and%20masala%20market%20Vashi!5e0!3m2!1sen!2sin!4v1660817450126!5m2!1sen!2sin" width="400px" height="450px" style={{border:0}}  loading="lazy"></iframe>
                </div></div>
        </div>
    </div>
  )
}

export default Footer