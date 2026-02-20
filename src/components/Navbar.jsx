import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 bg-black shadow z-20">
      <div>
        <img src={Logo} alt="Auto Nest Logo" className="h-10"/>
        </div>
      <ul className="flex gap-8 text-white">
         <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
              
      </ul>

    </nav>
  );
}

export default Navbar;
