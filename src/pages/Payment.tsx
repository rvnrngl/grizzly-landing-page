import React, { useState } from "react";
import Button from "../components/Button";
import PaymentCard from "../components/PaymentCard";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    alert("Button Cliked!");
  };
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-20 bg-white px-5 py-20 text-black lg:px-32">
      <h2 className=" text-center text-[54px] font-extrabold leading-[65.35px]">
        <span>Let's Begin Your</span>{" "}
        <span className="text-[#F47B20]">Training</span>
      </h2>
      {/* join now container */}
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name*"
          onChange={(e) => setName(e.target.value)}
          className="border-b-2 border-black outline-none"
        />
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email*"
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-2 border-black outline-none"
        />
        <Button onClick={handleClick}>JOIN NOW</Button>
      </div>
      {/* payment container */}
      <div className="flex min-h-[480px] w-full flex-col items-center justify-center gap-10 lg:flex-row">
        {/* left card */}
        <div className="flex h-fit max-w-[300px] flex-col items-center justify-center gap-3 rounded-md border border-[#F47B20] p-5 lg:self-end">
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <h4 className="text-[26px] font-bold leading-[31px]">
              TRY FOR 30 DAYS
            </h4>
            <p className="text-[16px] leading-[20px]">
              And receive LUDICROUS LEADERSHIP as an additional gift
            </p>
          </div>
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <h4 className=" text-[26px] font-bold leading-[31px]">
              <span className="text-[#F47B20]">$5</span> <span>Activation</span>
            </h4>
            <p className=" text-[16px] leading-[20px]">
              No commitment. Cancel anytime during 30 day open access period
            </p>
          </div>
          <Button onClick={handleClick}>30 Day free</Button>
        </div>
        {/* middle card */}
        <div className="relative flex h-fit max-w-[300px] flex-col items-center justify-center gap-3 rounded-md border border-dashed border-[#F47B20] p-5 lg:self-start">
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <p className="pt-5 text-[16px] leading-[20px]">
              And receive LUDICROUS LEADERSHIP as an additional gift
            </p>
          </div>
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <h4 className=" text-[26px] font-bold leading-[31px]">
              <span className="text-[#F47B20]">$595</span>{" "}
              <span>Activation</span>
            </h4>
            <p className=" text-[16px] leading-[20px]">
              No commitment. Cancel anytime during 30 day open access period
            </p>
          </div>
          <Button onClick={handleClick}>Start Now</Button>
          <div className="absolute -top-[20px] border border-[#F47B20] bg-white p-2 px-3">
            <h4 className="text-[26px] font-bold leading-[31px]">
              MOST POPULAR
            </h4>
          </div>
        </div>
        {/* right vard */}
        <div className="flex h-fit max-w-[300px] flex-col items-center justify-center gap-3 rounded-md border border-[#F47B20] p-5 lg:self-end">
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <h4 className=" text-[26px] font-bold leading-[31px]">
              JOIN TODAY
            </h4>
            <p className=" text-[16px] leading-[20px]">
              And receive LUDICROUS LEADERSHIP as an additional gift
            </p>
          </div>
          <div className="flex w-[230px] flex-col items-center justify-center gap-1 text-center">
            <h4 className="text-[26px] font-bold leading-[31px]">
              <span className="text-[#F47B20]">$495</span> <span>Today</span>
            </h4>
            <p className=" text-[16px] leading-[20px]">
              Then 3 additional monthly installments of $495
            </p>
          </div>
          <Button onClick={handleClick}>Get Access</Button>
        </div>
      </div>
      {/* payment details */}
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-[54px] font-extrabold leading-[65px]">Payment</h2>
        <PaymentCard />
      </div>
    </section>
  );
};

export default Payment;
