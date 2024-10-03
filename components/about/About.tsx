import { SectionHeader } from "../utils/SectionHeader";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <Stats />
    </section>
  );
};
