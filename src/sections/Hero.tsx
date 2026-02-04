import cvPdf from "../assets/Singh Riya Anand Resume.pdf";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%" }}>
        <p
          style={{
            color: "var(--accent-primary)",
            fontSize: "1.1rem",
            fontWeight: 600,
            marginBottom: "1rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Full Stack Software Engineer
        </p>

        <h1>
          Hi, I'm <span style={{ color: "var(--accent-primary)" }}>Riya Singh</span>
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            maxWidth: "850px",
            lineHeight: "1.3",
          }}
        >
          Building Scalable Healthcare Solutions & Real-Time Systems
        </h2>

        <p style={{ 
          marginTop: "1.5rem", 
          fontSize: "1.05rem", 
          lineHeight: "1.85", 
          maxWidth: "850px",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          hyphens: "auto"
        }}>
          Versatile Full Stack Software Engineer with practical experience crafting scalable web
          applications using <strong style={{ color: "var(--text-primary)" }}>React.js, Vue.js, Node.js, and MongoDB</strong>.
          I bring deep expertise in <strong style={{ color: "var(--text-primary)" }}>EHR-related fields</strong>, particularly
          teleconsultation, health tracking, and live data handling. Skilled in creating full-cycle
          solutions and working closely with cross-disciplinary teams in fast-paced agile environments.
        </p>

        <p style={{ 
          marginTop: "1.5rem", 
          fontSize: "1.05rem", 
          lineHeight: "1.85", 
          maxWidth: "850px",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          hyphens: "auto"
        }}>
          Currently working as a Software Engineer at <strong style={{ color: "var(--text-primary)" }}>Estatic Infotech Pvt. Ltd</strong>,
          developing healthcare and wearable-integrated applications. Leading development on the
          <strong style={{ color: "var(--text-primary)" }}> Band Sync health app</strong>, processing live wearable data
          including sleep, heart rate, HRV, workouts, and calories. Implementing data synchronization pipelines,
          real-time updates, and <strong style={{ color: "var(--text-primary)" }}>AI-driven health insights</strong> for personalized coaching features.
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={cvPdf}
            download="Singh_Riya_Anand_Resume.pdf"
            className="btn-primary"
            style={{
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
