import { Layout } from "../components/Layout";
import { Benefits } from "../components/Benefits";
import { UserComments } from "../components/UserComments";
import { PageIntroduction } from "../components/PageIntroduction";
import { FrequentQuestion } from "../components/FrequentQuestions";

import { NightEyeGlassDescription } from "../domain/NightEyeGlassDescription/NightEyeGlassDescription";

import eyeGlassIcon from "../public/icons/eyeglass.svg";

import card from "../public/icons/card.svg";
import cycle from "../public/icons/cycle.svg";
import doctorIcon from "../public/icons/doctor.svg";

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

function NightEyeglass() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/ae71/b1d0/b75b4187181f973a6193670384c21566?Expires=1646006400&Signature=gp68WiOMIVoFh1mDbAHfW8Gn5zmXY-sECVkRSZ1OT0lJDAAHuDljxElzfX0mowxfQLveDj5ifHWC7Q8wyWdsnN2tD-mL-xSWYrUUsOQ5sArz-ByyPjUib5ZgzYKS-yiWN09czXu91TPVmONGH6PweMBmsiwwW2SHTGr8dKPIDtXo98aMYmHDK9PiIs4IYYLBcsiaGWnwjsEsJeaKKzd6gBKcsueQl6-j9BHzrgYgxYFqkZy7obq0o0KC7aveTC-DKILZXdIXo7fEIYinIn5SpZD7Bv8u9LJE9uh9h-d0KpbR7iUt4C6y2oeROM8eZkpkrK-2b6sFgKCFCzOcVrdelQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout page="night_eyeglass">
      <PageIntroduction
        page="Ночная контактная линза OK VISION"
        pageIcon={eyeGlassIcon}
        backgroundImageUrl={backgroundImageUrl}
        navigationLinks={[
          "Что это такое?",
          "Преимущество",
          "Характеристики",
          "Кому подходит",
        ]}
      />

      <NightEyeGlassDescription />

      <Benefits
        blockTitle="ПРЕИМУЩЕСТВА"
        benefits={[
          {
            icon: doctorIcon,
            name: "Плазменная обработка поверхности",
            description: `Все ортокератологические линзы проходят плазменную обработку поверхности, 
            обеспечивающую повышенный комфорт для пациентов за счёт повышения гидрофильности линзы.`,
          },
          {
            icon: card,
            name: "Индивидуальное проектирование",
            description: `Возможно изготовление абсолютно любой линзы с индивидуально рассчитанными параметрами глаза пациента. 
            Идеальное решение при высоких степенях нарушения рефракций.`,
          },
          {
            icon: cycle,
            name: "Замедление прогрессирования миопии",
            description: `У детей и подростков. Ночные линзы включены в 
            "Федеральные клинические рекомендации по диагностике и лечению близорукости у детей".`,
          },
        ]}
      />

      <UserComments />

      <FrequentQuestion questions={frequentQuestions} />
    </Layout>
  );
}

export default NightEyeglass;
