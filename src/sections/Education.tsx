import SectionTitle from "../components/sectionTitle";

const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "ISTAR, Charutar Vidya Mandal",
    period: "2021 - 2023",
    location: "Vallabh Vidyanagar, India",
    highlight: "Awarded 1st Rank in M.Sc. (Batch 2021-2023).",
  },
  {
    degree: "Bachelor of Science in Mathematics",
    school: "VP & RPTP Science College, Sardar Patel University",
    period: "2018 - 2021",
    location: "Vallabh Vidyanagar, India",
    highlight:
      "Awarded 2nd Rank in National Seminar on Application of Mathematics.",
  },
];

const Education = () => {
  return (
    <section>
      <SectionTitle
        title="Education"
        subtitle="A foundation that blends analytical thinking from mathematics with applied software knowledge from information technology."
      />

      <div className="two-up-grid">
        {education.map((item) => (
          <div key={item.degree} className="card">
            <p className="timeline-kicker">{item.period}</p>
            <h3>{item.degree}</h3>
            <p style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              {item.school}
            </p>
            <p style={{ marginBottom: "1rem" }}>{item.location}</p>
            <p>{item.highlight}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
