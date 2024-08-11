import { RevealWrapper } from "next-reveal";
import React from "react";

const Ayat = () => {
  return (
    <section>
      <div className="bg-[url('/images/bg.png')] rounded-t-[1.25rem] bg-center bg-no-repeat bg-cover p-12 flex flex-col items-center text-center gap-8 -mt-8 z-20 relative font-light">
        <RevealWrapper duration={1500} origin="top">
          <h1 className="italic text-4xl flex gap-4 text-[#06a1da]">
            <span>Y</span>
            <span>&</span>
            <span>W</span>
          </h1>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="top">
          <p className="text-[0.75rem] leading-loose text-[#424242]">
            "Dan segala sesuatu di alam semesta telah Kami ciptakan secara
            berpasang-pasangan untuk saling melengkapi. Yang demikian ini agar
            kamu selalu mengingat kekuasaan dan kebesaran Allah"
          </p>
        </RevealWrapper>
        <RevealWrapper duration={1500} origin="bottom">
          <h3 className="italic text-lg text-black">QS Adz-Dzariyat 49</h3>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default Ayat;
