import { motion } from "framer-motion";
import { Reveal } from "../utils/Reveal";
import { DotGrid } from "./Dots";

export const Hero = () => {
  return (
    <section className="mt-16 mb-96 px-16 py-10">
      {/* <div className={styles.heroGrid}> */}
      <div className="relative z-10 w-fit-content my-8 mx-0">
        <Reveal>
          <h1 className="text-6xl text-extrabold">
            Marketing Event
            <span className="text-fuchsia-500">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="font-extralight text-4xl mt-2.5">
            In <span>NOVA</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="max-w-80 px-0 py-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Reveal>
      </div>
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      ></motion.div>
      <DotGrid />
    </section>
  );
};
