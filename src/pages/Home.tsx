import React from "react";
import manImage from "../assets/man-home.svg";
import Button from "../components/Button";

const Home: React.FC = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };
  return (
    <section className="flex min-h-[calc(100vh-80px)] w-full flex-col-reverse items-center justify-center gap-10 bg-black px-32 py-10 lg:flex-row lg:py-0">
      <div className="max-w-[400px] overflow-hidden">
        <img src={manImage} alt="man" className="w-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-3xl font-extrabold lg:text-[54px] lg:leading-[65.35px]">
            Congratulations!
          </h2>
          <p className="text-2xl lg:text-[32px] lg:leading-[38.73px]">
            You’ve been accept to Grizzly Elite{" "}
          </p>
          <h1 className="text-4xl font-black underline decoration-[#F7941D] underline-offset-[10px] lg:text-[64px] lg:leading-[77.45px]">
            March 1st
          </h1>
        </div>
        <Button onClick={handleClick}>START NOW</Button>
      </div>
    </section>
  );
};

export default Home;
