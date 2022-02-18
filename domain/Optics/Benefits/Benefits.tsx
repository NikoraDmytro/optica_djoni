import { Benefits } from "../../../components/Benefits";

import card from "../../../public/icons/card.svg";
import cycle from "../../../public/icons/cycle.svg";
import doctorIcon from "../../../public/icons/doctor.svg";

export const OpticsBenefits = () => {
  return (
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
  );
};
