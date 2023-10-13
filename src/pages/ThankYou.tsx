import React from "react";
import thankImage from "../assets/thankImage.svg";
import play from "../assets/icons/play.svg";
import qoute from "../assets/icons/qoute.svg";

const ThankYou: React.FC = () => {
  return (
    <section className="flex h-full w-full flex-col items-center gap-10 bg-black px-5 py-12 lg:p-32">
      <h2 className="max-w-[786px] text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>Your Student's Parents Will</span>{" "}
        <span className="text-[#F47B20]">Thank You!</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* left container */}
        <div className="relative max-w-[450px]">
          <img src={thankImage} alt="image 1" className="w-full" />
          <div className="absolute left-1/2 top-1/2 flex h-[77px] w-[77px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#B21B20] pl-2">
            <img src={play} alt="play" />
          </div>
        </div>
        {/* right container */}
        <div className="flex max-w-[500px] flex-col items-start justify-center gap-5">
          <img src={qoute} alt="qoute" />
          {/* head */}
          <h5 className="text-[22px] font-bold leading-[26.63px]">
            There's now a fire in them. Their eyes are sparkling.
          </h5>
          {/* star rating */}
          <p className="text-[14px] font-medium leading-5">
            My name is Mye, and I am a mother of four. My kids are now happy.
            Like truly joyful. As high schoolers! You don't see that anywhere.
            They just transformed into different human beings in just a few
            weeks. My husband even noticed the change and wondered what had
            happened to them. The Grizzly Elite program has, undoubtedly, been
            the best decision we've ever made. I now go to sleep in peace as I
            know they are in good hands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
