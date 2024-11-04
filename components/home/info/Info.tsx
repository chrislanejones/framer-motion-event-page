import { SectionHeader } from "@/components/utils/SectionHeader";
import { useState } from "react";

export const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionData = [
    {
      title: "General Conduct",
      content:
        "All attendees, speakers, sponsors, and volunteers must treat each other with respect and courtesy. Professional and appropriate behavior is expected at all conference venues and conference-related social events. Harassment in any form will not be tolerated",
    },
    {
      title: "Registration & Badges",
      content:
        "All attendees must wear their conference badge visibly at all times. Badges are non-transferable. Lost badges must be reported immediately to conference staff. Registration fees are non-refundable within 30 days of the event.",
    },
    {
      title: "Sessions & Presentations",
      content:
        "Arrive at sessions on time to minimize disruption. Phones must be silenced during sessions. Photography/recording of presentations is prohibited without speaker consent. Questions should be held until the designated Q&A period. Speakers must adhere to their allocated time slots.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper section" id="Info">
      <SectionHeader title="info" dir="l" />
      <div className="w-full mx-auto p-4 space-y-2 pt-10">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-gray-700 rounded-lg">
            <button
              className="w-full px-4 py-3 text-left text-gray-200 font-medium flex justify-between items-center hover:bg-gray-800 rounded-lg focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  openIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-300 bg-gray-800 rounded-b-lg">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
