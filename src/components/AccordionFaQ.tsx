import plus from "../assets/icons/plus.svg";

type FAQProps = {
  text: string;
};

const AccordionFaQ = ({ text }: FAQProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-md border p-5 shadow-sm">
      <h5 className="text-[22px] font-bold leading-[26.63px]">{text}</h5>
      <img src={plus} alt="plus" className=" flex-shrink-0" />
    </div>
  );
};

export default AccordionFaQ;
