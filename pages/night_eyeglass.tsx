import { Layout } from "../components/Layout";
import { PageIntroduction } from "../components/PageIntroduction";

import eyeGlassIcon from "../public/icons/eyeglass.svg";

function NightEyeglass() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/ae71/b1d0/b75b4187181f973a6193670384c21566?Expires=1646006400&Signature=gp68WiOMIVoFh1mDbAHfW8Gn5zmXY-sECVkRSZ1OT0lJDAAHuDljxElzfX0mowxfQLveDj5ifHWC7Q8wyWdsnN2tD-mL-xSWYrUUsOQ5sArz-ByyPjUib5ZgzYKS-yiWN09czXu91TPVmONGH6PweMBmsiwwW2SHTGr8dKPIDtXo98aMYmHDK9PiIs4IYYLBcsiaGWnwjsEsJeaKKzd6gBKcsueQl6-j9BHzrgYgxYFqkZy7obq0o0KC7aveTC-DKILZXdIXo7fEIYinIn5SpZD7Bv8u9LJE9uh9h-d0KpbR7iUt4C6y2oeROM8eZkpkrK-2b6sFgKCFCzOcVrdelQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout
      page="night_eyeglass"
    >
      <PageIntroduction
          page="Оптика"
          pageIcon={eyeGlassIcon}
          backgroundImageUrl={backgroundImageUrl}
          navigationLinks={[
            "Солнцезащитные очки",
            "Контактные линзы",
            "Линзы для очков",
          ]}
        />
    </Layout>
  );
}

export default NightEyeglass;
