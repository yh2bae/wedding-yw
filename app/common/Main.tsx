"use client";
import Cover from "./Cover";
import { useState } from "react";
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
  const [play] = useSound("/audio/song.mp3", {
    volume: 0.25,
  });
  const closeModal = () => {
    setIsClose(true);
    play();
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
