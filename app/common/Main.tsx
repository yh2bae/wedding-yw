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
  const [play, { stop }] = useSound("/audio/song.mp3", {
    volume: 0.25,
  });

  useEffect(() => {
    // Ini untuk menangani skenario di mana audio tidak diputar saat pengguna pertama kali berinteraksi
    const handleInteraction = () => {
      play();
      // Hapus event listener setelah audio mulai diputar untuk menghindari konflik
      document.removeEventListener("click", handleInteraction);
    };

    // Tambahkan event listener saat komponen pertama kali dirender
    document.addEventListener("click", handleInteraction);

    // Cleanup event listener ketika komponen di-unmount
    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, [play]);

  const closeModal = () => {
    setIsClose(true);
    play(); // Pastikan audio diputar ketika modal ditutup
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
        {isClose && (
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
    </main>
  );
};

export default Main;
