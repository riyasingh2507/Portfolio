import SectionTitle from "../components/SectionTitle";

const experiences = [
  {
    role: "Software Engineer",
    company: "Estatic Infotech Pvt. Ltd",
    period: "Sept 2023 - Present",
    summary:
      "Building healthcare and wearable-integrated products with modern JavaScript technologies and real-time data pipelines.",
    points: [
      "Developing healthcare applications using React.js, Node.js, MongoDB, and real-time technologies.",
      "Working on Band Sync, a health tracking application that processes sleep, heart rate, HRV, workouts, and calorie metrics from wearable devices.",
      "Implementing data synchronization pipelines and real-time health data processing for wearable integrations.",
      "Developing AI-driven health insights and coaching features based on user health metrics.",
      "Building teleconsultation, messaging, and EHR-compliant healthcare modules with scalable production behavior.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "The One Technologies",
    period: "Jan 2023 - Aug 2025",
    summary:
      "Delivered full-stack solutions across ERP/EHR and management systems for education, legal, and operations workflows.",
    points: [
      "Built scalable front-end and back-end solutions in ERP/EHR and management systems using React.js, Vue.js, Node.js, and MongoDB.",
      "Developed a teleconsultation platform with secure real-time audio/video calling, messaging, and patient consultation features.",
      "Contributed to Edumark Student Management System for student records, academic data, and administrative workflows.",
      "Developed SIAP, a Germany-based legal management system for student visa, work visa, and citizenship immigration cases.",
      "Built an inventory management system using Stacker for operational record handling and workflow management.",
      "Managed UI development, backend APIs, and integrations while collaborating with cross-functional teams in agile sprints.",
    ],
  },
];

const Experience = () => {
  return (
    <section>
      <SectionTitle
        title="Experience"
        subtitle="A recent track record of shipping dependable applications across healthcare, education, legal, and operational workflows."
      />

      <div className="experience-stack">
        {experiences.map((job) => (
          <article key={`${job.company}-${job.role}`} className="card timeline-card">
            <div className="timeline-header">
              <div>
                <p className="timeline-kicker">{job.company}</p>
                <h3 style={{ marginBottom: "0.35rem" }}>{job.role}</h3>
              </div>
              <span className="timeline-period">{job.period}</span>
            </div>

            <p className="timeline-summary">{job.summary}</p>

            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
