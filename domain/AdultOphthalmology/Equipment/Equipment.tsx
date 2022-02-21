import Image from "next/image";

import styles from "./Equipment.module.scss";

import { Slider } from "./../../../components/Slider/Slider";

import { getSliderImageProps } from "../../../utils/getSliderImage";

export const AdultOphthalmologyEquipment = () => {
  return (
    <>
      <div className={styles.EquipmentTitleBlock}>
        <h1 className={styles.title}>НОВОЕ СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h1>
      </div>

      <Slider width={1200} height={635} margin={42}>
        <Image {...getSliderImageProps("/image/optica_0.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_2.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_0.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_2.jpeg")} />
      </Slider>
    </>
  );
};
