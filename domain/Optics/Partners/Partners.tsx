import Image from "next/image";

import { Slider } from "../../../components/Slider";
import { PartnersBlock } from "./components/PartnersBlock";

import RayBan from "./icons/ray_ban.png";
import Vogue from "./icons/vogue.png";
import Guess from "./icons/guess.png";
import Armani from "./icons/armani.png";
import Prada from "./icons/prada.png";
import Carrera from "./icons/carrera.png";
import Alcon from "./icons/alcon.png";
import BauschLomb from "./icons/bausch&lomb.png";
import CooperVision from "./icons/cooper_vision.png";
import Johnson from "./icons/johnson.png";
import OkVision from "./icons/ok_vision.png";
import Hoya from "./icons/hoya.png";
import Tokai from "./icons/tokai.png";
import Zeiss from "./icons/zeiss.png";
import Essilor from "./icons/essilor.png";
import Rodenstock from "./icons/rodenstock.png";

import styles from "./Partners.module.scss";
import { getSliderImageProps } from "../../../utils/getSliderImage";

export const OpticsPartners = () => {
  return (
    <>
      <PartnersBlock
        id="sunglasses"
        title="Мы имеем огромный выбор оправ (более 1000 моделей), контактных линз и солнцезащитных очков."
        text="Работаем с такими известными брендами как: Ray Ban, Vogue, Guess, Armani, Prada, CARRERA, Marius Morel, VALENTINE YUDASHKIN, Polaroid Guy Laroche, Enni Marco, Baldinini, Helen Rocha, Ana Hickmann, Perfrtto, Ozzie, Ben X, Swing, La Stella, Grand и другие."
        icons={[RayBan, Vogue, Guess, Armani, Prada, Carrera]}
      />

      <Slider width={1200} height={635} margin={42}>
        <Image {...getSliderImageProps("/image/vogue.jpeg")} alt="" />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} alt="" />
        <Image {...getSliderImageProps("/image/vogue.jpeg")} alt="" />
        <Image {...getSliderImageProps("/image/vogue.jpeg")} alt="" />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} alt="" />
      </Slider>

      <PartnersBlock
        id="contactLenses"
        text="По контактным линзам работаем с такими производителями как: Alcon, Bausch + Lomb, CooperVision, Johnson & Johnson, OK Vision и многие другие."
        icons={[Alcon, BauschLomb, CooperVision, Johnson, OkVision]}
      />

      <Slider width={1200} height={635} margin={42}>
        <Image {...getSliderImageProps("/image/air_optix.png")} alt="" />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} alt="" />
        <Image {...getSliderImageProps("/image/air_optix.png")} alt="" />
        <Image {...getSliderImageProps("/image/air_optix.png")} alt="" />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} alt="" />
      </Slider>

      <PartnersBlock
        id="eyeglassLenses"
        text="Работаем со всеми поставщиками линз для очков, которые представлены в Украине: Hoya, Tokai, Zeiss, Essilor, Rodenstock, Rupp & Hubrach, Divel, Le Perle и другие."
        icons={[Hoya, Tokai, Zeiss, Essilor, Rodenstock]}
      />

      <div className={styles.opticsVideo}>
        <Image
          src="/image/optics_video.png"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </>
  );
};
