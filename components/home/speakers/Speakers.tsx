import { SectionHeader } from "../../utils/SectionHeader";

export const Speakers = () => {
  const items = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <section id="Speakers" className="section-wrapper section">
      <SectionHeader title="Speakers" dir="l" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="text-center p-4 border rounded-lg shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 col-start-2  md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="text-center p-4 border rounded-lg shadow-lg"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Top Row */}
          <div className="bg-blue-500 p-4">Item 1</div>
          <div className="bg-blue-500 p-4">Item 2</div>
          <div className="bg-blue-500 p-4">Item 3</div>

          {/* Bottom Row with Offset */}
          <div className="col-start-2 bg-green-500 p-4">Item 4</div>
          <div className="bg-green-500 p-4">Item 5</div>
          <div className="bg-green-500 p-4">Item 6</div>
        </div>
      </div>
    </section>
  );
};
