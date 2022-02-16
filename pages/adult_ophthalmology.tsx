import { Layout } from "../components/Layout";
import { PageIntroduction } from "../components/PageIntroduction";

import doctorIcon from "../public/icons/doctor.svg";

function AdultOphthalmology() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/325a/2af4/c180e2b8174e80e393e10c7653a966cb?Expires=1646006400&Signature=YBsT2y8w96Bg6MNu8PFG5klUQDBD0nCRzHwfYzgvVv0uqsWKcgQUpJoPAV8XYRr9w5fGR3K2jE6AEtTV4QBjam4PZG2SdeMwkCIxh2G91lmEuCbWa7hUuWlhlJufiYaTScg6iW4vsuwRz8Q-y9LYEqKxcH6Pl5nrmTCzPrwdYSqYgArutSPBCskXHs3ZP~97mQjv0H-BCHtIMQdSXfwpl9mvOTETwavzhYpebcB-M3ldwx4qwoosUE5EgoXLiFVaUZCPuP8~tT61IrLK2a2iVYsgcOJbFTsA484Lpzz0E-LSz3DOuHD-dSnJsaPG92VCMcyBmYST5~qRRIoLpnu-1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout
      page="adult_ophthalmology"
    >
      <PageIntroduction
          page="Оптика"
          pageIcon={doctorIcon}
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

export default AdultOphthalmology;
