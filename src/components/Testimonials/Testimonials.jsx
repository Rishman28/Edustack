import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt='' />
                            <div>
                            <h3>Rishabh Bhatt</h3>
                            <span>Edustack, India</span>
                            </div>
                        </div>
                        <p>"Attending Edustack University has been a transformative journey for me. The professors are not only experts in their fields but also passionate about imparting knowledge. The campus environment fosters creativity and critical thinking, encouraging students to excel in their chosen fields. I've had the opportunity to participate in various extracurricular activities, which have helped me develop leadership skills and build lasting friendships. I'm proud to be a part of the Edustack community and grateful for the endless opportunities it has provided me."</p>
                    </div>
                </li>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt='' />
                            <div>
                            <h3>Rishman Warner</h3>
                            <span>Edustack, USA</span>
                            </div>
                        </div>
                        <p>
"Studying at Edustack University has been an enriching experience for me. The faculty members are incredibly knowledgeable and dedicated to ensuring that every student succeeds. The curriculum is comprehensive, providing a solid foundation for my future career. Additionally, the university's emphasis on practical learning through internships and industry projects has been invaluable in preparing me for the real world. I'm grateful for the opportunities I've had at Edustack University and would highly recommend it to anyone seeking a top-notch education."</p>
                    </div>
                </li>
                <li>
                <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt='' />
                            <div>
                            <h3>Rishi Sunak</h3>
                            <span>Edustack, UK</span>
                            </div>
                        </div>
                        <p>"Choosing Edustack University was one of the best decisions I've ever made. The quality of education here is unparalleled, with a curriculum that is both challenging and rewarding. The university's commitment to student success is evident in the personalized support and mentorship provided by faculty members. Through internships and industry partnerships, I've gained practical experience that will undoubtedly benefit me in my future career. Edustack has truly prepared me to thrive in today's competitive job market."</p>
                    </div>
                </li>
                <li>
                <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt='' />
                            <div>
                            <h3>Rishu Nobi</h3>
                            <span>Edustack, Japan</span>
                            </div>
                        </div>
                        <p>"Edustack University has exceeded all my expectations. The academic programs are innovative and constantly updated to reflect the latest industry trends. Beyond academics, the university offers a vibrant campus life with numerous clubs and organizations catering to diverse interests. The sense of community at Edustack is remarkable, with students and faculty alike fostering a supportive and inclusive environment. I'm grateful for the skills and friendships I've gained during my time here, and I know that the education I've received will serve me well in my future endeavors."</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Testimonials




