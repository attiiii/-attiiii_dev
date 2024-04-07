export type Portfolio = {
  title: string;
  description: string;
  url: string;
  skills: string[];
  links?: {
    code?: string;
    design?: string;
  };
};
