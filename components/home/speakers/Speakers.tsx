import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionHeader } from "../../utils/SectionHeader";
import Image from "next/image";
import Laura from "@/public/images/headshots/Laura.jpg";
import George from "@/public/images/headshots/George.jpg";
import Curtis from "@/public/images/headshots/Curtis.jpg";
import Park from "@/public/images/headshots/Park.jpg";
import Jasmine from "@/public/images/headshots/Jasmine.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Item {
  id: number; // or string, depending on your data
  src: StaticImport;
  name: string;
  title: string;
}

const Speakers: React.FC = () => {
  const [items] = useState<Item[]>([
    {
      id: 1,
      name: "Laura Matthews",
      title: "Marketing Innovation",
      src: Laura,
    },
    {
      id: 2,
      name: "Curtis Henderson",
      title: "Ranked Top Designer",
      src: Curtis,
    },
    {
      id: 3,
      name: "George Phillips",
      title: "Master Illustrator",
      src: George,
    },
    {
      id: 4,
      name: "Park So-min",
      title: "UI Foundations",
      src: Park,
    },
    {
      id: 5,
      name: "Jasmine Lonf",
      title: "Management Oficinato",
      src: Jasmine,
    },
  ]);

  const controls = useAnimation();

  useEffect(() => {
    const section = document.getElementById("Speakers");
    let hasAnimated = false; // Flag to track if the animation has already occurred

    const handleScroll = () => {
      if (section && !hasAnimated) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionTop > 0) {
          controls.start({ x: 0 });
          hasAnimated = true; // Set the flag to true after the first animation
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <section id="Speakers" className="section-wrapper section">
      <SectionHeader title="Speakers" dir="l" />
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="text-center p-4 rounded-lg shadow-lg"
              initial={{ x: 100 }}
              animate={controls}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={200}
                height={200}
                className="mx-auto rounded-full shadow-slate-100 border-2 p-2 border-white"
              />
              <div className="relative mt-4 p-4 bg-slate-800 dark:bg-slate-700 rounded-lg">
                {/* Grid Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
            linear-gradient(to right, gray 2px, transparent 2px),
            linear-gradient(to bottom, gray 2px, transparent 2px)
          `,
                    backgroundSize: "20px 20px",
                  }}
                />
                <h2 className="relative z-10 font-black">{item.name}</h2>
                <p className="relative z-10 mt-2 font-thin">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
