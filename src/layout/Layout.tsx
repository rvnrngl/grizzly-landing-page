import React from "react";
import Home from "../pages/Home";
import Reviews from "../pages/Reviews";
import Outcomes from "../pages/Outcomes";
import Training from "../pages/Training";
import Bonuses from "../pages/Bonuses";
import Educational from "../pages/Educational";
import Payment from "../pages/Payment";
import Community from "../pages/Community";
import Counselors from "../pages/Counselors";
import ThankYou from "../pages/ThankYou";
import FAQ from "../pages/FAQ";

const Layout: React.FC = () => {
  return (
    <main className="font-inter w-full pt-20">
      <Home />
      <Reviews />
      <Outcomes />
      <Training />
      <Bonuses />
      <Educational />
      <Reviews />
      <Payment />
      <Community />
      <Counselors />
      <Reviews />
      <ThankYou />
      <FAQ />
    </main>
  );
};

export default Layout;
