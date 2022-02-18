import { ReactNode } from "react";

export type PageName =
  | "home"
  | "optics"
  | "night_eyeglass"
  | "pediatric_ophthalmology"
  | "adult_ophthalmology"
  | "workshop";

export type Benefit = {
  icon: StaticImageData;
  name: string;
  description?: string; 
}

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