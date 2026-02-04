const Hero = () => {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div>
        <h1>Hi, I’m Riya 👋</h1>
        <h3>Full Stack Developer</h3>
        <p style={{ maxWidth: "600px", marginTop: "20px" }}>
          I build scalable, data-driven web applications using React, Node.js,
          and PostgreSQL with a strong focus on clean architecture and performance.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={{ background: "#6366f1", color: "#fff", marginRight: "15px" }}>
            View Projects
          </button>
          <button style={{ background: "transparent", color: "#6366f1", border: "1px solid #6366f1" }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
