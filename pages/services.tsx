import React, { useState } from "react";

export default function SquareHoverExample() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="pt-16 md:pt-24">
      <div className="text-center">
        <div
          className="inline-block w-24 h-24 bg-red-500 mx-2"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="inline-block w-24 h-24 bg-green-500 mx-2"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="inline-block w-24 h-24 bg-blue-500 mx-2"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
      <div className="text-center mt-4">
        <h4>{hoveredIndex === 0 && "Text for Square 1"}</h4>
        <h4>{hoveredIndex === 1 && "Text for Square 2"}</h4>
        <h4>{hoveredIndex === 2 && "Text for Square 3"}</h4>
      </div>
    </div>
  );
}
