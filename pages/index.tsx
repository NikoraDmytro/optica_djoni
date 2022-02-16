import type { NextPage } from "next";

import { Layout } from "../components/Layout";

import { OpticsStuff } from "../domain/OpticsStuff";
import { OpticsServices } from "../domain/OpticsServices";
import { FrequentQuestion } from "../components/FrequentQuestions";
import { UserComments } from "../components/UserComments/UserComments";
import { ImageSlider } from "../domain/ImageSlider";

const frequentQuestions = [
  {
    text: "Как часто нужно проверять зрение?",
    answer: `Проверка зрения у здорового человека должна проводиться раз в год в профилактических целях.
    У детей и у людей, имеющих заболевания глаз – в сроки, указанные врачом-офтальмологом.`
  },
  {
    text: "Зачем проверять зрение?",
    answer: "За шкафом!"
  },
  {
    text: "Ухудшает ли зрение ношение очков?",
    answer: "Нет, блин, улучшает!"
  }
]

const Home: NextPage = () => {
  return (
    <Layout page="home">
      <ImageSlider />

      <OpticsServices />

      <OpticsStuff />

      <UserComments />

      <FrequentQuestion questions={frequentQuestions}/>
    </Layout>
  );
};

export default Home;
