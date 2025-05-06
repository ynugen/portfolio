export type ProjectType = "design" | "development" | "misc";

export interface Project {
  title: string;
  type: ProjectType;
  //   image: string;
  link: string;
  main: boolean;
}

export const projects: Project[] = [
  {
    title: "ReHarvest Website",
    type: "design",
    link: "/design/ReHarvest",
    main: true,
  },
];
