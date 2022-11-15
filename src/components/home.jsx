import React from 'react'
import '../styles/home.css'
import Logo from '../image/background.png'
function Home() {
  return (
    <div>
        <div className='container-home'>
            <img src={Logo} alt="" />
            <div className='background-dark'></div>
          <div className='home'>
            {/* HEADER BUTTONS */}
             <div className='home-header'>
                <button>Contact</button>
                <button>About Us</button>
                <button>Home</button>
                <button>Gallery</button>
                <button>Services</button>
             </div>
             {/* CARD */}
             
            <div className='home-card'>
             <div className='card-text first'>Smart Haircut For Mens</div>
             <div className='card-text second'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh neque tincidunt tellus vitae nibh. Urna, elit etiam proin eget neque amet iaculis. Sed vitae platea nisl, elementum lectus. In vitae mauris eu adipiscing eget tortor ut tellus.</div>
            </div>
            <div className='buttons'>
              <button>Read More</button>
              <button>View More</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home