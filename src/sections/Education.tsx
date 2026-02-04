import SectionTitle from "../components/SectionTitle";

const Education = () => {
  return (
    <section>
      <SectionTitle
        title="Education"
        subtitle="Academic background in Mathematics and Information Technology with consistent excellence."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div className="card" style={{ padding: "2rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>
            Master of Science: Information Technology
          </h3>
          <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
            ISTAR, Charutar Vidya Mandal
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            Vallabh Vidyanagar, India | 2021 - 2023
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <strong style={{ color: "var(--text-primary)" }}>Awarded 1st Rank</strong> in M.Sc. (Batch 2021-2023)
          </p>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "var(--accent-primary)" }}>
            Bachelor of Science: Mathematics
          </h3>
          <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.5rem" }}>
            VP & RPTP Science College, Sardar Patel University
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            Vallabh Vidyanagar, India | 2018 - 2021
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
            <strong style={{ color: "var(--text-primary)" }}>Awarded 2nd Rank</strong> in National Seminar on Application of Mathematics
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
