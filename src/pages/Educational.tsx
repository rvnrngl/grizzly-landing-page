import React from "react";
import lionLogo from "../assets/logo/lion.svg";
import educImage from "../assets/educationImage.svg";
import check from "../assets/icons/check.svg";
import Button from "../components/Button";

const Educational: React.FC = () => {
  const handleClick = () => {
    alert("Button Clicked!");
  };
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start gap-20 bg-black px-5 pb-10 pt-[200px] lg:px-32">
      <h2 className="text-center text-3xl font-extrabold lg:text-[54px] lg:leading-[65.35px]">
        <span>Why Don’t Other Educational Experts</span>{" "}
        <span className="text-[#F47B20]">Guarantee</span>{" "}
        <span>
          Success? Well,{" "}
          <span className="text-[#F47B20]">
            We Can.
            <br />
          </span>
          And We Will.
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex max-w-[390px] flex-col items-start justify-center gap-3">
          <p className="text-[20px] leading-[24px]">
            I Joaquin, personally guarantee your success.
          </p>
          <p>
            Grizzly guarantees to 10 fold your goals, motivation, and
            productivity. But talk is cheap. So, to back this up, I’m offering
            two separate guarantees.
          </p>
        </div>
        <img src={educImage} alt="image educ" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
        <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-md bg-[#F47B20]">
          <img src={check} alt="check icon" />
        </div>
        <div className="flex max-w-[1050px] flex-grow flex-col items-start justify-center gap-5">
          <h3 className=" text-[32px] font-bold leading-[38px]">
            30-Day Club a Grizzly Guarantee
          </h3>
          <p className="text-[20px] leading-[24px]">
            If after the first 30 days of training you don't see at least a 5x
            return on your investment if your productivity has not increased by
            AT LEAST 500% you can 'club the grizzly'—i.e., withdraw from the
            training, return your Grizzly Elite training books, and get 100% of
            your money back.
          </p>
          <p className="text-[20px] leading-[24px]">
            I'm making such a bold guarantee because I'm extremely confident
            that what Grizzly Elite has to offer is the real deal, and that
            you'll wholeheartedly agree
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:items-start">
        <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-md bg-[#F47B20]">
          <img src={check} alt="check icon" />
        </div>
        <div className="flex max-w-[1050px] flex-grow flex-col items-start justify-center gap-5">
          <h3 className=" text-[32px] font-bold leading-[38px]">
            6-Month 10X Grizzly Domination Guarantee
          </h3>
          <p className="text-[20px] leading-[24px]">
            Based on our track record and utterly unfair resources, we're so
            confident of your success that if you are, in the worst case, not on
            track to achieve 10x your wow factor with less stress and are not
            getting straight 4.0 grades across the board after six months of
            working with us given that you've applied each step/strategy and
            followed all the content, we'll give you free 1:1 training until
            you're on track to achieve your goals we benefit by getting a
            spectacular turnaround new Grizzly success story.
          </p>
          <p className="text-[20px] leading-[24px]">No questions asked.</p>
          <p className="text-[20px] leading-[24px]">
            We challenge you to test this guarantee. Take advantage of our
            insane offer! When you do, you’ll realize that it’s impossible to
            avoid success when applying our strategies.
          </p>
        </div>
      </div>
      <Button onClick={handleClick}>Apply Now</Button>
      {/* bg lion logo */}
      <img
        src={lionLogo}
        alt="lion logo"
        className="absolute -top-[7%] left-1/2 -translate-x-1/2 transform lg:-top-[10%]"
      />
    </section>
  );
};

export default Educational;
