import { FrequentQuestion } from "../components/FrequentQuestions";
import { Layout } from "../components/Layout";
import { PageIntroduction } from "../components/PageIntroduction";
import { UserComments } from "../components/UserComments";

import workshopIcon from "../public/icons/workshop.svg";

const frequentQuestions = [
  {
    text: "Можно ли заказать в вашей мастерской изготовление очков с прогрессивными или офисными линзами??",
    answer: `Наша мастерская занимается изготовлением очков любой сложности, в том числе прогрессивных, офисных, бифокальных, астигматических и т.д.
    Все очки производятся в строгом соответствии с рецептом офтальмолога с учетом пожеланий заказчика. 
    Изготовление очков производится с применением высокоточного компьютерного оборудования.`,
  },
  {
    text: "Что делать, если изготовленные по рецепту очки мне не подошли или не понравились?",
    answer: "Купить новые, или не ныть!",
  },
];

function Workshop() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/bdb9/9168/8a35b98d2ae48bdf7b23b81759d98c0d?Expires=1646006400&Signature=NtA1fCSoZMxVqpBJAsYu1xcDLQt32KNzVTd--Dr8Oepjwk3zbjcxnoJggouQvZiJA69y3AnAktRzTl5VxICMUikEfiItbRmE8KDmB8Wdmu32STuynGAqXFnCm82oGzKaumoo-Vew5BgJBLpA-y~L6lqlfVR6z1JQgXbvoAr3spLYGJFzsQY6klGRjSAzl-pAF~jPPWBacwmoF7JubcY18EfobU3fT5RRfSLJI2kiG1dKE1j4rA3v0Q0d7AjZRkWVc0d7CkkCGwg3IOwaLSiJx~UxpbYE6H7tTdNC3ytvYIDNNhXq19b5nH2ZNqpGdl9EfBvoKPmR-cIbk2pp9YmO1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout page="workshop">
      <PageIntroduction
        page="Мастерская"
        pageIcon={workshopIcon}
        backgroundImageUrl={backgroundImageUrl}
        navigationLinks={["Наши услуги"]}
      />

      <FrequentQuestion questions={frequentQuestions} />

      <UserComments />
    </Layout>
  );
}

export default Workshop;
