import SectionTitle from "../components/sectionTitle";

const Experience = () => {
  return (
    <section>
      <SectionTitle
        title="Experience"
        subtitle="Hands-on experience building scalable health-tech and real-time applications in production environments."
      />

      <div
        style={{
          background: "var(--bg-secondary)",
          padding: "30px",
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border-color)",
          maxWidth: "900px",
        }}
      >
        <h3>Software Engineer — The One Technologies</h3>
        <p style={{ marginBottom: "15px", color: "var(--text-muted)" }}>
          2023 — Present
        </p>

        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>
            Built scalable <strong>ERP & EHR platforms</strong> using React,
            Vue.js, Node.js, and MongoDB.
          </li>
          <li>
            Developed <strong>real-time teleconsultation</strong> systems with
            secure audio/video and live messaging.
          </li>
          <li>
            Worked on <strong>health tracking applications</strong> handling
            continuous user data and system integrations.
          </li>
          <li>
            Collaborated with cross-functional teams in agile sprints to deliver
            production-ready features.
          </li>
          <li>
            Recognized for clean backend logic, reliability, and ownership of
            complex modules.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
