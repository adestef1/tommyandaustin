import React from "react";
import { useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Pic from "../components/pic";
import achill from "../assets/china/austinchills.jpg"
import agg from "../assets/china/austingugong.jpg"
import boysforb from "../assets/china/boysforbidden.jpg"
import famgreatwall from "../assets/china/familygreatwall.jpg"
import fammao from "../assets/china/familymao.jpg"
import famtemp from "../assets/china/familytemple1.jpg"
import forbidden from "../assets/china/forbidden.jpg"
import forbidden2 from "../assets/china/forbiddenattraction.jpg"
import forbidden3 from "../assets/china/forbiddenboys.jpg"
import greatwall from "../assets/china/greatwall.jpg"
import joeymom from "../assets/china/joeymomwangfujin.jpg"
import mdmao from "../assets/china/momdadmao.jpg"
import paul from "../assets/china/pAULCHINA.jpg"
import tireddad from "../assets/china/tireddad.jpg"
import street from "../assets/china/wangfunjinstreet.jpg"


const China = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/tommyandaustin');
  };

  const navigateToNext = () => {
    navigate('/tommyandaustin/halloween02');
  };

  return (
    <div>
      <div className="gal_landing_text">
        <div className="gal_landing_title">China Trip</div>
        <div className="gal_landing_desc">Tommy and Austin go to China with mom, dad, nanny, popop, and Paul!</div>
      </div>

      <div className="page_gallery">
        <Pic image={famgreatwall} capt={""} />
        <Pic image={fammao} capt={""} />
        <Pic image={famtemp} capt={""} />
        <Pic image={agg} capt={""} />
        <Pic image={forbidden} capt={""} />
        <Pic image={forbidden2} capt={""} />
        <Pic image={forbidden3} capt={""} />
        <Pic image={greatwall} capt={""} />
        <Pic image={achill} capt={""} />
        <Pic image={boysforb} capt={""} />
        <Pic image={joeymom} capt={""} />
        <Pic image={mdmao} capt={""} />
        <Pic image={paul} capt={""} />
        <Pic image={tireddad} capt={""} />
        <Pic image={street} capt={""} />
      </div>

      <div className="b_buttons">
        <div className="b_button" onClick={navigateToHome}>Home</div>
        <div className="b_button" onClick={navigateToNext}>Next Gallery</div>
      </div>
    </div>
  );
};

export default China;