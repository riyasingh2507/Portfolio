import SectionTitle from "../components/SectionTitle";

const HumanSide = () => {
  return (
    <section>
      <SectionTitle
        title="Beyond Code"
        subtitle="Interests and activities that fuel creativity, maintain focus, and drive continuous learning."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div className="card" style={{ padding: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
            Competitive Programming
          </h3>
          <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
            Active competitive programmer on platforms like{" "}
            <a
              href="https://leetcode.com/u/SinghRiyaAnand/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-primary)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              LeetCode
            </a>
            , Codeforces, and other online judges. Continuously strengthening algorithmic
            thinking, data structures knowledge, and problem-solving skills through regular practice.
          </p>
          <p style={{ lineHeight: "1.8", margin: 0 }}>
            <strong style={{ color: "var(--text-primary)" }}>LeetCode Profile:</strong>{" "}
            <a
              href="https://leetcode.com/u/SinghRiyaAnand/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-primary)",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Singh Riya Anand
            </a>
          </p>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
            Creative Art & Painting
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Skilled in painting including murals, canvas, and fabric art. Enjoy sketching
            cars, cartoons, and doodles. Creative expression helps maintain balance between
            technical precision and artistic perspective, enhancing problem-solving abilities.
          </p>
        </div>

        <div className="card" style={{ padding: "2rem" }}>
          <h3 style={{ marginBottom: "1rem", color: "var(--accent-primary)" }}>
            Reading & Personal Development
          </h3>
          <p style={{ lineHeight: "1.8" }}>
            Passionate reader focused on personal development literature and fiction.
            Continuously improving mindset, perspective, and soft skills through diverse
            reading, which complements technical expertise and enhances professional growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanSide;
