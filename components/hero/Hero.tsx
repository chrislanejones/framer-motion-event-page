import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";

export const Hero = () => {
  return (
    <section className="mt-16 mb-96 px-16 py-10">
      {/* <div className={styles.heroGrid}> */}
      <div className="relative z-10 w-fit-content my-8 mx-0">
        <Reveal>
          <h1 className="text-3xl text-extrabold leading-10">
            Marketing Event<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="text-bold">
            In <span>NOVA</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="">Test</p>
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
