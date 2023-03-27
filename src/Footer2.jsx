import React from 'react'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import '../src/Footer2.css'
const Footer2 = () => {
  return (
    <>

        <div className="footer-mains">
          <div className="footer-about">
            <h3>FlowLess.in</h3>
            <p>Beauty solution</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>email to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email" className='email1'
              />
              <input type="submit" value="Subscribe" className='email1 email2'/>
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-socialone">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
             
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

    </>
  )
}

export default Footer2