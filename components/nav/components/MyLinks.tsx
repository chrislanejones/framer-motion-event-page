import { Linkedin, Github } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className="flex gap-3 z-20">
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/chrislanejones/https://www.linkedin.com/in/chrislanejones/"
          target="_blank"
          rel="nofollow"
        >
          <Linkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://github.com/chrislanejones"
          target="_blank"
          rel="nofollow"
        >
          <Github size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
