import { FrequentQuestion } from "../../../components/FrequentQuestions";

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

export const LandingPageFrequentQuestions = () => (
  <FrequentQuestion questions={frequentQuestions} />
);
