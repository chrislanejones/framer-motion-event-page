export const Info = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const Info = [
  {
    title: "Event",
    position: "Info",
    time: "7pm",
    location: "Atanta",
    description: "Tech Event",
    tech: ["Devs", "Founders", "Database Heads"],
  },
];
