import React from "react";
import { Heading } from "./_components/Heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col items-center justify-center dark:bg-[#2D2424]">
      <div className="flex flex-col item-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
