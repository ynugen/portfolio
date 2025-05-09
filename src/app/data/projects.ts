export type ProjectType =
  | "product design"
  | "graphic design"
  | "software"
  | "misc";

export interface Project {
  title: string;
  date: string;
  src: string;
  alt: string;
  type: ProjectType;
  link: string;
  main: boolean;
}

export const projects: Project[] = [
  {
    title: "ReHarvest Website",
    date: "'25",
    src: `/images/ReHarvestThumbnail.png`,
    alt: "ReHarvest Website",
    type: "product design",
    link: "/design/ReHarvest",
    main: true,
  },
];
