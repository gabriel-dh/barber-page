import React from 'react'
import '../styles/contact.css'
import Photo from '../image/group2.png'

function Contact() {
  return (
    <div>
        <div className='container-contact'>
          <div className='contact'>
            <div className='contact-image'><img src={Photo} alt="" /></div>


            <div className='contact-section'>
                <div className='section-title'>
                  Contact
                </div>
                <div className='section-text'>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className='section-button'>
                    <button>Submit</button>
                </div>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Contact