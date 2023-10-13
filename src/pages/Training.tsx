import React from "react";
import bullet from "../assets/icons/bullet.svg";
import trainingImage from "../assets/trainingImage.svg";

const Training: React.FC = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-20 bg-black p-32">
      <h2 className=" text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>Your Grizzly Elite</span>{" "}
        <span className="text-[#F47B20]">Training Includes</span>
      </h2>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        <div className="max-w-[500px]">
          <img src={trainingImage} alt="training Image" className="w-full" />
        </div>
        <div>
          <ul className="flex flex-col items-start justify-center gap-2">
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>Lifetime access with no additional fees or subscriptions</p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>
                12 high-octane video training modules digitally
                <br /> accessible from anywhere 24/0/365.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>
                Perfectly paced with one module, under 90 minutes,
                <br /> delivered per week, consumed on your schedule.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>
                Just enough time in between each module to see
                <br /> concrete results before the next.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>Surprise bonus gifts and video mentoring sessions.</p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>
                Complete follow-along progressive downloadable manuals,
                <br />
                worksheets, diagnostics, assessments, and action guides.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <img src={bullet} alt="bullet" />
              <p>Proprietary tools, work methods, and operating systems.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Training;
