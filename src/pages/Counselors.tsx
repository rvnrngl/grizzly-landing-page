import React from "react";
import counselorImage from "../assets/counselorImage.svg";

const Counselors: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-32 bg-black p-32 py-10">
      <h2 className="max-w-[786px] text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>What other</span>{" "}
        <span className="text-[#F47B20]">Counselors</span>{" "}
        <span>Say about this Opportunity</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <img src={counselorImage} alt="Counselor Image" />
        <div className="flex max-w-[500px] flex-col items-start justify-center gap-5">
          <h5 className="text-[22px] font-bold leading-[26.63px]">Meet Bibi</h5>
          <p className="text-[14px] leading-7">
            At my request, Joaquin Revello, hosted a virtual presentation for my
            current students in January of 2022. He is a wonderful
            results-oriented public speaker and hearing his tips and personal
            experiences, which eventually led to his success in gaining
            admission to his top choice university, were eye-opening for my
            students. These included novel frameworks, strategies, and concepts.
          </p>
          <p className="text-[14px] leading-7">
            In any given year, I work with a handful of students targeting elite
            institutions, including Ivy League universities. While ambitious, I
            still felt some were not fully living up to their potential. After
            Joaquin’s presentation, the change in the mindset and attitude of
            the students who attended his event was evident in their progress.
            The feedback I received from parents and students has been
            extraordinarily positive. The difference he has made is evidence of
            his genuine interest in the power of productivity and how
            modifications in attitude and work ethic can change lives. I
            wholeheartedly endorse Joaquin, knowing the value that he brings to
            the young people he sets out to inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Counselors;
