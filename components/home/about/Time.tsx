import { SectionHeader } from "../../utils/SectionHeader";

const convertTimeToNumber = (time) => {
  const [hour, minute, period] = time.match(/(\d+):(\d+) (\w+)/).slice(1);
  let hourNumber = parseInt(hour, 10);
  if (period === "PM" && hourNumber !== 12) {
    hourNumber += 12;
  } else if (period === "AM" && hourNumber === 12) {
    hourNumber = 0;
  }
  return hourNumber * 60 + parseInt(minute, 10);
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
    "bg-blue-100",
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "bg-blue-500",
    "bg-blue-600",
    "bg-blue-700",
    "bg-blue-800",
  ];

  return (
    <section id="Time" className="section-wrapper section">
      <SectionHeader title="Time" dir="l" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {sessions.map((session, index) => (
            <div
              key={session.id}
              className={`p-4 border rounded-lg shadow-lg ${
                colorClasses[index % colorClasses.length]
              }`}
            >
              <h2 className="text-xl font-semibold">{session.title}</h2>
              <p className="text-gray-600">{session.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
