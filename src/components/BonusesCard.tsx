import bonusImage from "../assets/bonusImage.svg";

type BonusCardProps = {
  titleOne: string;
  titleTwo: string;
  paragraph: string;
};

const BonusesCard = ({ titleOne, titleTwo, paragraph }: BonusCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 shadow-xl lg:flex-row">
      <div className="px-10">
        <img src={bonusImage} alt="bonus Image" className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:text-left">
        <h4 className="w-full text-[24px] font-bold leading-[29.05px]">
          <span className="text-[#F47B20]">{titleOne}</span>{" "}
          <span>{titleTwo}</span>
        </h4>
        <p className="w-full text-[20px] leading-[24px]">{paragraph}</p>
      </div>
    </div>
  );
};

export default BonusesCard;
