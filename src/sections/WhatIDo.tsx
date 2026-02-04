import SectionTitle from "../components/sectionTitle";

const cards = [
  {
    title: "Health Tech Development",
    desc: "Built EHR, health tracking, and wearable-integrated applications handling live physiological data.",
  },
  {
    title: "Backend & APIs",
    desc: "Designed scalable Node.js backends, REST APIs, and complex data-processing logic.",
  },
  {
    title: "Real-Time Systems",
    desc: "Implemented Socket.io & WebSockets for live health data, messaging, and teleconsultation.",
  },
  {
    title: "Smart Features",
    desc: "Working on AI coach logic, insights generation, and personalized health recommendations.",
  },
];

const WhatIDo = () => {
  return (
    <section>
      <SectionTitle
        title="What I Do"
        subtitle="I specialize in building production-ready systems with a strong focus on health-tech and real-time data."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "var(--bg-secondary)",
              padding: "25px",
              borderRadius: "var(--card-radius)",
              border: "1px solid var(--border-color)",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
