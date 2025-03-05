import anime from "animejs";
import React from "react";

export const DotGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 15;

  const dots = [];

  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Make sure we can access dataset on the target
    const target = e.target as HTMLElement;
    const index = target.dataset.index;

    // Validate index exists and is a number
    if (!index) {
      console.error("No index found on target element");
      return;
    }

    const indexAsNumber = parseInt(index, 10);

    if (isNaN(indexAsNumber)) {
      console.error("Invalid index found on target element");
      return;
    }

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 0.7, easing: "easeOutSine", duration: 250 },
        { value: 0.35, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: indexAsNumber,
      }),
    });
  };

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="singleDots"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className={`${"w-2 h-2 rounded-full bg-gradient-to-b from-[var(--background)] to-[var(--text)] opacity-35"} dot-point`}
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="dotGrid"
    >
      {dots.map((dot) => dot)}
    </div>
  );
};
