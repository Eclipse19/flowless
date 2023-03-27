import React from 'react'
import '../src/Services.css'
import makeup from '../src/component/make-up.jpg'
import facemask from '../src/component/facemask.jpg'
import bleach from '../src/component/bleach.jpg'
import polic from '../src/component/polic.jpg'
import bride from '../src/component/bride.jpg'
import detan from '../src/component/detan.jpg'
import hairstyle from '../src/component/hair-style.jpg'
import haircut from '../src/component/haircut.jpg'
import hairwash from '../src/component/hairwash.jpg'
import mehndi from '../src/component/mehndi.jpg'
import menicure from '../src/component/menicure.jpg'
import pedicure from '../src/component/pedicure.jpg'
import therading from '../src/component/therading.jpg'
import wexing from '../src/component/wexing.jpg'
import stranth from '../src/component/stranth.jpg'
import massage from '../src/component/massage.jpg'

const Services = () => {
   
  return (
    <>
        <div className="container">
            <div className="gallery">
             <div className="box"  style={{backgroundImage: `url(${makeup})`}}>makeup</div>
             <div className="box"  style={{backgroundImage: `url(${facemask})`}}>facemask</div>
             <div className="box"  style={{backgroundImage: `url(${bleach})`}}>bleach</div>
             <div className="box"  style={{backgroundImage: `url(${polic})`}}>body polishing</div>
             <div className="box"  style={{backgroundImage: `url(${bride})`}}>bride</div>
             <div className="box"  style={{backgroundImage: `url(${detan})`}}>detan</div>
             <div className="box"  style={{backgroundImage: `url(${hairstyle})`}}>hair style</div>
             <div className="box"  style={{backgroundImage: `url(${haircut})`}}>haircut</div>
             <div className="box"  style={{backgroundImage: `url(${hairwash})`}}>hair Spa</div>
             <div className="box"  style={{backgroundImage: `url(${mehndi})`}}>mehndi</div>
             <div className="box"  style={{backgroundImage: `url(${menicure})`}}>menicure</div>
             <div className="box"  style={{backgroundImage: `url(${pedicure})`}}>pedicure</div>
             <div className="box"  style={{backgroundImage: `url(${wexing})`}}>wexing</div>
             <div className="box"  style={{backgroundImage: `url(${therading})`}}>therading</div>
             <div className="box"  style={{backgroundImage: `url(${stranth})`}}>stranth</div>
             <div className="box"  style={{backgroundImage: `url(${massage})`}}>massage</div>
            </div>
        </div>
    </>
  )
}

export default Services