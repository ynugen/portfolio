import { projects, Project } from ".././data/projects";
import ProjectCard from ".././components/ProjectCard";

const softwareProjects = projects.filter(
  (p: Project) => p.type[0] === "software"
);

export default function Software() {
  return (
    <div className="page">
      <div
        className="title-2 periwinkle-dropshadow page-title-container h-[var(--title-font-size)]"
        style={{ color: "var(--slate-grey)" }}
      >
        <h2>Software</h2>
      </div>

      <div className="projects-container">
        {softwareProjects.map((project) => (
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
