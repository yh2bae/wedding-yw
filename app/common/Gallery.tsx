import { RevealWrapper } from "next-reveal";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import GalleryLightbox from "./partials/GalleryLightbox";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="bg-[url('/images/cover.jpeg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#06a1da_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-xl italic font-light text-center text-white">
            Our Gallery
          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <img
              src="/images/slider/3.jpeg"
              alt="quote"
              className="w-[170px] h-[220px] object-cover rounded-xl"
            />
            <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
              </span>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={1500}>
              <p className="text-[0.8rem] font-light leading-loose px-8 text-gray-900">
                From when I first saw you, I felt that I was finally home, all I
                want is to make your dreams come true and share our dreams
                together.
              </p>
            </RevealWrapper>
          </div>
          <GalleryLightbox />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
