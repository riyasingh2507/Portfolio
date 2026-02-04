const Navbar = () => {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      padding: "20px 10%",
      display: "flex",
      justifyContent: "space-between",
      background: "rgba(15, 23, 42, 0.9)",
      backdropFilter: "blur(8px)"
    }}>
      <strong>Riya Singh</strong>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
