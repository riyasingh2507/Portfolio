import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Open to discussing new opportunities, collaborations, or technical challenges. Let's connect and explore how we can work together."
      />

      <div
        className="card"
        style={{
          padding: "2.5rem",
          maxWidth: "700px",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Location
          </p>
          <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Ahmedabad, India
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Email
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <a
              href="mailto:riyanita2000@gmail.com"
              style={{ color: "var(--accent-primary)", fontWeight: 500 }}
            >
              riyanita2000@gmail.com
            </a>
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Professional Network
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <a
              href="https://www.linkedin.com/in/riya-singh-977914211/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-primary)", fontWeight: 500 }}
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        <div>
          <p style={{ marginBottom: "0.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Code Repository
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <a
              href="https://github.com/riyasingh2507"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-primary)", fontWeight: 500 }}
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
