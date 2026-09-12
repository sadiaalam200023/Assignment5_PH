import React from 'react';
import Logo from "../assets/logo-text.png";
const Nav = () => {
    return (
        
        <nav className=" bg-white px-10 mt-6 mb-4 sticky top-0 z-50"> 
          <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="" />

        <ul className="flex gap-4 items-center">
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>Sign In</button>
        <button>Explore</button> </div>
      </nav>
        
    );
};

export default Nav;