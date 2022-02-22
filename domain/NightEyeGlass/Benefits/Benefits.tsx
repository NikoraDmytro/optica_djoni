import { Benefits } from "../../../components/Benefits";

import card from "../../../public/icons/card.svg";
import cycle from "../../../public/icons/cycle.svg";
import doctorIcon from "../../../public/icons/doctor.svg";

export const NightEyeGlassBenefits = () => {
  return (
    <Benefits
      id="nightEyeGlassBenefits"
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
  );
};
