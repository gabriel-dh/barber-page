import React from 'react'
import Service1 from '../image/service-1.svg'
import Service2 from '../image/service-2.svg'
import Service3 from '../image/service-3.svg'
import Service4 from '../image/service-4.svg'
import Service5 from '../image/service-5.svg'
import '../styles/services.css'

function Services() {
  return (
    <div>
        <div className='container-services'>
            <div className='services'>
              <div className='services-title'>
                <div className='title'>Services</div>
                <div className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae diam purus eget magna.</div>
              </div>
              <div className='services-information'>
                <div className='service'>
                    <img src={Service1} alt="" />
                   <div className='service-info'>Frangance</div>
                </div>
                <div className='service'>
                    <img src={Service2} alt="" />
                    <div className='service-info'>Shaved off</div>
                </div>
                <div className='service'>
                    <img src={Service3} alt="" />
                    <div className='service-info'>Hair cut</div>
                </div>
                <div className='service'>
                    <img src={Service4} alt="" />
                    <div className='service-info'>Free wifi</div>
                </div>
                <div className='service'>
                    <img src={Service5} alt="" />
                    <div className='service-info'>Wash hair</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Services