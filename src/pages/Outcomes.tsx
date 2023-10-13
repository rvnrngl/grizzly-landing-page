import React from "react";
import bullet from "../assets/icons/bullet.svg";
import qoute from "../assets/icons/qoute.svg";
import dottedLines from "../assets/icons/dottedLines.svg";
import outcomeImage from "../assets/outcomesImage.svg";
import bgLines from "../assets/bgLines.svg";

const Outcomes: React.FC = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] w-full flex-col-reverse items-center justify-center gap-32 bg-black px-32 py-12 lg:flex-row">
      {/* left side */}
      <div className="flex flex-col items-start justify-center gap-4">
        <h2 className="text-[54px] font-extrabold leading-[65.35px]">
          Outcomes
        </h2>
        <ul className="flex flex-col items-start justify-center gap-2">
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>AchieveLongTermMonstrousGoals</p>
          </li>
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>
              PeaceofMindKnowingYouHaveCriticalAdvantage
              <br />
              over99.999%ofStudents
            </p>
          </li>
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>Free Time to Pursue Passions/Hobbies/ HighSchool</p>
          </li>
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>Developer Insane Laser Focus</p>
          </li>
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>Permanent Change in Thinking and Life Skills</p>
          </li>
          <li className="flex items-center gap-3">
            <img src={bullet} alt="bullet" />
            <p>Eliminate Stress and Conquer Mental Health</p>
          </li>
        </ul>
      </div>
      {/* right side */}
      <div className="z-10 flex flex-col items-start justify-center gap-5">
        <img src={outcomeImage} alt="outcome image" className="w-[423px]" />
        {/* qoute container */}
        <div className="relative flex flex-col items-start justify-start gap-4">
          <img
            src={qoute}
            alt="qoute logo"
            className="absolute -left-12 -top-4"
          />
          <h5 className="text-[20px] leading-[24.2px] text-gray-400">
            Aliquam quis tincidunt lectus, vitae aliquam
            <br />
            metus. Donec congue euismod orci nonb
            <br />
            varius. Ut convallis a mi in suscipit
          </h5>
          <img src={dottedLines} alt="dotted lines" />
        </div>
      </div>
      {/* bg line */}
      <img
        src={bgLines}
        alt="background lines"
        className="absolute -top-[40%] right-0 -z-0 w-[400px]"
      />
    </section>
  );
};

export default Outcomes;
