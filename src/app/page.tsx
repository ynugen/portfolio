import { projects, Project } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

const mainProjects = projects.filter((p: Project) => p.main === true);

export default function Home() {
  return (
    <div className="page">
      <div
        className="title-2 matcha-dropshadow page-title-container h-[var(--title-font-size)]"
        style={{ color: "var(--slate-grey)" }}
      >
        <h2>RECENT PROJECTS</h2>
      </div>

      {/* List of main Projects */}
      <div className="projects-container">
        {mainProjects.map((project) => (
          <ProjectCard
            key={project.title}
            projectLink={project.link}
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
