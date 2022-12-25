import React from "react";
import { useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Pic from "../components/pic";
import boys1 from "../assets/athome/3boys1.jpg"
import austin1 from "../assets/athome/Austin1.jpg"
import austin2 from "../assets/athome/Austin2.jpg"
import austin3 from "../assets/athome/Austin3.jpg"
import dadaustin from "../assets/athome/DadAustin.jpg"
import dadtom from "../assets/athome/daddybabytommy.jpg"
import dadtom2 from "../assets/athome/DadtookthisofTommy.jpg"
import momdad from "../assets/athome/denisejoey.jpg"
import nanny from "../assets/athome/grandmap2.jpg"
import shaun1 from "../assets/athome/ShaunboysII.jpg"
import shaun2 from "../assets/athome/Shaunfeeding.jpg"
import la1 from "../assets/athome/littleangels1.jpg"
import la2 from "../assets/athome/littleangels2.jpg"
import la3 from "../assets/athome/littleangels3.jpg"
import la4 from "../assets/athome/littleangels4.jpg"


const AtHome = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/tommyandaustin');
  };

  const navigateToNext = () => {
    navigate('/tommyandaustin/China');
  };

  return (
    <div>
      <div className="gal_landing_text">
        <div className="gal_landing_title">Home At Last!</div>
        <div className="gal_landing_desc">Photos from when Tommy and Austin first came home.</div>
      </div>

      <div className="page_gallery">
        <Pic image={la1} capt={""} />
        <Pic image={la2} capt={""} />
        <Pic image={la3} capt={""} />
        <Pic image={la4} capt={""} />
        <Pic image={nanny} capt={""} />
        <Pic image={shaun1} capt={""} />
        <Pic image={shaun2} capt={""} />
        <Pic image={boys1} capt={""} />
        <Pic image={dadaustin} capt={""} />
        <Pic image={dadtom} capt={""} />
        <Pic image={austin1} capt={""} />
        <Pic image={dadtom2} capt={""} />
        <Pic image={austin2} capt={""} />
        <Pic image={austin3} capt={""} />
        <Pic image={momdad} capt={""} />
      </div>

      <div className="b_buttons">
        <div className="b_button" onClick={navigateToHome}>Home</div>
        <div className="b_button" onClick={navigateToNext}>Next Gallery</div>
      </div>
    </div>
  );
};

export default AtHome;