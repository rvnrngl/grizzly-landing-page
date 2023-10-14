import React from "react";
import logo from "../assets/logo/grizzly-logo.svg";
import timeIcon from "../assets/icons/time.svg";

const NavBar: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full bg-[#B21B20] px-4 py-2 font-inter text-lg font-bold shadow-lg lg:text-2xl">
      <nav className="flex h-full w-full items-center justify-between md:justify-around">
        <h4 className="hidden md:block">Exclusive Invite Joe</h4>
        <img src={logo} alt="Grizzy logo" />
        <div className="flex items-center gap-2">
          <img src={timeIcon} alt="Time Icon" />
          <p>12d : 12h : 43m : 05s</p>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
