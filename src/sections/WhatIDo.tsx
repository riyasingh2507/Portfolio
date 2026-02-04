import SectionTitle from "../components/SectionTitle";

const cards = [
  {
    title: "Healthcare Technology Development",
    desc: "Architect and develop enterprise-grade healthcare platforms including Electronic Health Record (EHR) systems, health monitoring applications, and wearable device integrations. Specialize in processing continuous physiological data streams with high reliability and compliance standards.",
  },
  {
    title: "Backend Architecture & API Development",
    desc: "Design and implement scalable backend systems using Node.js and Express.js. Build robust RESTful APIs with complex business logic, optimized database queries, secure authentication mechanisms, and seamless third-party service integrations.",
  },
  {
    title: "Real-Time System Architecture",
    desc: "Engineer real-time communication systems leveraging Socket.io and WebSocket protocols. Implement live data streaming pipelines for health metrics, real-time messaging systems, and synchronous teleconsultation platforms with low-latency requirements.",
  },
  {
    title: "AI-Driven Feature Development",
    desc: "Develop intelligent healthcare features powered by machine learning algorithms. Create personalized health insights, predictive analytics for recovery patterns, and adaptive coaching systems that learn from user behavior and physiological data.",
  },
];

const WhatIDo = () => {
  return (
    <section>
      <SectionTitle
        title="Core Expertise"
        subtitle="Specialized in architecting and developing production-ready software systems with expertise in healthcare technology, real-time data processing, and scalable backend infrastructure."
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
            className="card"
            style={{
              padding: "2rem",
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
              {card.title}
            </h3>
            <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
