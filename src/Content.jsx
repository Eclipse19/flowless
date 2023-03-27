import React from 'react'
import '../src/Contect.css'

const Content = () => {
  return (
    <>
        <div className="info">
             <div className="map">
             <h2 className="common-heading"> Contact Us</h2>
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1300.7920324045358!2d86.19302729485194!3d22.758126121940933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1679824169003!5m2!1sen!2sin"
             width="100%"
             height="250"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
             <div className="contact-form">
         
        </div>
        </div>

    </>
  )
}

export default Content