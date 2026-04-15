import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    title: "Full-Stack Product Delivery",
    desc: "I build features end to end, from polished interfaces to backend APIs, database design, and production integrations across business and healthcare software.",
  },
  {
    title: "Healthcare & Real-Time Systems",
    desc: "My recent work focuses on teleconsultation, EHR-aligned modules, wearable integrations, and live health data flows that need reliability, privacy, and clarity.",
  },
  {
    title: "Multi-Domain Application Work",
    desc: "Beyond healthcare, I have shipped management platforms for education, immigration case handling, and inventory operations with strong usability and maintainability.",
  },
  {
    title: "Agile Team Collaboration",
    desc: "I work closely with cross-functional teams, balancing implementation speed, code quality, and practical delivery in fast-moving sprint environments.",
  },
];

const WhatIDo = () => {
  return (
    <section>
      <SectionTitle
        title="What I Do"
        subtitle="I turn complex workflows into scalable software experiences, with a strong foundation in healthcare platforms and a versatile product engineering mindset."
      />

      <div className="three-up-grid">
        {cards.map((card) => (
          <div key={card.title} className="card feature-card">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
