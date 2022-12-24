import React from "react";
import home_image from "../assets/home_image.jpg"
import at_home from "../assets/at_home.jpg"
import hospital from "../assets/hospital.jpg"
import china_trip from "../assets/china_trip.jpg"
import halloween_2002 from "../assets/halloween_2002.jpg"
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const navigateToHospital = () => {
        // 👇️ navigate to /contacts
        navigate('/tommyandaustin/hospital');
    };
    const navigateToAtHome = () => {
        // 👇️ navigate to /contacts
        navigate('/tommyandaustin/athome');
    };
    const navigateToChina = () => {
        // 👇️ navigate to /contacts
        navigate('/tommyandaustin/china');
    };
    const navigateToHalloween02 = () => {
        // 👇️ navigate to /contacts
        navigate('/tommyandaustin/halloween02');
    };
    return (
        <div className="App">
            <div className="landing_full">
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <div className="landing_texts">
                    <div className="landing_text">Welcome to tommyandaustin.com</div>
                    <div className="landing_text"> The Official Website of the World's Two Greatest Boys!</div>
                </div>
            </div>
            <div className="gallery_title">The Galleries</div>
            <div className="gallery">
                <div className="contain">
                    <img className="gallery_button" src={hospital} alt="my image" />
                    <div className="overlay" onClick={navigateToHospital} ><div className="overlay_text">Hospital</div></div>
                </div>
                <div className="contain">
                    <img className="gallery_button" src={at_home} alt="my image" />
                    <div className="overlay" onClick={navigateToAtHome}><div className="overlay_text">First Time Home</div></div>
                </div>
                <div className="contain">
                    <img className="gallery_button" src={china_trip} alt="my image" />
                    <div className="overlay" onClick={navigateToChina}><div className="overlay_text">China Trip</div></div>
                </div>
                <div className="contain">
                    <img className="gallery_button" src={halloween_2002} alt="my image" />
                    <div className="overlay" onClick={navigateToHalloween02}><div className="overlay_text">Halloween 2002</div></div>
                </div>
            </div>
        </div>
    );
};

export default About;