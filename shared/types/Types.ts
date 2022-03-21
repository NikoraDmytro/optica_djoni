export type Benefit = {
  icon: StaticImageData;
  name: string;
  description?: string;
};

export type Service = {
  name: string;
  clarification?: string;
};

export type Question = {
  text: string;
  answer: string;
};

export type AnchorTag = {
  name: string;
  href: string;
};
