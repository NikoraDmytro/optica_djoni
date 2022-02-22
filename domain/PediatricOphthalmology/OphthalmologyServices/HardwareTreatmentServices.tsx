import { ListOfServices } from "../../../components/ListOfServices";
import { Service } from "../../../shared/types/Types";

const services: Service[] = [
  {
    name: "ПИНА",
  },
  {
    name: "Нарушение рефракции ( дальнозоркость, близорукость, астигматизм)",
  },
  {
    name: "Амблиопия",
  },
  {
    name: "Косоглазие (с использованием синоптофора)",
  },
];

export const HardwareTreatmentServices = () => {
  return (
    <ListOfServices
      id="hardwareTreatment"
      title="Аппаратное лечение : это восстановление зрения без хирургических вмешательств."
      subTitle="Кабинет аппаратного лечения поможет справится с такими диагнозами как:"
      services={services}
      margin={40}
    />
  );
};
