import React from "react";
import {useNavigate} from 'react-router-dom';
import logopic from "../../assets/logo.png"
import { NavLink }
    from "./NavBarElements";

const Navbar = () => {
    const navigate = useNavigate();
    const navigateTo2001 = () => {
      // 👇️ navigate to /contacts
      navigate('/tommyandaustin');
    };
    return (
        <>
            <div className="nav_full">
                <div className="nav_left" onClick={navigateTo2001}>
                    <img className="nav-pic" src={logopic}
                        alt="logo"></img>
                    <div className="nav-text">tommyandaustin.com</div>
                </div>
                <div id="navbar">
                    <ul class="nav_links">
                        {/* <NavLink to='/about' activeStyle>
                            About
                        </NavLink> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;