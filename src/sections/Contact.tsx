import SectionTitle from "../components/sectionTitle";

const contacts = [
  { label: "Location", value: "Ahmedabad, Gujarat 380015" },
  {
    label: "Email",
    value: "riyanita2000@gmail.com",
    href: "mailto:riyanita2000@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "riya-singh-977914211",
    href: "https://www.linkedin.com/in/riya-singh-977914211/",
  },
  {
    label: "GitHub",
    value: "riyasingh2507",
    href: "https://github.com/riyasingh2507",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle
        title="Let’s Connect"
        subtitle="I’m open to software engineering roles, collaborative builds, and thoughtful product conversations around healthcare or real-time systems."
      />

      <div className="card contact-card">
        {contacts.map((item) => (
          <div key={item.label} className="contact-row">
            <p className="contact-label">{item.label}</p>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ) : (
              <p style={{ color: "var(--text-primary)" }}>{item.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
