import SectionTitle from "../components/SectionTitle";

const Experience = () => {
  return (
    <section>
      <SectionTitle
        title="Professional Experience"
        subtitle="Building scalable healthcare technology solutions and real-time systems in production environments."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "900px" }}>
        {/* Current Position */}
        <div className="card" style={{ padding: "2.5rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>Software Engineer</h3>
            <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.25rem" }}>
              Estatic Infotech Pvt. Ltd
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Sept 2023 — Present
            </p>
          </div>

          <ul style={{ paddingLeft: 0 }}>
            <li>
              Working on healthcare and wearable-integrated applications using React.js, Node.js,
              MongoDB, and real-time technologies to deliver scalable, production-ready solutions.
            </li>
            <li>
              Developing the Band Sync health app to process live wearable data including sleep,
              heart rate, HRV, workouts, and calories, enabling comprehensive health monitoring
              and analytics.
            </li>
            <li>
              Implementing data synchronization pipelines, real-time updates, and AI-driven health
              insights and coaching features that transform raw physiological data into actionable
              recommendations.
            </li>
            <li>
              Building and supporting teleconsultation, messaging, and EHR-compliant healthcare
              modules with secure data handling and regulatory compliance.
            </li>
            <li>
              Collaborating with cross-functional teams to deliver scalable, production-ready
              solutions that meet business objectives and technical excellence standards.
            </li>
          </ul>
        </div>

        {/* Previous Position */}
        <div className="card" style={{ padding: "2.5rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem" }}>Associate Software Engineer</h3>
            <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.25rem" }}>
              The One Technologies
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Jan 2023 — Aug 2025
            </p>
          </div>

          <ul style={{ paddingLeft: 0 }}>
            <li>
              Built scalable front-end and back-end solutions in the ERP/EHR domain using
              React.js, Vue.js, Node.js, and MongoDB, delivering enterprise-grade healthcare
              applications with robust architecture and optimized performance.
            </li>
            <li>
              Developed real-time teleconsultation and health tracking features with secure
              audio/video integration, enabling seamless doctor-patient communication and
              continuous health monitoring capabilities.
            </li>
            <li>
              Led development of key projects including Health Sync, E-Port, and SIAP,
              managing end-to-end implementation from UI/UX design to server logic and
              seamless system integration.
            </li>
            <li>
              Collaborated with stakeholders and cross-functional teams in agile sprints to
              deliver EHR-compliant solutions, ensuring adherence to healthcare data standards
              and regulatory requirements.
            </li>
            <li>
              Recognized for high-quality code, system reliability, and effective teamwork,
              consistently delivering production-ready features that meet business objectives
              and technical excellence standards.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
