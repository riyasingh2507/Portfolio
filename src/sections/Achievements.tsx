import SectionTitle from "../components/sectionTitle";

const achievements = [
  "NPTEL Online Certificate",
  "Coursera: Introduction to Web Development",
  "Coursera: Interactivity with JavaScript",
  "2nd Rank in the National Seminar on Application of Mathematics",
];

const Achievements = () => {
  return (
    <section>
      <SectionTitle
        title="Certifications & Recognition"
        subtitle="A mix of academic recognition and continuous learning that supports my practical engineering work."
      />

      <div className="card achievement-card">
        {achievements.map((item) => (
          <div key={item} className="achievement-item">
            <span className="achievement-dot" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
