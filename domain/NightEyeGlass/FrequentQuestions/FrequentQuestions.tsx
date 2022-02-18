import { FrequentQuestion } from "../../../components/FrequentQuestions";

const frequentQuestions = [
  {
    text: "Как часто нужно проверять зрение??",
    answer: `Проверка зрения у здорового человека должна проводиться раз в год в профилактических целях.
    У детей и у людей, имеющих заболевания глаз – в сроки, указанные врачом-офтальмологом.`,
  },
  {
    text: "Зачем проверять зрение?",
    answer: "Чтобы меньше врезаться в столбы!",
  },
  {
    text: "Ухудшает ли зрение ношение очков?",
    answer: "Нет, блин, улучшает!",
  },
];

export const NightEyeGlassFrequentQuestions = () => (
  <FrequentQuestion questions={frequentQuestions} />
);
