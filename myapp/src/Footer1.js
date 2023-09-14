import React from 'react';
import {AiFillMail } from 'react-icons/ai';
import {BiPhoneCall,BiSolidLocationPlus } from 'react-icons/bi';
import {BsFillSendCheckFill,BsInstagram,BsTwitter} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
function Footer1() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i><BiSolidLocationPlus/></i> {/* Corrected syntax */}
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>As Dream Apartment 17 Main Cross Virate Nagar Bangalore</span>
                  </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
            <i><BiPhoneCall/></i> 
              <div className="cta-text">
                <h4>Call us</h4>
                <span>8787818595</span>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 mb-30">
            <div className="single-cta">
           <i><AiFillMail/></i>
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>f2fcustomercare@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-content pt-5 pb-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="footer-widget">
              <div className="footer-logo">
                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a>
              </div>
              <div className="footer-text">
                <p> If you are looking to purchase fresh fruits & daily essentials online, here are a few best grocery and gourmet food online stores for all..</p>
              </div>
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="#"><i>< BsFacebook /></i></a>
                <a href="#"><i><BsInstagram/></i></a>
                <a href="#"><i> <BsTwitter /></i></a>
              </div> 
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Useful Links</h3>
              </div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Expert Team</a></li>
                <li><a href="#">Contact us</a></li>
          
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-widget">
              <div className="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div className="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div className="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button><i><BsFillSendCheckFill/></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 text-center text-lg-left">
            <div className="copyright-text">
              <p>Copyright © 2023, All Right Reserved <a href="">K . Kera</a></p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div className="footer-menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer></div>

  )
}

export default Footer1