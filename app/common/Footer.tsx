import { RevealWrapper } from "next-reveal";
import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="h-screen bg-[url('/images/slider/6.webp')]  bg-cover bg-[44.5%] text-white relative flex items-end">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative">
          <div className="bg-[linear-gradient(180deg,#FFFFFF00_0%,#06a1da_67%)] absolute inset-x-0 bottom-0 -top-60"></div>
          <div className="flex flex-col items-center text-center gap-4 text-white px-6 pb-10 z-10 relative">
          <RevealWrapper duration={1500} origin="top">
              <h1 className="text-[1.75rem] font-light">
                Thank You
              </h1>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
                Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
                kepada kami. Atas kehadiran dan doanya kami mengucapkan
                terimakasih
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="top">
              <p className="text-[0.75rem] font-light leading-relaxed">
                Wassalamualaikum Warahmatullahi Wabarakatuh
              </p>
            </RevealWrapper>
            <RevealWrapper duration={1500} origin="bottom">
              <h1 className="text-[1.75rem] font-light">Yudha & Wulan</h1>
            </RevealWrapper>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#06a1da] p-20 flex items-center justify-center">
        <img src="/images/footer/logo-final.png" alt="logo" className="w-24" />
      </div> */}
    </section>
  );
};

export default Footer;
