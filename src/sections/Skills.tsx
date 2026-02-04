import SectionTitle from "../components/sectionTitle";

const SkillGroup = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div
    style={{
      background: "var(--bg-secondary)",
      padding: "25px",
      borderRadius: "var(--card-radius)",
      border: "1px solid var(--border-color)",
    }}
  >
    <h3 style={{ marginBottom: "15px" }}>{title}</h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {skills.map((skill) => (
        <span
          key={skill}
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            background: "rgba(99,102,241,0.1)",
            color: "var(--accent-primary)",
            fontSize: "0.9rem",
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
        title="Skills"
        subtitle="Technologies and tools I use to build scalable, production-ready applications."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        <SkillGroup
          title="Frontend"
          skills={["React.js", "Vue.js", "HTML", "CSS"]}
        />

        <SkillGroup
          title="Backend"
          skills={["Node.js", "Express.js", "REST APIs", "WebSockets"]}
        />

        <SkillGroup
          title="Auth & Real-Time"
          skills={["Firebase Auth", "Social Login", "Socket.io"]}
        />

        <SkillGroup
          title="Databases & Tools"
          skills={["MongoDB", "GitHub", "TypeScript", "Ionic"]}
        />

        <SkillGroup
          title="Domain Expertise"
          skills={[
            "Health Tech",
            "Teleconsultation",
            "Wearable Data",
            "Real-Time Systems",
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
