import { ImageProps } from "next/image";

export const getSliderImageProps = (url: string): ImageProps => {
  return {
    src: url,
    layout: "fill",
    objectFit: "cover",
    objectPosition: "center",
    priority: true,
  };
};
