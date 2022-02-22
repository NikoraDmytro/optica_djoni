import { ReactNode } from "react";
import { AnchorTag, Benefit, PageName, Question, Service } from "./Types";

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
  anchorTags: AnchorTag[];
};

export type SliderProps = {
  width: number;
  height: number;
  margin: number;
  children: ReactNode[];
  sideContent?: ReactNode;
};

export type BenefitsProps = {
  id?: string;
  blockTitle?: string;
  benefits: Benefit[];
};

export type ListOfServicesProps = {
  id?: string;
  title: string;
  margin: number;
  subTitle?: string;
  services: Service[];
};

export type FrequentQuestionProps = {
  questions: Question[];
};
