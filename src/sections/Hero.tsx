const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div>
        <h1>
          Hi, I’m <span style={{ color: "var(--accent-primary)" }}>Riya</span> 👋
        </h1>

        <h3 style={{ marginTop: "10px" }}>
          Full Stack Software Engineer
        </h3>

        <p
          style={{
            maxWidth: "650px",
            marginTop: "25px",
            fontSize: "1.1rem",
          }}
        >
          I build scalable <strong>health-tech</strong> and{" "}
          <strong>real-time web applications</strong> using Node.js, React,
          Firebase, and Socket.io — with hands-on experience in wearable data,
          teleconsultation, and AI-driven features.
        </p>

        <div style={{ marginTop: "35px", display: "flex", gap: "20px" }}>
          <button className="btn-primary">View My Work</button>
          <button className="btn-outline">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
