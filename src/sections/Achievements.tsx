import SectionTitle from "../components/SectionTitle";

const achievements = [
  "Awarded 2nd Rank in National Seminar on Application of Mathematics — Recognized for excellence in mathematical problem-solving and algorithmic thinking",
  "NPTEL Online Certificate — Introduction to Web Development — Comprehensive understanding of modern web development principles and practices",
  "Coursera Certifications — Introduction to Web Development & Interactivity with JavaScript — Advanced proficiency in JavaScript programming and full-stack web development",
];

const Achievements = () => {
  return (
    <section>
      <SectionTitle
        title="Achievements & Certifications"
        subtitle="Recognition for technical excellence, continuous learning, and contributions to software engineering."
      />

      <div
        className="card"
        style={{
          padding: "2.5rem",
          maxWidth: "900px",
        }}
      >
        <ul style={{ paddingLeft: 0, lineHeight: "1.9" }}>
          {achievements.map((item) => (
            <li key={item} style={{ marginBottom: "1rem" }}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
