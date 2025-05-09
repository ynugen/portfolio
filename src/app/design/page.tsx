import { projects, Project } from ".././data/projects";
import ProjectCard from ".././components/ProjectCard";

const designProjects = projects.filter((p: Project) =>
  p.type[0].includes("design")
);

export default function Design() {
  return (
    <div className="page">
      <div
        className="title-2 lavender-dropshadow page-title-container h-[var(--title-font-size)]"
        style={{ color: "var(--slate-grey)" }}
      >
        <h2>Design</h2>
      </div>

      <div className="projects-container">
        {designProjects.map((project) => (
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
