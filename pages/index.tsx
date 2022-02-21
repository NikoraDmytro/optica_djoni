import Image from "next/image";
import type { NextPage } from "next";

import { OpticsStuff } from "../domain/Landing/OpticsStuff";
import { OpticsServices } from "../domain/Landing/OpticsServices";
import { LandingPageFrequentQuestions } from "../domain/Landing/FrequentQuestions";

import { Layout } from "../components/Layout";
import { Slider } from "../components/Slider";
import { UserComments } from "../components/UserComments/UserComments";

import { getSliderImageProps } from "../utils/getSliderImage";

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <Slider width={914} height={635} margin={32}>
        <Image {...getSliderImageProps("/image/optica_0.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_2.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_0.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_1.jpeg")} />
        <Image {...getSliderImageProps("/image/optica_2.jpeg")} />
      </Slider>

      <OpticsServices />

      <OpticsStuff />

      <UserComments />

      <LandingPageFrequentQuestions />
    </Layout>
  );
};

export default Home;
