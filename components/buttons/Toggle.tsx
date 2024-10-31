import React, { useState } from "react";

const ToggleButton = () => {
  // State to track the toggle status
  const [isToggled, setIsToggled] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button
      onClick={handleToggle}
      className={`px-4 py-2 font-semibold text-white rounded ${
        isToggled ? "bg-green-500" : "bg-gray-500"
      }`}
    >
      {isToggled ? "ON" : "OFF"}
    </button>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ToggleButton />
    </div>
  );
};

export default App;
