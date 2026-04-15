import SectionTitle from "../components/sectionTitle";

const metrics = [
  "Sleep and recovery tracking",
  "Heart rate and HRV processing",
  "Workout and calorie insights",
  "Real-time sync across wearable flows",
];

const stack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "WebSocket / Real-Time",
  "Wearable integrations",
  "AI-driven insights",
];

const FeaturedProject = () => {
  return (
    <section>
      <SectionTitle
        title="Featured Work"
        subtitle="Band Sync is the strongest representation of my current product engineering work: real-time data, user-facing health features, and production-grade integration."
      />

      <div className="card feature-spotlight">
        <div className="feature-spotlight-copy">
          <p className="timeline-kicker">Band Sync</p>
          <h3>Wearable-integrated health tracking application</h3>
          <p>
            Band Sync brings live wearable data into a usable health product
            experience. I work on the application flows and backend behavior
            that turn raw metrics into synchronized dashboards, coaching inputs,
            and healthcare-ready modules.
          </p>

          <div className="badge-row">
            {stack.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="feature-spotlight-panel">
          <p className="hero-panel-label">Core capabilities</p>
          <ul>
            {metrics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
