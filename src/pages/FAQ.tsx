import React from "react";
import faqImage from "../assets/faqImage.svg";
import bullet2 from "../assets/icons/bullet2.svg";
import play from "../assets/icons/play.svg";
import AccordionFaQ from "../components/AccordionFaQ";

const FAQ: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-white px-5 py-20 text-black lg:px-32">
      <h2 className="max-w-[786px] text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>30 Day Access To The OFA Challenge</span>{" "}
        <span className="text-[#F47B20]">Facebook Group</span>
      </h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* left container */}
        <div className="relative max-w-[450px]">
          <img src={faqImage} alt="faq image" className="w-full" />
          <div className="absolute left-1/2 top-1/2 flex h-[77px] w-[77px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#B21B20] pl-2">
            <img src={play} alt="play" />
          </div>
        </div>
        {/* right container */}
        <div className="flex max-w-[500px] flex-col items-start justify-center gap-5">
          <p className="text-justify text-[14px] font-medium leading-5">
            Tincidunt lectus amet scelerisque sollicitudin duis. Metus vel
            semper risus volutpat dolor turpis. Amet tortor arcu duis nec
            scelerisque enim vitae vitae. Porttitor risus enim malesuada.
          </p>
          <div className="flex items-start justify-center gap-2">
            <img src={bullet2} alt="bullet 1" />
            <p className="text-justify text-[14px] font-medium leading-5">
              A pellentesque ipsum mi a volutpat felis. Libero ultricies
              fringilla ut leo risus non morbi. Ridiculus pretium magna.
            </p>
          </div>
          <div className="flex items-start justify-center gap-2">
            <img src={bullet2} alt="bullet 2" />
            <p className="text-justify text-[14px] font-medium leading-5">
              A pellentesque ipsum mi a volutpat felis. Libero ultricies
              fringilla ut leo risus non morbi. Ridiculus pretium magna.
            </p>
          </div>
          <p className="text-justify text-[14px] font-medium leading-5">
            Tincidunt lectus amet scelerisque sollicitudin duis. Metus vel
            semper risus volutpat dolor turpis. Amet tortor arcu duis nec
            scelerisque enim vitae vitae. Porttitor risus enim malesuada.
          </p>
        </div>
      </div>
      <h2 className="max-w-[786px] py-16 text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>Frequently Asked</span>{" "}
        <span className="text-[#F47B20]">Questions</span>
      </h2>
      {/* faq */}
      <div className="flex w-full max-w-[798px] flex-col items-center justify-center gap-5">
        <AccordionFaQ text="Integer interdum orci nulla at varius" />
        <AccordionFaQ text="Amet parturient morbi eget pellentesque amet." />
        <AccordionFaQ text="Dolor leo maecenas enim fermentum aliquam mi. Dictum." />
        <AccordionFaQ text="Tristique fringilla etiam commodo nunc tortor est." />
        <AccordionFaQ text="Integer interdum orci nulla at varius" />
      </div>
    </section>
  );
};

export default FAQ;
