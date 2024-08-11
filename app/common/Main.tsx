"use client";
import Cover from "./Cover";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import CountdownSection from "./Countdown";
import Ayat from "./Ayat";
import Profile from "./Profile";
import WeddingEvent from "./WeddingEvent";
import Wish from "./Wish";
import Gallery from "./Gallery";
import WeddingGift from "./WeddingGift";
import Footer from "./Footer";

const Main = () => {
  const [isClose, setIsClose] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [play] = useSound("/audio/wedding-song.mp3", {
    volume: 0.25,
  });

  const closeModal = () => {
    setIsLoading(true); // Mulai proses loading

    // Simulasi waktu untuk load semua komponen
    setTimeout(() => {
      setIsClose(true);
      setIsLoading(false); // Hentikan loading setelah komponen siap
      play(); // Hanya panggil audio saat modal ditutup
    }, 2000); // Gantilah durasi ini sesuai kebutuhan (misalnya, waktu loading aktual)
  };

  return (
    <main className="max-w-[500px] mx-auto">
      <div
        className={`transition-transform duration-1000 ${
          isClose
            ? "transform -translate-y-full opacity-0"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        {!isClose && <Cover onClick={closeModal} />}
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          isClose ? "opacity-100" : "opacity-0"
        }`}
      >
        {isClose && !isLoading && (
          <>
            <CountdownSection />
            <Ayat />
            <Profile />
            <WeddingEvent />
            <Gallery />
            <WeddingGift />
            <Wish />
            <Footer />
          </>
        )}
      </div>

      {isLoading && (
        <div className="fixed mx-auto inset-0 flex items-center justify-center bg-black/50 bg-opacity-75 z-50">
          <div className="text-center">
            <span className="inline-block animate-spin">Y ❤️ W</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
