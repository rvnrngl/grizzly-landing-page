import React from "react";
import footerBg from "../assets/footerBg.svg";

const Footer: React.FC = () => {
  return (
    <footer className="select-none">
      <img
        id="footer-bg"
        src={footerBg}
        alt="footer background"
        className="w-full select-none"
      />
    </footer>
  );
};

export default Footer;
