import React from "react";
import logo from "../assets/logo/grizzly-logo.svg";
import timeIcon from "../assets/icons/time.svg";
import CountdownTimer from "./CountdownTimer";

const NavBar: React.FC = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-20 w-full bg-[#B21B20] px-4 py-2 font-inter text-base font-bold shadow-lg sm:text-lg lg:text-2xl">
      <nav className="flex h-full w-full items-center justify-between md:justify-around">
        <h4 className="hidden md:block">Exclusive Invite Joe</h4>
        <img src={logo} alt="Grizzy logo" />
        <div className="flex items-center gap-2">
          <img src={timeIcon} alt="Time Icon" />
          {/* <p>12d : 12h : 43m : 05s</p> */}
          <div className="sm:w-[180px] md:w-[190px] lg:w-[250px]">
            <CountdownTimer />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
