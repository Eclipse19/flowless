import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
     <>
        <div className="footer-bottom--section">
             <div className="container grid grid-two-column">
             <p>@{new Date().getFullYear()} FlowLess. All Rights Reserved</p>
            </div>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
     </>
  )
}

export default Footer