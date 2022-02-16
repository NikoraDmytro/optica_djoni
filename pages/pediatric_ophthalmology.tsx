import { Layout } from "../components/Layout";
import { PageIntroduction } from "../components/PageIntroduction";

import pediatricOphthalmologyIcon from "../public/icons/child_ophthalmology.svg";

function PediatricOphthalmology() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/38e0/eeb3/c2789b074d20e932253e94b38f0f1acf?Expires=1646006400&Signature=R6taXSb5HxFPb7qJHeA-Vnl56fZZwnh2EOyDry3aPnTNxwt0QnAgAA~yhiHfjXfaRto7KHiKfn9KTYPxk9uOgwOAAXew6a~LNvdR0jnqNNH16yJuX4uN6yJsZE2xitMTmSNLGJZWCEJicfR4IcNFjgWOksVCBpqI57YGrZLGs1kfke5pMlKF6zMoBH51PwfWFXWMRPAJ7NvZSsV7NzaEzJdUukn27z547Su1T7R1qtMQi~X57HA-Vw7CNCYoY7g4DxhQNowmzl9xWBwS57oywXdttiwPOvBp3ph9c5F~70l3vn52d9IozKIY~ninCWumXQgmGkfx0eZdJoEKaTUrgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout
      page="pediatric_ophthalmology"
      pageIntroduction={
        <PageIntroduction
          page="Оптика"
          pageIcon={pediatricOphthalmologyIcon}
          backgroundImageUrl={backgroundImageUrl}
          navigationLinks={[
            "Солнцезащитные очки",
            "Контактные линзы",
            "Линзы для очков",
          ]}
        />
      }
    >
      <div>Hello pediatric ophthalmology!</div>
    </Layout>
  );
}

export default PediatricOphthalmology;
