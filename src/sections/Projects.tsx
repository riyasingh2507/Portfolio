import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Health Sync",
    desc: "Comprehensive health data synchronization system enabling seamless integration and real-time processing of health information across multiple platforms. Built with robust backend architecture and secure data handling protocols.",
    tech: "Node.js, React.js, MongoDB, WebSocket",
  },
  {
    title: "E-Port",
    desc: "Enterprise portal solution designed for healthcare workflows, featuring intuitive UI/UX, secure authentication, and efficient data management. Delivers seamless user experience with optimized performance and scalability.",
    tech: "Vue.js, Node.js, Express.js, MongoDB",
  },
  {
    title: "SIAP",
    desc: "Scalable healthcare application platform with comprehensive EHR capabilities, real-time features, and secure system integration. Built to handle complex healthcare workflows with high reliability and compliance standards.",
    tech: "React.js, Node.js, MongoDB, TypeScript",
  },
];

const Projects = () => {
  return (
    <section>
      <SectionTitle
        title="Additional Projects"
        subtitle="A collection of production-ready healthcare technology solutions and enterprise applications."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="card"
            style={{
              padding: "2rem",
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
              {project.title}
            </h3>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.8" }}>{project.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech.split(", ").map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.4rem 0.8rem",
                    borderRadius: "6px",
                    background: "rgba(99, 102, 241, 0.1)",
                    color: "var(--accent-primary)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
