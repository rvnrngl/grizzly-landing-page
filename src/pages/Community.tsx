import React from "react";
import comImage1 from "../assets/comImage1.svg";
import comImage2 from "../assets/comImage2.svg";
import comSmall1 from "../assets/comSmall1.svg";
import comSmall2 from "../assets/comSmall2.svg";
import starRating from "../assets/starRating.svg";
import play from "../assets/icons/play.svg";
import comCard1 from "../assets/comCard1.svg";
import comCard2 from "../assets/comCard2.svg";

const Community: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-32 bg-black px-5 py-12 lg:p-32">
      <h2 className="text-center text-3xl font-extrabold lg:text-[54px] lg:leading-[65.35px]">
        <span>Join an Elite</span>{" "}
        <span className="text-[#F47B20]"> Community</span>{" "}
        <span>of Winners</span>
      </h2>
      {/* first column */}
      <div className="grid grid-cols-1 items-start justify-center gap-20 lg:grid-cols-2">
        <div className="relative">
          <img src={comImage1} alt="image 1" className="w-full" />
          <div className="absolute left-1/2 top-1/2 flex h-[77px] w-[77px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#F47B20] pl-2">
            <img src={play} alt="play" />
          </div>
        </div>
        {/* left container */}
        <div className="flex flex-col items-start justify-center gap-4">
          {/* head */}
          <div className="flex items-center justify-center gap-2">
            <img src={comSmall1} alt="small 1" />
            <div className="flex flex-col justify-start">
              <h5 className="text-[22px] font-bold leading-[26.63px]">
                Sam Purcell
              </h5>
              <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
                Grade 11 Student
              </p>
            </div>
          </div>
          {/* star rating */}
          <div className="w-[73px]">
            <img src={starRating} alt="star rating" className="w-full" />
          </div>
          <p className="max-w-[400px] text-[14px] font-medium leading-7">
            "Grizzly Elite made me realize that I had this huge chasm of
            untapped potential. It was not just a minor improvement but a
            complete change of how I thought and performed. Grizzly Elite taught
            me how to differentiate what actually gives me the best results to
            succeed in my future. As an end result, I overachieved 5,000 times
            my initial goal with Grizzly Elite."
          </p>
        </div>
      </div>
      {/* second comlumn */}
      <div className="grid grid-cols-1 items-start justify-center gap-20 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-4">
          {/* head */}
          <div className="flex items-center justify-center gap-2">
            <img src={comSmall2} alt="small 2" />
            <div className="flex flex-col justify-start">
              <h5 className="text-[22px] font-bold leading-[26.63px]">
                Nahshon Weissberg
              </h5>
              <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
                Grade 10 Student
              </p>
            </div>
          </div>
          {/* star rating */}
          <div className="w-[73px]">
            <img src={starRating} alt="star rating" className="w-full" />
          </div>
          <p className="max-w-[400px] text-[14px] font-medium leading-7">
            "Participating in Joaquin Revello's Grizzly Elite program is the
            best decision I have ever made. In just the first couple of sessions
            with Joaquin, I've been able to increase my productivity 10 fold. I
            know what I'm getting is legit, and everything he gives is value. In
            fact, i'd go as far as to say that every session with him is worth
            more than the price of the entire course itself! The way I work now,
            school has basically become a side project."
          </p>
        </div>
        {/* left container */}
        <div className="relative">
          <img src={comImage2} alt="image 2" className="w-full" />
          <div className="absolute left-1/2 top-1/2 flex h-[77px] w-[77px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#B21B20] pl-2">
            <img src={play} alt="play" />
          </div>
        </div>
      </div>
      {/* community card container */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* first column */}
        <div className="flex items-center justify-start gap-3">
          <img src={comCard1} alt="card 1" />
          <div className="flex max-w-[260px] flex-col items-start justify-center gap-1">
            <p className="text-[14px] font-semibold leading-7">
              "Joaquin is an inspiration and has helped me with my studies. I
              feel more productive overall."
            </p>
            <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
              Anderson Putra Irawan - Grade 11 Student
            </p>
          </div>
        </div>
        {/* second column */}
        <div className="flex items-center justify-end gap-3">
          <img src={comCard2} alt="card 2" />
          <div className="flex max-w-[340px] flex-col items-start justify-center gap-1">
            <p className="text-[14px] font-semibold leading-7">
              "Grizzly Elite makes great content which helped me a lot in
              studying. Would absolutely recommend Joaquin as he gives great
              useful advice."
            </p>
            <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
              Shunsuke Tsutsui - Grade 10 Student
            </p>
          </div>
        </div>
      </div>
      {/* paragraph */}
      <div className="flex max-w-[1050px] flex-col items-center justify-center gap-5 text-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <h5 className="text-[22px] font-bold leading-[26.63px]">
            Gloria Mariwa
          </h5>
          <p className="text-[14px] font-medium leading-[16.94px] text-gray-400">
            Grade 11 Student
          </p>
        </div>
        <p className="text-[14px] font-medium leading-[16.94px]">
          "Joaquin really helped me a lot! My goal was to succeed in the WSC
          academic competition. In my first year of the competition, I left the
          regional round ashamed of barely qualifying for the global rounds.
          This was before I found Joaquin's productivity training and resources.
        </p>
        <p className="text-[14px] font-medium leading-[16.94px]">
          The next year I took part in the competition once again and, using
          Joaquin's resources and having his support, I managed to get 10 gold
          medals 10X results: holding the record of most medals received during
          the competition in my school. I remember leaving the competition with
          tons of pride after the positive change I made in a year's time with
          help from Joaquin! Till today I'm proud of my achievement and I thank
          Joaquin for all his help!"
        </p>
      </div>
    </section>
  );
};

export default Community;
