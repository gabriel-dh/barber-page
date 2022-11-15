import React from 'react'
import '../styles/about.css'
import Image from '../image/group.png'

function About() {
  return (
    <div>
        <div className='container-about'>
            <div className='about'>
              <div className='images'>
                <img src={Image} alt="" />
              </div>
              <div className='about-card'>
              <div className='card-background'>
              <div className='card-title'>About Us</div>
                 <div className='card-information'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur dui sed et pretium donec justo montes. Turpis placerat at sit phasellus vulputate amet. Tristique sagittis consequat enim, vitae. Egestas vivamus dictum dictum tincidunt pulvinar et aliquam iaculis. Semper nisi, sem nisi, a ullamcorper morbi fermentum.</div>
                 <div className='card-button'>
                 <button>Read More</button>
                 </div>
              </div>
              
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default About