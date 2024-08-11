import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ImageItem from "./ImageItem";
import { imageGallery } from "@/app/constants/images";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { RevealWrapper } from "next-reveal";

const GalleryLightbox = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <>
      <div className="rounded-lg overflow-hidden mb-4">
        <RevealWrapper origin="right" duration={1500}>
          <Swiper
            className="slider relative"
            loop={true}
            spaceBetween={10}
            navigation={true}
            speed={800}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imageGallery.map((image, idx) => (
              <SwiperSlide key={`couple-intro-${idx}`}>
                <ImageItem src={image} alt={`Gallery image ${idx + 1}`} large />
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealWrapper>
      </div>
      <div className="rounded-lg overflow-hidden">
        <RevealWrapper origin="top" duration={1500}>
          <Swiper
            className="thumb"
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {imageGallery.map((image, idx) => (
              <SwiperSlide key={`couple-intro-thumb-${idx}`}>
                <ImageItem
                  src={image}
                  alt={`Thumbnail image ${idx + 1}`}
                  thumb
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealWrapper>
      </div>
    </>
  );
};

export default GalleryLightbox;
