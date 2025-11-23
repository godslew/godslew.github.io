export default function Contact() {
  const contacts = [
    {
      name: "Email",
      href: "mailto:ryosuke.sugihara.gk@gmail.com",
      className: "px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",
    },
    {
      name: "GitHub",
      href: "https://github.com/godslew",
      className: "px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors",
    },
  ];

  return (
    <section className="w-full text-center">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Contact
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target={contact.name !== "Email" ? "_blank" : undefined}
            rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
            className={contact.className}
          >
            {contact.name}
          </a>
        ))}
      </div>
    </section>
  );
}

