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
  const [timeFilter, setTimeFilter] = useState<"before" | "after">("before");

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

  const filteredSessions = sessions.filter((session) =>
    timeFilter === "before" ? session.id <= 3 : session.id >= 4
  );

  return (
    <section id="Time" className="section-wrapper section">
      <SectionHeader title="Time" dir="l" />

      <div className="pt-10">
        {/* Toggle Switch */}
        <div className="grid grid-cols-8  mb-5 rounded-lg bg-slate-800 p-2 space-x-2 grid-background">
          <div className="justify-start">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium text-white border border-amber-400
                  ${
                    timeFilter === "before"
                      ? "bg-amber-600"
                      : "hover:bg-amber-700"
                  }`}
              onClick={() => setTimeFilter("before")}
            >
              Before Lunch
            </button>
          </div>
          <div>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium text-white border border-amber-400
                ${
                  timeFilter === "after" ? "bg-amber-600" : "hover:bg-amber-700"
                }`}
              onClick={() => setTimeFilter("after")}
            >
              After Lunch
            </button>
          </div>
          <div className="self-center self-end col-end-9 text-large font-semibold ">
            <p>Lunch - 12:30 PM</p>
          </div>
        </div>
      </div>
      <Reveal>
        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSessions.map((session, index) => (
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
      </Reveal>
    </section>
  );
};
