import SectionTitle from "../components/sectionTitle";

const HumanSide = () => {
  return (
    <section>
      <SectionTitle
        title="Beyond Code"
        subtitle="What keeps me creative, focused, and continuously learning."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "var(--bg-secondary)",
            padding: "25px",
            borderRadius: "var(--card-radius)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3>🎨 Creative Art</h3>
          <p>
            Skilled in painting (murals, canvas, fabric) and enjoy sketching
            cars, cartoons, and doodles.
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-secondary)",
            padding: "25px",
            borderRadius: "var(--card-radius)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3>📚 Reading</h3>
          <p>
            Passionate reader focused on personal development and fiction,
            continuously improving mindset and perspective.
          </p>
        </div>

        <div
          style={{
            background: "var(--bg-secondary)",
            padding: "25px",
            borderRadius: "var(--card-radius)",
            border: "1px solid var(--border-color)",
          }}
        >
          <h3>🧠 Competitive Programming</h3>
          <p>
            Active on LeetCode and other platforms, strengthening problem-solving
            and algorithmic thinking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanSide;
