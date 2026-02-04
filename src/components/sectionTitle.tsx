interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>{title}</h2>
      {subtitle && (
        <p
          style={{
            maxWidth: "700px",
            color: "var(--text-muted)",
            fontSize: "1.1rem",
            lineHeight: "1.7",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
