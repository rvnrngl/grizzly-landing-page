import React from "react";
import star from "../assets/icons/star.svg";
import leftArrow from "../assets/icons/leftArrow.svg";
import rightArrow from "../assets/icons/rightArrow.svg";
import ReviewCard from "../components/ReviewCard";

const Reviews: React.FC = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <section className="flex h-full w-full flex-col items-center gap-10 bg-black px-20 py-32">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-5">
          <img
            src={star}
            alt="star"
            className="h-[33px] w-[33px] lg:h-[66.38px] lg:w-[66.38px]"
          />
          <img
            src={star}
            alt="star"
            className="h-[33px] w-[33px] lg:h-[66.38px] lg:w-[66.38px]"
          />
          <img
            src={star}
            alt="star"
            className="h-[33px] w-[33px] lg:h-[66.38px] lg:w-[66.38px]"
          />
          <img
            src={star}
            alt="star"
            className="h-[33px] w-[33px] lg:h-[66.38px] lg:w-[66.38px]"
          />
          <img
            src={star}
            alt="star"
            className="h-[33px] w-[33px] lg:h-[66.38px] lg:w-[66.38px]"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl font-extrabold text-[#F47B20] lg:text-[54px] lg:leading-[65.35px]">
            200+
          </h2>
          <p className="text-lg lg:text-[24px] lg:leading-[29.05px]">Reviews</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-10">
        {/* leftButton */}
        <button
          onClick={handleClick}
          className="hidden h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full bg-[#F47B20] lg:flex"
        >
          <img src={leftArrow} alt="left arrow" className="w-[5.63px]" />
        </button>
        {/* review cards container */}
        <div className="grid flex-grow grid-cols-1 place-items-center gap-2 lg:grid-cols-3">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        {/* rightButton */}
        <button
          onClick={handleClick}
          className="hidden h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-full bg-[#F47B20] lg:flex"
        >
          <img src={rightArrow} alt="right arrow" className="w-[5.63px]" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
