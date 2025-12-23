"use client";

import { useState } from "react";

// Whitelisted Tailwind classes
const colorClasses = {
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
};

const Test = () => {
  const [color, setColor] = useState("red");

  // Fallback if invalid color
  const textColor = colorClasses[color] || "text-black";

  return (
    <div className="flex flex-col p-10">
      <h1 className={`p-5 text-2xl font-bold ${textColor}`}>I am Colour</h1>
      <div className="flex items-center gap-4 mt-4">
        <label htmlFor="color">Enter a color (red, blue, etc):</label>
        <input
          id="color"
          className="border border-black px-2 py-1"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value.toLowerCase())}
        />
      </div>
      <button> Click Here</button>
    </div>
  );
};

export default Test;
