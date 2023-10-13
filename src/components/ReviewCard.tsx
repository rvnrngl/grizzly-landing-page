import React from "react";
import reviewImage from "../assets/reviewImage.svg";
import starRating from "../assets/starRating.svg";

const ReviewCard: React.FC = () => {
  return (
    <div className="flex max-w-[600px] flex-col items-center gap-5 sm:flex-row sm:items-start">
      <div className="w-[66px] flex-shrink-0">
        <img src={reviewImage} alt="review image" className="w-full" />
      </div>
      {/* detials */}
      <div className="flex flex-grow flex-col gap-2 text-center sm:text-left">
        {/* head */}
        <div className="flex flex-col justify-start">
          <h5 className="text-[22px] font-bold leading-[26.63px]">
            Wade Warren
          </h5>
          <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
            @Wade Warren . 2 days ago
          </p>
        </div>
        {/* body */}
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-medium leading-[16.94px]">
            Sociis amet etiam elementum amet enim ac tristique a. Nullam tempus
            adipiscing enim, mauris lacus tincidunt eget elit. Id ultrices.
          </p>
          <div className="max-w-[73px] self-center sm:self-start">
            <img src={starRating} alt="star rating" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
