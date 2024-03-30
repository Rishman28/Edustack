import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img' />
            <img src={play_icon} alt='' className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Welcome to Edustack University, where innovation meets education and every student's potential is realized. Established with a vision to redefine learning in the digital age, Edustack University is committed to providing a dynamic and personalized educational experience that prepares students for success in the 21st century.</p><br/>
            <p>At Edustack University, we believe in empowering our students to become lifelong learners, critical thinkers, and global citizens. With a comprehensive range of cutting-edge programs and courses spanning diverse disciplines such as technology, business, healthcare, arts, and humanities, we offer students the flexibility to tailor their education to their individual interests and career goals.</p><br/>
            <p>Join us at Edustack University and embark on a transformative educational journey that will empower you to shape your future and make a positive impact on society. Explore our website to learn more about our programs, admissions process, and campus life. We look forward to welcoming you to our vibrant community of learners and achievers!</p><br/>
        </div>
    </div>
  )
}

export default About



