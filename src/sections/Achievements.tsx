import SectionTitle from "../components/sectionTitle";

const achievements = [
  "Ranked 1st in M.Sc. Information Technology (2021–2023)",
  "Awarded 2nd Rank in National Seminar on Application of Mathematics",
  "Solved 100+ problems on LeetCode",
  "NPTEL Certified – Introduction to Web Development",
  "Coursera Certified – JavaScript & Web Development",
];

const Achievements = () => {
  return (
    <section>
      <SectionTitle
        title="Achievements & Certifications"
        subtitle="Academic excellence, competitive programming, and continuous learning."
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
        <ul style={{ paddingLeft: "20px", lineHeight: "1.9" }}>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
