import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Profile from "@/public/images/CLJ-Avatar.jpg";

export const Sidebar = () => {
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
      className="bg-[var(--background-dark)] sticky top-0 h-screen grid grid-rows-[auto_1fr_auto]"
    >
      <span
        className="logo flex cursor-pointer text-2xl font-bold w-45 h-45 mx-auto my-6 self-center justify-self-center"
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
        <span className="font-bold font-thin primary-color">.</span>
      </span>
      <span className="sidebar space-y-8 z-20 text-1xl">
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#Speakers"
          onClick={() => setSelected("Speakers")}
          className={selected === "Speakers" ? selected : ""}
        >
          Speakers
        </motion.a>
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
          onClick={() => setSelected("Contact")}
          className={selected === "Contact" ? selected : ""}
        >
          Contact
        </motion.a>
      </span>
      <div className="grid items-center justify-items-center py-4">
        <Image className="w-12 h-12 rounded-full" src={Profile} alt="Avatar" />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
