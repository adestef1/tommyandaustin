import React from "react";
import { useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Pic from "../components/pic";
import austinhos from "../assets/hospital/austinhos.jpg"
import austinhos3 from "../assets/hospital/austinhos3.jpg"
import dadhos from "../assets/hospital/dadhos.jpg"
import dadhos2 from "../assets/hospital/dadhos2.jpg"
import denisehos2 from "../assets/hospital/denisehos2.jpg"
import tommyhos from "../assets/hospital/tommyhos.jpg"
import tommyhos2 from "../assets/hospital/tommyhos2.jpg"
import tommyhos5 from "../assets/hospital/Tommyhos5.jpg"
import tommyhos6 from "../assets/hospital/Tommyhos6.jpg"
import tommymtE from "../assets/hospital/TommymtE.jpg"
import tommymtE2 from "../assets/hospital/TommymtE2.jpg"


const Hospital = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/tommyandaustin');
  };

  const navigateToNext = () => {
    navigate('/tommyandaustin/athome');
  };

  return (
    <div>
      <div className="gal_landing_text">
        <div className="gal_landing_title">The Hospital</div>
        <div className="gal_landing_desc">Photos from when Tommy and Austin were born at Mt. Elizabeth Hospital on June 27, 2001.</div>
      </div>

      <div className="page_gallery">
        <Pic image={austinhos} capt={""} />
        <Pic image={tommyhos} capt={""} />
        <Pic image={austinhos3} capt={""} />
        <Pic image={tommyhos2} capt={""} />
        <Pic image={dadhos} capt={""} />
        <Pic image={denisehos2} capt={""} />
        <Pic image={dadhos2} capt={""} />
        <Pic image={tommyhos5} capt={""} />
        <Pic image={tommyhos6} capt={""} />
        <Pic image={tommymtE} capt={""} />
        <Pic image={tommymtE2} capt={""} />
      </div>

      <div className="b_buttons">
        <div className="b_button" onClick={navigateToHome}>Home</div>
        <div className="b_button" onClick={navigateToNext}>Next Gallery</div>
      </div>
    </div>
  );
};

export default Hospital;