import { motion } from "framer-motion";
import { Reveal } from "../../utils/Reveal";
import { DotGrid } from "./Dots";
import Image from "next/image";
import DataCenter from "@/public/images/Data-Center.jpg";
import { StandardButton } from "@/components/buttons/StandardButton";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${"hero"}`}>
      <div className="heroGrid flex flex-nowrap flex-row items-center flex-column justify-between gap-6">
        <div className="relative z-10 w-fit my-[4.8rem]">
          <Reveal>
            <h1 className="title text-8xl font-black">
              Marketing Event
              <span className="text-fuchsia-500">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="font-thin text-4xl mt-2.5">
              In <span>NOVA</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="max-w-80 px-0 py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact Event
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className="relative z-10 m-8 mr-36 outline outline-3 outline-offset-6 transition duration-400"
            src={DataCenter}
            priority
            alt="John Carlo Devera | Frontend Developer"
            width={480}
            height={251}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
