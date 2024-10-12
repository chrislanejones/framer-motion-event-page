import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "@/public/images/CLJ-Avatar.jpg";

export const SideBar = () => {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    const sections =
      document.querySelectorAll<HTMLDivElement>(".section-wrapper");

    const options: IntersectionObserverInit = {
      threshold: 0.3,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--background-dark)] h-50 sticky flex flex-col"
    >
      <span className="sidebar bg-[var(--background-dark)] z-20 items-center text-1xl">
        <span
          className="[writing-mode:vertical-lr] cursor-pointer flex-shrink-0 text-2xl font-bold line-height-1 w-45 h-45 flex mx-auto my-6"
          onClick={() => {
            if (document.location.pathname !== "/") {
              // Navigate to the home page
              document.location.pathname = "/";
            } else {
              // Scroll to the top of the page
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          UX Now
          <span className="font-bold line-height-1 primary-color">.</span>
        </span>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#Time"
          onClick={() => {
            setSelected("Time");
          }}
          className={selected === "Time" ? "selected" : ""}
        >
          Time & Date
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => setSelected("projects")}
          className={selected === "Speakers" ? selected : ""}
        >
          Speakers
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#Info"
          onClick={() => setSelected("Info")}
          className={selected === "Info" ? selected : ""}
        >
          More Info
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? selected : ""}
        >
          Contact
        </motion.a>
      </span>
      <div className="justify-items-end self-end justify-self-end items-end self-end">
        <Image className="w-12 h-12 rounded-full" src={Profile} alt="Avatar" />
      </div>
    </motion.nav>
  );
};
