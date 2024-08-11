import { RevealWrapper } from "next-reveal";
import React, { useEffect, useState } from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import Image from "next/image";

interface CoverProps {
  onClick: () => void;
}

const Cover: React.FC<CoverProps> = ({ onClick }) => {
  const [toName, setToName] = useState("");

  useEffect(() => {
    // Dapatkan nilai dari URL params
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    // Periksa jika nilai 'to' ada di URL params
    if (toParam) {
      // Ganti '%20' dengan spasi
      const decodedToName = decodeURIComponent(toParam.replace(/\%20/g, " "));
      setToName(decodedToName);
    }
  }, []);

  return (
    <RevealWrapper>
      <section>
        <div className="min-h-screen bg-[url('/images/cover.jpeg')] bg-cover bg-center text-white relative">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
            <div>
              <p className="font-extralight text-[0.75rem]">The Wedding of</p>
              <h1 className="text-4xl font-light mt-2">Yudha & Wulan</h1>
              <p className="font-extralight text-[0.8rem] mt-4">
                Thursday, 12 September 2024
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[0.8rem]">Kepada Yth.</p>
              <br /> <h4 className="font-light text-4xl">{toName}</h4>
              <p className="text-[0.8rem]">
                Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk
                Berhadir Di Acara Pernikahan Kami.
              </p>
              <RevealWrapper duration={4000} origin="bottom">
                <button
                  onClick={onClick}
                  className="font-bold text-sm bg-[#ffffff36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
                >
                  <RxEnvelopeOpen />
                  <span>Buka Undangan</span>
                </button>
              </RevealWrapper>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
};

export default Cover;
