import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="sidebar bg-[var(--background-dark)] h-screen sticky top-0 left-0 z-20 flex flex-col items-center"
    >
      <span
        className="[writing-mode:vertical-lr] cursor-pointer flex-shrink-0 text-md font-bold line-height-1 w-45 h-45 flex items-center justify-center bg-background rounded-md mx-auto my-6"
        onClick={() => {
          document.location.hash === ""
            ? document.getElementById("main")?.scrollIntoView()
            : (document.location.hash = "");
        }}
      >
        UX Now
        <span className="text-md font-bold line-height-1 primary-color">.</span>
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
    </motion.nav>
  );
};
