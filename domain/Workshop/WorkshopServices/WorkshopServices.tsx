import { ListOfServices } from "../../../components/ListOfServices";

import { Service } from "../../../shared/types/Types";

const services: Service[] = [
  {
    name: "Вставка линз в оправу любой сложности",
  },
  {
    name: "Мойка оправы ультразвуком",
  },
  {
    name: "Тонировка линз (полная), (градиент)",
  },
  {
    name: "Замена металического заушника",
  },
  {
    name: "Замена пластикового заушника",
  },
  {
    name: "Замена гайки, винта, носоупора",
  },
  {
    name: "Высверливание винта, нарезка резьбы",
  },
  {
    name: "Ремонт обычного флекса",
  },
  {
    name: "Ремонт тонкого флекса",
  },
  {
    name: "Пайка шарнира",
  },
  {
    name: "Пайка оправы",
  },
  {
    name: "Замена верхней лески",
  },
  {
    name: "Замена нижней лески",
  },
  {
    name: "Выправка ободковой оправы ",
  },
  {
    name: "Выправка лесочной оправы",
  },
];

export const WorkShopServices = () => {
  return (
    <ListOfServices
      id="workshopServices"
      title="Какие услуги предоставляет мастерская в салоне Оптика Джони"
      services={services}
      margin={30}
    />
  );
};
