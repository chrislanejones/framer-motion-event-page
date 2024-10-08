import { motion } from "framer-motion";
import { Reveal } from "../../utils/Reveal";
import { DotGrid } from "./Dots";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="section-wrapper mt-16 mb-100 py-16 px-10">
      <div className="">
        <div className="flex flex-nowrap flex-row items-center justify-between gap-6">
          <div className="relative z-10 w-fit my-20">
            <Reveal>
              <h1 className="text-8xl font-black">
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
          </div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            <Image
            className="relative z-10 m-8 mr-36 rounded-full outline outline-3 outline-offset-6 transition duration-400"
            src={test}
            priority
            alt="John Carlo Devera | Frontend Developer"
            width={250}
            height={250}
          />
          ></motion.div>
        </div>
        <DotGrid />
      </div>
    </section>
  );
};
