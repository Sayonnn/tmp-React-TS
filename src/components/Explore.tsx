import React from "react";

function Explore() {
  return (
    <section className={`h-[100vh] w-full relative`}>
      {/* First div with linear gradient background */}
      <div
        className={`absolute top-0 left-0 w-full h-[100vh] bg-gradient-to-r `}
      ></div>

      {/* Second div with shadow on top */}
      <div
        className={`relative bg-gray-900/90 md:px-40 w-full h-[100vh] p-4 `}
      >
        happy birthday
      </div>
    </section>
  );
}

export default Explore;
