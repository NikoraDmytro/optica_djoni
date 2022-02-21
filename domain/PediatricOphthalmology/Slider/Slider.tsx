import Image from "next/image";

import { Slider } from "../../../components/Slider";

import { getSliderImageProps } from "./../../../utils/getSliderImage";

export const PediatricOphthalmologySlider = () => {
  return (
    <Slider width={1200} height={635} margin={42}>
      <Image {...getSliderImageProps("/image/children.png")} />
      <Image {...getSliderImageProps("/image/optica_1.png")} />
      <Image {...getSliderImageProps("/image/children.png")} />
      <Image {...getSliderImageProps("/image/children.png")} />
      <Image {...getSliderImageProps("/image/optica_1.png")} />
    </Slider>
  );
};
