interface Props {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>{title}</h2>
      {subtitle && (
        <p style={{ maxWidth: "600px", color: "var(--text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
