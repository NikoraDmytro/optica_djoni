import { Layout } from "../components/Layout";
import { UserComments } from "../components/UserComments";
import { PageIntroduction } from "../components/PageIntroduction";

import { AdultOphthalmologyServices } from "../domain/AdultOphthalmology/OphthalmologyServices";
import { AdultOphthalmologyDoctorInfo } from "./../domain/AdultOphthalmology/DoctorInfo/DoctorInfo";
import { AdultOphthalmologyEquipment } from "./../domain/AdultOphthalmology/Equipment/Equipment";
import { AdultOphthalmologyFrequentQuestions } from "../domain/AdultOphthalmology/FrequentQuestions";

import doctorIcon from "../public/icons/doctor.svg";

function AdultOphthalmology() {
  const backgroundImageUrl =
    "https://s3-alpha-sig.figma.com/img/325a/2af4/c180e2b8174e80e393e10c7653a966cb?Expires=1646006400&Signature=YBsT2y8w96Bg6MNu8PFG5klUQDBD0nCRzHwfYzgvVv0uqsWKcgQUpJoPAV8XYRr9w5fGR3K2jE6AEtTV4QBjam4PZG2SdeMwkCIxh2G91lmEuCbWa7hUuWlhlJufiYaTScg6iW4vsuwRz8Q-y9LYEqKxcH6Pl5nrmTCzPrwdYSqYgArutSPBCskXHs3ZP~97mQjv0H-BCHtIMQdSXfwpl9mvOTETwavzhYpebcB-M3ldwx4qwoosUE5EgoXLiFVaUZCPuP8~tT61IrLK2a2iVYsgcOJbFTsA484Lpzz0E-LSz3DOuHD-dSnJsaPG92VCMcyBmYST5~qRRIoLpnu-1g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

  return (
    <Layout page="adult_ophthalmology">
      <PageIntroduction
        page="Взрослая офтальмология"
        pageIcon={doctorIcon}
        backgroundImageUrl={backgroundImageUrl}
        navigationLinks={["Наши услуги", "Врач"]}
      />

      <AdultOphthalmologyServices />

      <AdultOphthalmologyDoctorInfo />

      <AdultOphthalmologyEquipment />

      <AdultOphthalmologyFrequentQuestions />

      <UserComments />
    </Layout>
  );
}

export default AdultOphthalmology;
