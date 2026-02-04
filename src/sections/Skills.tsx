import SectionTitle from "../components/SectionTitle";

const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="card" style={{ padding: "2rem" }}>
    <h3 style={{ marginBottom: "1.25rem", color: "var(--accent-primary)" }}>
      {title}
    </h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
      {skills.map((skill) => (
        <span
          key={skill}
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "8px",
            background: "rgba(99, 102, 241, 0.15)",
            color: "var(--accent-primary)",
            fontSize: "0.95rem",
            fontWeight: 500,
            border: "1px solid rgba(99, 102, 241, 0.3)",
            transition: "all 0.2s ease",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section>
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies, frameworks, and tools I leverage to architect and develop scalable, production-ready software systems."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        <SkillGroup
          title="Programming Languages & Frameworks"
          skills={["JavaScript", "TypeScript", "Node.js", "React.js", "Vue.js", "Express.js"]}
        />

        <SkillGroup
          title="Web Technologies"
          skills={["HTML", "CSS", "WebSocket", "RESTful APIs", "Ionic Framework"]}
        />

        <SkillGroup
          title="Databases & Tools"
          skills={["MongoDB", "Git", "GitHub", "Version Control", "Agile Development"]}
        />

        <SkillGroup
          title="Domain Expertise"
          skills={[
            "EHR Systems",
            "Teleconsultation Platforms",
            "Health Tracking Applications",
            "Real-Time Data Processing",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
