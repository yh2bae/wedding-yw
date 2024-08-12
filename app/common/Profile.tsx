import { RevealWrapper } from "next-reveal";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";

const Profile = () => {
  return (
    <section id="people">
      <div className="bg-[url('/images/profile.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16 text-gray-900">
        <RevealWrapper duration={1500}>
          <p className="text-center text-[0.75rem] leading-loose text-gray-900">
            <strong>Bismillahirrahmanirrahim</strong>
            <br />
            Assalamu'alaikum Warahmatullaahi Wabarakaatuh. Dengan memohon Rahmat
            dan Ridho Allah SWT. Kami mengharapkan kehadiran
            Bapak/Ibu/Saudara/i. pada acara Resepsi Pernikahan putra-putri kami
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-2 mt-20">
          <div></div>
          <RevealWrapper duration={1500} origin="right">
            <img
              src="/images/wulan.jpg"
              alt="Wulan"
              className="translate-x-[3rem] object-cover rounded-tl-[1.25rem] rounded-bl-[1.25rem] border-2 border-[#06a1da] border-r-0"
            />
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-3">
          <RevealWrapper duration={1500} origin="bottom">
            <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
             THE BRIDE
            </p>
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-5">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">
              Siti Wulandari, S.Kom
            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Putri dari</strong>
            <br />
            Bapak Ngatimin dan
            <br />
            Ibu Juminten
          </p>
          <a
            href="https://www.instagram.com/wulandary_04f/"
            target="_blank"
            className="text-sm text-white bg-[#06a1da] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>wulandary_04f</span>
            <HiArrowLongRight />
          </a>
        </div>
        <div className="grid grid-cols-2 mt-20">
          <RevealWrapper duration={1500} origin="left">
            <img
              src="/images/yudha.jpg"
              alt="Yudha"
              className="-translate-x-[3rem] object-cover rounded-tr-[1.25rem] rounded-br-[1.25rem] border-2 border-[#06a1da] border-l-0"
            />
          </RevealWrapper>
        </div>
        <div className="mt-3">
          <RevealWrapper duration={1500} origin="bottom">
            <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
             THE GROOM
            </p>
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-start text-left gap-6 mt-5">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">
              Subroto Yudha Harsanto, S.Kom., MCF
            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Putra dari</strong>
            <br />
            Bapak R. Santo Wasito (Alm) dan
            <br />
            Ibu Amien Propanawati
          </p>
          <a
            href="https://www.instagram.com/yh2bae/"
            target="_blank"
            className="text-sm text-white bg-[#06a1da] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>yh2bae</span>
            <HiArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
