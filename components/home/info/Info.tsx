import { SectionHeader } from "@/components/utils/SectionHeader";
import { InfoItem } from "./infoItems";

export const Info = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="info" dir="l" />
      {info.map((item) => (
        <InfoItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const info = [
  {
    title: "Event",
    position: "Info",
    time: "7pm",
    location: "Atanta",
    description: "Tech Event",
    tech: ["Devs", "Founders", "Database Heads"],
  },
];
