import config from "../../../next.config.js";

export type ProjectType = "design" | "development" | "misc";

const basePath = config.basePath;
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
    src: `${basePath}/images/ReHarvestThumbnail.png`,
    alt: "ReHarvest Website",
    type: "design",
    link: "/design/ReHarvest",
    main: true,
  },
];
