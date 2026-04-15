import SectionTitle from "../components/SectionTitle";

const HumanSide = () => {
  return (
    <section>
      <SectionTitle
        title="Beyond Work"
        subtitle="The interests that keep my thinking sharp, creative, and grounded outside day-to-day product delivery."
      />

      <div className="three-up-grid">
        <div className="card feature-card">
          <h3>Competitive Programming</h3>
          <p>
            I enjoy solving algorithmic challenges on platforms like LeetCode
            and Codeforces to keep problem-solving and data structure skills
            active.
          </p>
          <a
            href="https://leetcode.com/u/SinghRiyaAnand/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LeetCode profile
          </a>
        </div>

        <div className="card feature-card">
          <h3>Painting & Sketching</h3>
          <p>
            I work across murals, canvas, and fabric art, and I especially
            enjoy sketching cars, cartoons, and playful doodles.
          </p>
        </div>

        <div className="card feature-card">
          <h3>Reading</h3>
          <p>
            Personal development books and fiction both play a big role in how I
            recharge, reflect, and keep growing as a teammate and builder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HumanSide;
