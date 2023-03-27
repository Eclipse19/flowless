import React from 'react'
import '../src/Mail.css'
export const Mail = () => {
  return (
    <>
        <div className="mail-container">

        <div className="contact-form">
          <form
            action="#"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              
              className="bt11"
              required
              
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              className="bt11"
              required 
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required className='text'  ></textarea>

            <input type="submit" value="send" className='btn2' />
          </form>
        </div>
      </div>
    </>
  )
}
