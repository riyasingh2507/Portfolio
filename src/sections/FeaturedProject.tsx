import SectionTitle from "../components/SectionTitle";

const FeaturedProject = () => {
  return (
    <section>
      <SectionTitle
        title="Featured Project"
        subtitle="A production-grade health and fitness platform leveraging real-time wearable device integration and AI-powered analytics."
      />

      <div className="card" style={{ padding: "2.5rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
          Band Sync — Wearable-Integrated Health Application
        </h3>

        <p style={{ marginBottom: "2rem", maxWidth: "900px", fontSize: "1.1rem", lineHeight: "1.9" }}>
          A comprehensive health and fitness application that processes live wearable data to deliver
          personalized health insights. The Band Sync app seamlessly integrates with wearable devices
          to collect, synchronize, and analyze physiological data streams in real-time, enabling
          users to track their health metrics and receive AI-driven coaching recommendations.
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>
            Physiological Data Processing
          </h4>
          <ul style={{ paddingLeft: 0, marginBottom: 0 }}>
            <li>Sleep architecture and sleep stage analysis</li>
            <li>Heart rate (HR) monitoring and trend analysis</li>
            <li>Heart rate variability (HRV) metrics and recovery indicators</li>
            <li>Resting heart rate (RHR) tracking and baseline calculations</li>
            <li>Workout session tracking and performance metrics</li>
            <li>Caloric expenditure and energy balance computations</li>
          </ul>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h4 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>
            Technology Stack
          </h4>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            {["React.js", "Node.js", "MongoDB", "Real-Time Technologies", "Data Synchronization Pipelines", "AI-Driven Insights", "Wearable SDKs"].map(
              (tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    background: "rgba(99, 102, 241, 0.15)",
                    color: "var(--accent-primary)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                  }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", color: "var(--text-primary)" }}>
            Key Technical Achievements
          </h4>
          <ul style={{ paddingLeft: 0, lineHeight: "1.9" }}>
            <li>
              Processing live wearable data streams including sleep patterns, heart rate (HR),
              heart rate variability (HRV), workout sessions, and caloric expenditure
            </li>
            <li>
              Implementing robust data synchronization pipelines that ensure real-time updates
              and seamless integration between wearable devices and the application backend
            </li>
            <li>
              Developing AI-driven health insights and coaching features that analyze user
              physiological data to provide personalized recommendations and actionable health
              guidance
            </li>
            <li>
              Building scalable backend architecture capable of handling high-volume concurrent
              data streams with optimized performance and reliability
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
