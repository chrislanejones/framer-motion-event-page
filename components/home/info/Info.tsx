import { SectionHeader } from "@/components/utils/SectionHeader";
import { useState } from "react";

export const Info = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionData = [
    {
      title: "Section 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Section 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Section 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrapper section" id="Info">
      <SectionHeader title="info" dir="l" />
      <div className="w-full max-w-2xl mx-auto p-4 space-y-2 bg-gray-900">
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
