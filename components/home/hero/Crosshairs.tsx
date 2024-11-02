import anime from "animejs";

export const CrosshairGrid = () => {
  const GRID_WIDTH = 25;
  const GRID_HEIGHT = 15;

  const crosshairs = [];

  const handleCrosshairClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number((e.target as HTMLDivElement).dataset.index);

    anime({
      targets: ".crosshair-point",
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
        from: index,
      }),
    });
  };

  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      crosshairs.push(
        <div
          onClick={handleCrosshairClick}
          className="single-crosshair relative"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="crosshair-point w-4 h-4 opacity-35 relative"
            data-index={index}
          >
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-[var(--background)] to-[var(--text)]" />
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 h-[1px] w-full bg-gradient-to-b from-[var(--background)] to-[var(--text)]" />
          </div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="crosshair-grid"
    >
      {crosshairs.map((crosshair) => crosshair)}
    </div>
  );
};
