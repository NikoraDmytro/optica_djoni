import Image from "next/image";
import type { NextPage } from "next";

import { Layout } from "../components/Layout";

import { OpticsStuff } from "../domain/OpticsStuff";
import { OpticsServices } from "../domain/OpticsServices";

import { Slider } from "../components/Slider";
import { FrequentQuestion } from "../components/FrequentQuestions";
import { UserComments } from "../components/UserComments/UserComments";

const frequentQuestions = [
  {
    text: "Как часто нужно проверять зрение?",
    answer: `Проверка зрения у здорового человека должна проводиться раз в год в профилактических целях.
    У детей и у людей, имеющих заболевания глаз – в сроки, указанные врачом-офтальмологом.`,
  },
  {
    text: "Зачем проверять зрение?",
    answer: "За шкафом!",
  },
  {
    text: "Ухудшает ли зрение ношение очков?",
    answer: "Нет, блин, улучшает!",
  },
];

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

      <FrequentQuestion questions={frequentQuestions} />
    </Layout>
  );
};

export default Home;
