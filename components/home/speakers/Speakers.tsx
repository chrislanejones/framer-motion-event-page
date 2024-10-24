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
  title: string;
  description: string;
}

const Speakers: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      title: "Laura Matthews",
      description: "Marketing Innovation",
      src: Laura,
    },
    {
      id: 2,
      title: "Curtis Henderson",
      description: "Ranked Top Designer",
      src: Curtis,
    },
    {
      id: 3,
      title: "George Phillips",
      description: "Master Illustrator",
      src: George,
    },
    {
      id: 4,
      title: "Park So-min",
      description: "UI Foundations",
      src: Park,
    },
    {
      id: 5,
      title: "Jasmine Lonf",
      description: "Management Oficinato",
      src: Jasmine,
    },
  ]);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ x: window.scrollY });
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
              animate={controls}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src={item.src}
                alt={item.title}
                width={200}
                height={200}
                className="mx-auto rounded-full shadow-slate-100 border-2 p-2 border-white"
              />
              <h2 className="mt-4 font-black">{item.title}</h2>
              <p className="mt-2 font-thin">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
