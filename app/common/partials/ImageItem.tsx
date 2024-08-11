import React from "react";

interface ImageItemProps {
  src: string;
  alt: string;
  large?: boolean;
  thumb?: boolean;
}

const ImageItem: React.FC<ImageItemProps> = ({
  src,
  alt,
  large = false,
  thumb = false,
}) => {
  return (
    <img
      className={`w-full object-cover ${
        thumb
          ? "h-32 rounded-md opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
          : large
          ? "h-96 rounded-md"
          : "rounded-md"
      }`}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default ImageItem;
