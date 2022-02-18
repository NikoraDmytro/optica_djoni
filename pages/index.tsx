import Image from "next/image";
import type { NextPage } from "next";

import { Layout } from "../components/Layout";

import { OpticsStuff } from "../domain/Landing/OpticsStuff";
import { OpticsServices } from "../domain/Landing/OpticsServices";
import { LandingPageFrequentQuestions } from "../domain/Landing/FrequentQuestions";

import { Slider } from "../components/Slider";
import { UserComments } from "../components/UserComments/UserComments";

const Home: NextPage = () => {
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
    <Layout page="home">
      <Slider width={914} height={635} margin={32}>
        {getImage("/image/optica_0.jpeg")}
        {getImage("/image/optica_1.jpeg")}
        {getImage("/image/optica_2.jpeg")}
        {getImage("/image/optica_0.jpeg")}
        {getImage("/image/optica_1.jpeg")}
        {getImage("/image/optica_2.jpeg")}
      </Slider>

      <OpticsServices />

      <OpticsStuff />

      <UserComments />

      <LandingPageFrequentQuestions />
    </Layout>
  );
};

export default Home;
