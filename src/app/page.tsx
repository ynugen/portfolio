import { projects } from "./data/projects";

type Project = {
  main: boolean;
};

const mainProjects = projects.filter((p: Project) => p.main === true);

export default function Home() {
  return (
    <div className="page">
      <div className="title-2 page-title-container h-[var(--title-font-size)]">
        <h2>Projects</h2>
      </div>
    </div>
  );
}
