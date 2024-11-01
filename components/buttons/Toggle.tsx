// components/ToggleButton.tsx
import React, { useState } from "react";

const ToggleButton: React.FC = () => {
  // State to track the toggle status
  const [isToggled, setIsToggled] = useState<boolean>(false);

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

export default ToggleButton;
