import { SectionHeader } from "../../utils/SectionHeader";
import { Stats } from "./Stats";
import { Reveal } from "@/components/utils/Reveal";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-[1fr_300px] gap-[2.4rem] md:grid-cols-1">
        <div>
          <Reveal>
            <p className="mb-6 font-thin">Must show ID to enter the event.</p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3.2 text-3xl">
                <span>My links</span>
              </div>
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
