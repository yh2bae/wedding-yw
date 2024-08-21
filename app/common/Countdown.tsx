import { RevealWrapper } from "next-reveal";
import React from "react";
import CountdownComp from "./partials/CountdownComp";

export const CountdownSection = () => {
  return (
    <section>
      <div className="min-h-screen bg-[url('/images/countdown.webp')] bg-cover bg-[44.5%] text-white relative py-28 flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative py-8 px-10 w-full">
          <div
            className="bg-[#00000021] rounded-r-[3.125rem] rounded-l-[3.125rem] absolute inset-x-4 inset-y-0 z-10"
            style={{ backdropFilter: "blur(6px)" }}
          />
          <div className="relative z-20">
            <RevealWrapper duration={1500} origin="right">
              <p className="text-sm font-light">WEDDING INVITATION</p>
              <h1 className="text-3xl font-light mt-2 mb-4">Yudha & Wulan</h1>
              <div className="grid grid-cols-2 border-y border-y-white text-center text-[0.75rem] font-light">
                <p className="leading-[1.85] py-2 px-2 border-r border-r-white flex flex-col gap-2">
                  <span>SAVE THE DATE</span>
                  <span>Wednesday, 11 September 2024 </span>
                </p>
                <p className="py-2 px-2 flex flex-col gap-2">
                  <span>COUNTDOWN</span>
                  <CountdownComp />
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
