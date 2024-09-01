import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxEnvelopeOpen } from "react-icons/rx";

interface CoverProps {
  onClick: () => void;
}

const Cover: React.FC<CoverProps> = ({ onClick }) => {
  const [toName, setToName] = useState("");

  useEffect(() => {
    // Ambil URL saat ini
    const currentUrl = window.location.href;

    // Cek apakah URL mengandung hash
    let queryString = "";
    if (currentUrl.includes("#")) {
      const hashIndex = currentUrl.indexOf("#");
      const hashPart = currentUrl.slice(hashIndex + 1); // Bagian setelah #

      // Cek apakah hash mengandung query params
      if (hashPart.includes("?")) {
        queryString = hashPart.split("?")[1]; // Ambil bagian setelah '?'
      }
    } else {
      // Jika tidak ada hash, ambil query string langsung dari URL
      queryString = window.location.search.slice(1); // Ambil bagian setelah '?'
    }

    // Jika ada query string, parse itu
    if (queryString) {
      // URLSearchParams tidak menangani '&' sebagai bagian dari nilai parameter,
      // jadi kita perlu mengganti '&' sementara dengan karakter yang tidak akan ada di URL
      const safeQueryString = queryString
        .replace(/\+/g, " ")
        .replace(/&/g, "%26");
      const urlParams = new URLSearchParams(safeQueryString);
      const toParam = urlParams.get("to");

      // Periksa jika nilai 'to' ada di URL params
      if (toParam) {
        // Decode parameter 'to' yang mungkin mengandung karakter yang di-encode
        const decodedToName = decodeURIComponent(toParam.replace(/\%20/g, " "));
        setToName(decodedToName);
      }
    }
  }, []);

  return (
    <RevealWrapper>
      <section>
        <div className="min-h-screen bg-cover bg-center text-white relative">
        <Image
          src="/images/cover.webp"
          alt="Yudha and Wulan Wedding"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={75}
          priority
        />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
            <div>
              <p className="font-extralight text-[0.75rem]">The Wedding of</p>
              <h1 className="text-4xl font-light mt-2">Yudha & Wulan</h1>
              <p className="font-extralight text-[0.8rem] mt-4">
                Wednesday, 12 September 2024
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[0.8rem]">Kepada Yth.</p>
              <br />{" "}
              <h4 className="font-light text-2xl capitalize">{toName}</h4>
              {/* <p className="text-[0.8rem]">
                Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bpk/Ibu/Sdr/i Untuk
                Menghadiri Di Acara Pernikahan Kami.
              </p> */}
              <p className="text-[0.8rem]">
                Mohon maaf apabila kami salah dalam penulisan nama dan gelar.
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
