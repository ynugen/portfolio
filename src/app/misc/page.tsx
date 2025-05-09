import { projects, Project } from ".././data/projects";
import ProjectCard from ".././components/ProjectCard";

const miscProjects = projects.filter((p: Project) => p.type[0] === "misc");

export default function Misc() {
  return (
    <div className="page">
      <div
        className="title-2 peach-dropshadow page-title-container h-[var(--title-font-size)]"
        style={{ color: "var(--slate-grey)" }}
      >
        <h2>Miscellaneous</h2>
      </div>

      <div className="projects-container">
        {miscProjects.map((project) => (
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
