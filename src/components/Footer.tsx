const Footer = () => {
  return (
    <footer
      style={{
        padding: "3rem 10%",
        textAlign: "center",
        borderTop: "1px solid var(--border-color)",
        color: "var(--text-muted)",
        marginTop: "4rem",
      }}
    >
      <p style={{ marginBottom: "0.5rem", fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} Riya Singh. All rights reserved.
      </p>
      <p style={{ fontSize: "0.9rem" }}>
        Built with <span style={{ color: "var(--accent-primary)" }}>React</span> and{" "}
        <span style={{ color: "var(--accent-primary)" }}>TypeScript</span>
      </p>
    </footer>
  );
};

export default Footer;
