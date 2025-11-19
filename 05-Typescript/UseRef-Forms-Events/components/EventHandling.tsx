import type React from "react";

const EventHandling = () => {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked!", event.currentTarget);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered!", event.currentTarget)
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h3>EventHandling</h3>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default EventHandling;