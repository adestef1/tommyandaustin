import React from "react";
import { useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Pic from "../components/pic";
import advamp from "../assets/halloween02/austindaddyvamp.jpg"
import austinplay from "../assets/halloween02/austinplay.jpg"
import halloween1 from "../assets/halloween02/hallo3.jpg"
import halloween2 from "../assets/halloween02/halloween.jpg"
import halloween3 from "../assets/halloween02/halloween2.jpg"
import patch from "../assets/halloween02/pumpkinpatch.jpg"
import patch2 from "../assets/halloween02/pumpkinpatch2.jpg"
import tommyplay from "../assets/halloween02/tommyplay.jpg"


const Halloween02 = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/tommyandaustin');
  };

  const navigateToNext = () => {
    navigate('/tommyandaustin/hospital');
  };

  return (
    <div>
      <div className="gal_landing_text">
        <div className="gal_landing_title">Haunted Halloween 2002!</div>
        <div className="gal_landing_desc">Tommy and Austin dressed up as Vampires!</div>
      </div>

      <div className="page_gallery">
        <Pic image={halloween1} capt={""} />
        <Pic image={halloween2} capt={""} />
        <Pic image={halloween3} capt={""} />
        <Pic image={advamp} capt={""} />
        <Pic image={austinplay} capt={""} />
        <Pic image={tommyplay} capt={""} />
        <Pic image={patch} capt={""} />
        <Pic image={patch2} capt={""} />
      </div>

      <div className="b_buttons">
        <div className="b_button" onClick={navigateToHome}>Home</div>
        <div className="b_button" onClick={navigateToNext}>Next Gallery</div>
      </div>
    </div>
  );
};

export default Halloween02;