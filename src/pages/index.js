import React from "react";
import home_image from "../assets/home_image.jpg"
import {useNavigate} from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const navigateTo2001 = () => {
      // 👇️ navigate to /contacts
      navigate('/about');
    };
    return (
        <div className="App">
            <div className="landing_full">
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <div className="landing_texts">
                    <div className="landing_text">Welcome to TommyandAustin.Com</div>
                    <div className="landing_text"> The Official Website of the World's Two Greatest Boys!</div>
                </div>
            </div>
            <div className="gallery_title">The Gallery</div>
            <div className="gallery">
                <img className="gallery_button" src={home_image} alt="my image" onClick={navigateTo2001} />
                <img className="gallery_button" src={home_image} alt="my image" onClick={navigateTo2001} />
                <img className="gallery_button" src={home_image} alt="my image" onClick={navigateTo2001} />
                <img className="gallery_button" src={home_image} alt="my image" onClick={navigateTo2001} />
            </div>
        </div>
    );
};

export default About;