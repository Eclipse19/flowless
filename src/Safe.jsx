import React from 'react'
import '../src/Safe.css'
import icon8 from '../src/assite/location.png'
import icon9 from '../src/assite/money.png'
import icon10 from '../src/assite/pay.png'

const Safe = () => {
  return (
    <>
      <div className="section_freature">
      <div className="home-sarvice">
        <img src={icon8} alt=""  className='icons'/>
            <h2>home sarvice</h2>
            <p>Lorem ipsum dolor sit amet <br />
             consectetur, adipisicing elit. Dolores, suscipit.</p>
        </div>
        <div className="money-back">
        <img src={icon9} alt="" className='icons'/>
            <h2>100% money back</h2>
            <p>Lorem ipsum dolor sit amet <br />
             consectetur, adipisicing elit. Dolores, suscipit.</p>
        </div>
        <div className="secure-payment">
        <img src={icon10} alt="" className='icons' />
            <h2>secure payment</h2>
            <p>Lorem ipsum dolor sit amet <br />
             consectetur, adipisicing elit. Dolores, suscipit.</p>
        </div>
      </div>
    </>
  )
}

export default Safe