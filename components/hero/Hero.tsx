import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

export const Hero = () => {
  return (
    <section className="mt-4 mb-1">
      {/* <div className={styles.heroGrid}> */}
      <div className="relative z-10">
        <Reveal>
          <h1 className="text-extrabold ont-bold">
            Marketing Event<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-bold">
            In <span>Nova</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="">Test</p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>
    </section>
  );
};
