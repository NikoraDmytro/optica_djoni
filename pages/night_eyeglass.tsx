import { Layout } from "../components/Layout";
import { UserComments } from "../components/UserComments";
import { PageIntroduction } from "../components/PageIntroduction";

import { NightEyeGlassBenefits } from "../domain/NightEyeGlass/Benefits";
import { WhoNeedsNightEyeglass } from "../domain/NightEyeGlass/WhoNeeds";
import { NightEyeGlassCharacteristics } from "../domain/NightEyeGlass/Characteristics";
import { NightEyeGlassDescription } from "../domain/NightEyeGlass/Description/Description";
import { NightEyeGlassFrequentQuestions } from "../domain/NightEyeGlass/FrequentQuestions";

import eyeGlassIcon from "../public/icons/eyeglass.svg";

function NightEyeglass() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/ae71/b1d0/b75b4187181f973a6193670384c21566?Expires=1646006400&Signature=gp68WiOMIVoFh1mDbAHfW8Gn5zmXY-sECVkRSZ1OT0lJDAAHuDljxElzfX0mowxfQLveDj5ifHWC7Q8wyWdsnN2tD-mL-xSWYrUUsOQ5sArz-ByyPjUib5ZgzYKS-yiWN09czXu91TPVmONGH6PweMBmsiwwW2SHTGr8dKPIDtXo98aMYmHDK9PiIs4IYYLBcsiaGWnwjsEsJeaKKzd6gBKcsueQl6-j9BHzrgYgxYFqkZy7obq0o0KC7aveTC-DKILZXdIXo7fEIYinIn5SpZD7Bv8u9LJE9uh9h-d0KpbR7iUt4C6y2oeROM8eZkpkrK-2b6sFgKCFCzOcVrdelQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout page="night_eyeglass">
      <PageIntroduction
        page="Ночная контактная линза OK VISION"
        pageIcon={eyeGlassIcon}
        backgroundImageUrl={backgroundImageUrl}
        anchorTags={[
          {
            name: "Что это такое?",
            href: "#nightEyeGlassDescription",
          },
          {
            name: "Преимущество",
            href: "#nightEyeGlassBenefits",
          },
          {
            name: "Характеристики",
            href: "#nightEyeGlassCharacteristics",
          },
          {
            name: "Кому подходит",
            href: "#whoNeedsNightEyeGlass",
          },
        ]}
      />

      <NightEyeGlassDescription />

      <NightEyeGlassBenefits />

      <NightEyeGlassCharacteristics />

      <WhoNeedsNightEyeglass />

      <UserComments />

      <NightEyeGlassFrequentQuestions />
    </Layout>
  );
}

export default NightEyeglass;
