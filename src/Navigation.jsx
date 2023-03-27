import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../src/assite/logo1.png';
import '../src/Navigation.css'



const Navigation = () => {
  
  return (
    <>
     <div className="header">
     <div className="nav-link">
            <ul>
                <li> <img src={logo} alt="" className='logo-icon' /></li>
                <li>Home</li>
                <li>Service</li>
                <li>Trending Now</li>
                <li>product</li>
                <li>contect us</li>
            </ul>
        </div>
        <div className="nav-link-right">
               <ul>
                 <li>help</li>
                 <li>Whatapp</li>
                 <li>Checkout Now</li>
               </ul>
        </div>
     </div>
      
    
    </>
  )
}

export default Navigation