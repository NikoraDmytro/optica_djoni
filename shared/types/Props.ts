import { ReactNode } from "react";
import { Benefit, PageName, Service } from "./Types";

export type LayoutProps = {
  page: PageName;
  children: ReactNode;
};

export type NavBarProps = {
  currentPage: PageName;
  orientation: "horizontal" | "vertical";
};

export type PageIntroductionProps = {
  page: string;
  pageIcon: StaticImageData;
  backgroundImageUrl: string;
  navigationLinks: string[];
};

export type SliderProps = {
  width: number;
  height: number;
  margin: number;
  children: ReactNode[];
  sideContent?: ReactNode;
};

export type BenefitsProps = {
  blockTitle?: string;
  benefits: Benefit[];
}

export type ListOfServicesProps = {
  title: string;
  margin: number;
  subTitle?: string;
  services: Service[];
}