import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const mainProjects = projects.filter((p: Project) => p.main === true);

export default function Home() {
  return (
    <div className="page">
      {/* <div
        className="title-2 page-title-container h-[var(--title-font-size)]"
        style={{ color: "var(--marigold)" }}
      >
        <h2>Projects</h2>
      </div> */}

      {/* List of main Projects */}
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            projectTitle={project.title}
            projectDate={project.date}
            projectType={project.type}
            src={project.src}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
