import SectionTitle from "../components/sectionTitle";

const FeaturedProject = () => {
  return (
    <section>
      <SectionTitle
        title="Featured Project"
        subtitle="A production-grade health and fitness platform built around real-time wearable data and intelligent insights."
      />

      <div
        style={{
          background: "var(--bg-secondary)",
          padding: "35px",
          borderRadius: "var(--card-radius)",
          border: "1px solid var(--border-color)",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          Health & Fitness Application (Wearable Integrated)
        </h3>

        <p style={{ marginBottom: "20px", maxWidth: "900px" }}>
          A comprehensive health platform that connects with wearable devices to
          collect, process, and analyze physiological data in real time. The
          system generates insights and personalized recommendations through
          intelligent coaching logic.
        </p>

        <h4 style={{ marginBottom: "10px" }}>Health Data Handled</h4>
        <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li>Sleep & sleep stages</li>
          <li>Heart Rate (HR)</li>
          <li>Heart Rate Variability (HRV)</li>
          <li>Resting Heart Rate (RHR)</li>
          <li>Workouts & activity sessions</li>
          <li>Calories & energy expenditure</li>
        </ul>

        <h4 style={{ marginBottom: "10px" }}>Tech Stack</h4>
        <p style={{ marginBottom: "20px" }}>
          Node.js • React • Firebase (Auth & Messaging) • Socket.io • Wearable
          SDKs • Data Processing Logic
        </p>

        <h4 style={{ marginBottom: "10px" }}>Key Highlights</h4>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>Real-time syncing of wearable health data</li>
          <li>Complex sleep, recovery, and calorie calculations</li>
          <li>AI coach logic for personalized health insights</li>
          <li>Scalable backend architecture designed for high data volume</li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProject;
