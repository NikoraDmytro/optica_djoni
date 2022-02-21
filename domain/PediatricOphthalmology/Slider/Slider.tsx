import Image from "next/image";

import { Slider } from "../../../components/Slider";

export const PediatricOphthalmologySlider = () => {
  const getImage = (url: string) => {
    return (
      <Image
        src={url}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    );
  };

  return (
    <Slider width={1200} height={635} margin={42}>
      {getImage("/image/children.png")}
      {getImage("/image/optica_1.jpeg")}
      {getImage("/image/children.png")}
      {getImage("/image/children.png")}
      {getImage("/image/optica_1.jpeg")}
    </Slider>
  );
};
