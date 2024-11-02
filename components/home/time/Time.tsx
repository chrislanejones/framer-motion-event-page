import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "../../utils/SectionHeader";
import React, { useState, ReactNode } from "react";

type sessions = {
  id: number;
  title: string;
  time: string;
};

interface HoverCardProps {
  title: string;
  description: ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transform transition-all duration-300 ease-in-out ${
        isHovered ? "scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-75" />
        {description}
      </div>
    </div>
  );
};

export const Time = () => {
  const sessions: sessions[] = [
    { id: 1, title: "Session 1", time: "9:00AM - 10:00AM" },
    { id: 2, title: "Session 2", time: "10:15AM - 11:15AM" },
    { id: 3, title: "Session 3", time: "11:30AM - 12:30PM" },
    { id: 4, title: "Session 4", time: "1:30PM - 2:30PM" },
    { id: 5, title: "Session 5", time: "2:45PM - 3:45PM" },
    { id: 6, title: "Session 6", time: "4:00PM - 5:00PM" },
    { id: 7, title: "Session 7", time: "5:15PM - 6:15PM" },
    { id: 8, title: "Session 8", time: "6:30PM - 7:30PM" },
  ];

  const colorClasses = [
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-gray-100",
  ];

  return (
    <section id="Time" className="section-wrapper section">
      <SectionHeader title="Time" dir="l" />
      <Reveal>
        <div className="container mx-auto pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sessions.map((session, index) => (
              <HoverCard
                key={session.id}
                title={session.title}
                description={
                  <div
                    className={`h-full w-full ${
                      colorClasses[index % colorClasses.length]
                    } p-6 grid grid-rows-[1fr_auto] gap-2`}
                  >
                    <h3 className="text-2xl font-thin text-gray-800 justify-self-start">
                      {session.title}
                    </h3>
                    <h4 className="text-2xl font-semibold text-gray-600">
                      {session.time}
                    </h4>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
