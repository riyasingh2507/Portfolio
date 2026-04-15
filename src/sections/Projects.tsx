import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "SIAP",
    desc: "Legal management system built for immigration-related case handling, including student visa, work visa, and citizenship workflows for a Germany-based use case.",
    tech: ["React.js", "Node.js", "MongoDB", "Case workflow design"],
  },
  {
    title: "Edumark Student Management System",
    desc: "Academic and administrative platform for managing student records, institutional data, and day-to-day education workflows with cleaner operational visibility.",
    tech: ["Vue.js", "Node.js", "MongoDB", "Admin workflows"],
  },
  {
    title: "Inventory Management System",
    desc: "Operational inventory solution built with Stacker to organize records, streamline workflows, and support practical inventory handling without unnecessary process friction.",
    tech: ["Stacker", "Workflow design", "Operations systems"],
  },
];

const Projects = () => {
  return (
    <section>
      <SectionTitle
        title="Selected Projects"
        subtitle="A few representative builds from my recent experience across legal, education, and operations-focused software."
      />

      <div className="three-up-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="badge-row">
              {project.tech.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
