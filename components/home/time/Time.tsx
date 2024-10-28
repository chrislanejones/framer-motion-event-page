import { SectionHeader } from "../../utils/SectionHeader";
import React, { useState, ReactNode } from "react";

interface Session {
  id: number;
  title: string;
  time: string;
}

interface HoverCardProps {
  title: string;
  description: ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({ title, description }) => {
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
  const sessions = [
    { id: 1, title: "Session 1", time: "09:00 AM - 10:00 AM" },
    { id: 2, title: "Session 2", time: "10:15 AM - 11:15 AM" },
    { id: 3, title: "Session 3", time: "11:30 AM - 12:30 PM" },
    { id: 4, title: "Session 4", time: "01:30 PM - 02:30 PM" },
    { id: 5, title: "Session 5", time: "02:45 PM - 03:45 PM" },
    { id: 6, title: "Session 6", time: "04:00 PM - 05:00 PM" },
    { id: 7, title: "Session 7", time: "05:15 PM - 06:15 PM" },
    { id: 8, title: "Session 8", time: "06:30 PM - 07:30 PM" },
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
                  } p-6 flex flex-col justify-center items-center`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {session.title}
                  </h3>
                  <p className="text-gray-600 text-center">{session.time}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
