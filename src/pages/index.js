import React from "react";
import home_image from "../assets/home_image.jpg"

const About = () => {
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
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
                <img className="landing_picture" src={home_image} alt="Austin and Tommy cuddle"></img>
            </div>
        </div>
    );
};

export default About;