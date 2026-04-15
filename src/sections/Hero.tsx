import cvPdf from "../assets/Singh Riya Anand Resume.pdf";

const quickStats = [
  "3+ years building production web apps",
  "Healthcare, ERP/EHR and management systems",
  "React.js, Vue.js, Node.js and MongoDB",
];

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Software Engineer • Full Stack Developer</p>

          <h1>
            Riya Singh
          </h1>
          <h3>builds reliable products for healthcare, operations, and
            real-time user experiences.</h3>

          <p className="hero-lead">
            Full Stack Software Engineer based in Ahmedabad, crafting scalable
            applications with React.js, Vue.js, Node.js, and MongoDB. My work
            spans wearable health platforms, teleconsultation modules, and
            business systems that need clean interfaces and dependable backend
            logic.
          </p>

          <p className="hero-supporting">
            I currently work on Band Sync at Estatic Infotech, where I help
            build live wearable data flows, AI-driven health insights, and
            EHR-aligned features. Earlier, I delivered ERP/EHR, education, visa
            management, and inventory platforms across multiple client projects
            at The One Technologies.
          </p>

          <div className="hero-actions">
            <a
              href={cvPdf}
              download="Singh_Riya_Anand_Resume.pdf"
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="hero-panel-label">At a glance</p>
          <div className="hero-stat-list">
            {quickStats.map((item) => (
              <div key={item} className="hero-stat-chip">
                {item}
              </div>
            ))}
          </div>

          <div className="hero-highlight">
            <p className="hero-highlight-title">Current focus</p>
            <p>
              Wearable-integrated healthcare products, real-time health data
              processing, and user-friendly product experiences that stay strong
              under production load.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
