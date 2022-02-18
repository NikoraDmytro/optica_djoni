import { Layout } from "../components/Layout";
import { FrequentQuestion } from "../components/FrequentQuestions";

import { Benefits } from "../components/Benefits";
import { UserComments } from "../components/UserComments";
import { PageIntroduction } from "../components/PageIntroduction";

import { OpticsPartners } from "../domain/OpticsPartners";

import glassesIcon from "../public/icons/glasses.svg";

import card from "../public/icons/card.svg";
import cycle from "../public/icons/cycle.svg";
import doctorIcon from "../public/icons/doctor.svg";

const frequentQuestions = [
  {
    text: "Чем отличаются линзы находящиеся на складе в Украине от линз , которые делают на заказ 3-4 недели?",
    answer: `Линзы, которые находятся на складах в Украине, это линзы стандартных параметров, подходящие в большинстве случаев нашим потребителям.
    Линзы, которые делаются на заказ(3-4 недели) — это линзы с вашими индивидуальными параметрами.
    Привыкание к таким линзам намного легче и в ряде случаев просто необходимы именно эти линзы, т.к параметры рецепта и анатомические параметры могут не вписываться в стандарты.`,
  },
  {
    text: "Возврат мягких контактных линз, аксессуаров к ним, растворов и увлажняющих капель.",
    answer: "Возврату не подлежит!",
  },
  {
    text: "Возврат солнцезащитных очков.",
    answer: "ВОЗВРАТУ НЕ ПОДЛЕЖИТ!!! ",
  },
  {
    text: "Возврат оправы.",
    answer: "Шиш тебе а не возврат!",
  },
  {
    text: "Можно ли поставить новые линзы в старую оправу?",
    answer: "Нет нельзя!",
  },
  {
    text: "У меня хорошее зрение и я хочу купить цветные контактные линзы. Надо ли мне проходить диагностику зрения у врача?",
    answer:
      "Конечно надо, мы никогда не упустим возможность зароботать пару лишних шекелей!",
  },
  {
    text: "Почему нельзя перенашивать контактные линзы?",
    answer: "Потому что мы потеряем доход, а вы - зрение!",
  },
];

function Optics() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/a9f6/fc2a/2ff6a2bf6f49211dd65efbfb3e5dcaf6?Expires=1646006400&Signature=cVo9VSqivb2lxxYubF3XwhYWOEEyI~eIZJNzlzTFAplLFt2PQcY478BWcM9dAiTFwkUuLr1SvpyaDAsc9D2szz6RMb3LCy0m0SGVxExT1HQD-CCBaKqzoweDu1EhiIAa7Pb4AuDQuEI-d12m9wDfTK2F5eeHnBwlNByFOnzDPYjEAmwbgULYkCGHnWU0iH-34ZxIBRyafbmiy4bPxV~xFIXxSe3Rqzu67mok2tRZ3TROTy-5OptyjUIWXLINBazuzO2y9~wcXUY8pFMpoZSuuWQX8TmAnwrWEea828XoxvzwLID2rZipCnDy~dzPTCJTKpzlf5XYIsNyN9efA-KsbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout page="optics">
      <PageIntroduction
        page="Оптика"
        pageIcon={glassesIcon}
        backgroundImageUrl={backgroundImageUrl}
        navigationLinks={[
          "Солнцезащитные очки",
          "Контактные линзы",
          "Линзы для очков",
        ]}
      />

      <Benefits
        benefits={[
          {
            icon: doctorIcon,
            name: "Cотрудники с медицинским образованием помогут вам в любых вопросах.",
          },
          {
            icon: card,
            name: "Работает программа лояльности для постоянных клиентов.",
          },
          {
            icon: cycle,
            name: "Постоянное обновление ассортимента",
          },
        ]}
      />

      <OpticsPartners />

      <UserComments />

      <FrequentQuestion questions={frequentQuestions} />
    </Layout>
  );
}

export default Optics;
