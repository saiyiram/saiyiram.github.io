import type { IconType } from "react-icons";

export interface Project {
  id: number;
  title: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: IconType;
}
