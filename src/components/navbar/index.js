import React from "react";
import {useNavigate} from 'react-router-dom';
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
                    <div className="nav-pic" src="./assets/header_logo.png"
                        alt="Bravehouse logo, with Bravehouse written inside simple drawing of house"></div>
                    <h1>tommyandaustin.com</h1>
                </div>
                <div id="navbar">
                    <ul class="nav_links">
                        {/* <NavLink to='/about' activeStyle>
                            About
                        </NavLink> */}
                    </ul>
                </div>
            </div>
            {/* <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav> */}
        </>
    );
};

export default Navbar;