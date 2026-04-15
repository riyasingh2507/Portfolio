import SectionTitle from "../components/SectionTitle";

const groups = [
  {
    title: "Frontend",
    skills: ["React.js", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "Real-time flows"],
  },
  {
    title: "Data & Tools",
    skills: ["MongoDB", "GitHub", "Agile delivery", "System integration"],
  },
  {
    title: "Platforms",
    skills: ["EHR systems", "Teleconsultation", "Ionic Framework", "Stacker"],
  },
];

const Skills = () => {
  return (
    <section>
      <SectionTitle
        title="Technical Toolkit"
        subtitle="The stack I rely on most often when building responsive interfaces, connected backend systems, and domain-specific business applications."
      />

      <div className="skills-grid">
        {groups.map((group) => (
          <div key={group.title} className="card skill-card">
            <h3>{group.title}</h3>
            <div className="badge-row">
              {group.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
