import { ReactNode } from "react";

export type PageName =
  | "home"
  | "optics"
  | "night_eyeglass"
  | "pediatric_ophthalmology"
  | "adult_ophthalmology"
  | "workshop";

export type LayoutProps = {
  page: PageName;
  children: ReactNode;
  pageIntroduction: ReactNode;
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
}