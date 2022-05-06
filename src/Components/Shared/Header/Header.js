import React from "react";
import CustomLink from "../../../Utilities/CustomLInk/CustomLink";
import logo from "../../../logo.png";
import { Link } from "react-router-dom";
import { authButton, navButton } from "../../../Utilities/ClassName/ClassName";
const Header = () => {
  return (
    //header component

    <header id="header" className="flex justify-between my-4 items-center sticky top-0 h-20 bg-white z-40">
      {/* logo here  */}
        <Link className="flex justify-center w-1/4 " to={"/"}>
          <img className="h-full" src={logo} alt="" />
      </Link>
      
      {/* navigation here  */}
      <nav className="flex gap-2">
        <div id="home" className={navButton}>
          <CustomLink to={"/"}>Home</CustomLink>
        </div>
        <div id="services" className={navButton}>
          <CustomLink to={"/services"}>Services</CustomLink>
        </div>
        <div id="blogs" className={navButton}>
          <CustomLink to={"/blogs"}>Blogs</CustomLink>
        </div>
        <div id="about" className={navButton}>
          <CustomLink to={"/about"}>About</CustomLink>
        </div>
      </nav>

      {/* Authentication here */}
      <div className=" flex w-1/4 justify-center underline underline-offset-4">
        {/* signup here  */}
        <div className={authButton}>
          <Link to={"/register"}>SignUp</Link>
        </div>

        {/* login here  */}
        <div className={authButton}>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
