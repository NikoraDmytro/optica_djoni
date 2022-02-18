import { Layout } from "../components/Layout";

import { UserComments } from "../components/UserComments";
import { PageIntroduction } from "../components/PageIntroduction";

import { OpticsPartners } from "../domain/Optics/Partners";
import { OpticsBenefits } from "../domain/Optics/Benefits";
import { OpticsFrequentQuestions } from "../domain/Optics/FrequentQuestions";

import glassesIcon from "../public/icons/glasses.svg";

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

      <OpticsBenefits />

      <OpticsPartners />

      <UserComments />

      <OpticsFrequentQuestions />
    </Layout>
  );
}

export default Optics;
