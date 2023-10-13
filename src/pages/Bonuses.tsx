import React from "react";
import BonusesCard from "../components/BonusesCard";
import shapeOne from "../assets/icons/geometryShape1.svg";
import shapeTwo from "../assets/icons/geometryShape2.svg";

const Bonuses: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-white px-5 py-20 pb-[300px] text-black lg:px-32">
      <h2 className="text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>Counselor Exclusive</span>{" "}
        <span className="text-[#F47B20]">Bonuses</span>
      </h2>
      {/* bonuses cards container */}
      <div className="flex max-w-[600px] flex-col items-center justify-center gap-5 px-4">
        <BonusesCard
          titleOne="Ivy-League"
          titleTwo="Accountability"
          paragraph="Quis duis velit augue cum nisi volutpat. Metus nunc rutrum adipiscing dui pulvinar rutrum massa egestas iaculis. Mauris mauris mattis cursus"
        />
        <BonusesCard
          titleOne="10 Ivy-League"
          titleTwo="Ful Common App"
          paragraph="At semper dolor orci facilisis magna. Vulputate quis ut nec sapien a pulvinar blandit arcu. In pharetra feugiat senectus ipsum sit id amet fermentum."
        />
        <BonusesCard
          titleOne="IB/AP Math"
          titleTwo="+ Physics Training
          + Question Bank"
          paragraph="Felis elementum aenean purus lectus iaculis nulla eu condimentum. Fusce sodales fermentum elementum sit et dis in cras vitae. "
        />
        <BonusesCard
          titleOne="Delegation"
          titleTwo="Package"
          paragraph="Posuere nascetur ullamcorper eu eget sed at elit. Imperdiet dictum velit in ullamcorper. Congue velit a eu dolor nullam eu scelerisque aliquet. Consequat."
        />
        <BonusesCard
          titleOne="Tabula +"
          titleTwo="Achievement Software"
          paragraph="Lobortis a egestas proin elit orci maecenas. Tellus auctor quam sed facilisi imperdiet et cras neque. Eu diam sed duis lacus. Bibendum iaculis commodo."
        />
      </div>
      {/* bg shapes */}
      <img
        src={shapeOne}
        alt="shape 1"
        className="absolute right-6 top-[20%] hidden lg:block"
      />
      <img
        src={shapeTwo}
        alt="shape 2"
        className="absolute bottom-[20%] left-6 hidden lg:block"
      />
    </section>
  );
};

export default Bonuses;
