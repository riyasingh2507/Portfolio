import SectionTitle from "../components/sectionTitle";

const projects = [
  {
    title: "Teleconsultation Platform",
    desc: "Real-time doctor-patient consultation system with secure messaging and live communication.",
    tech: "Node.js, React, Socket.io",
  },
  {
    title: "Health Sync System",
    desc: "Backend service for syncing, processing, and validating health data across systems.",
    tech: "Node.js, MongoDB, APIs",
  },
  {
    title: "ERP / EHR Modules",
    desc: "Scalable ERP and EHR modules built for healthcare workflows and data compliance.",
    tech: "React, Vue.js, Node.js",
  },
];

const Projects = () => {
  return (
    <section>
      <SectionTitle
        title="Other Projects"
        subtitle="Additional systems and applications I’ve worked on in healthcare and enterprise domains."
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
            style={{
              background: "var(--bg-secondary)",
              padding: "25px",
              borderRadius: "var(--card-radius)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
            <p style={{ marginBottom: "15px" }}>{project.desc}</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
