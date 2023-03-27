import React from 'react'
import icon1 from '../src/assite/vlcc.png'
import icon2 from '../src/assite/mamaearth.png'
import icon3 from '../src/assite/nykaa.svg'
import icon4 from '../src/assite/loreal.svg'
import icon5 from '../src/assite/unili.png'
import icon6 from '../src/assite/lotus.png'
import '../src/Brand.css'

const Brand = () => {
  return (
    <>
       <div className="brand-image">
          <img src={icon1} alt="" />
          <img src={icon2} alt=""/>
          <img src={icon6} alt=""  className='uni3'  />
          <img src={icon3} alt="" className='uni2'/>
          <img src={icon4} alt="" />
          <img src={icon5} alt=""  className='uni'/>
       </div>
    </>
  )
}

export default Brand