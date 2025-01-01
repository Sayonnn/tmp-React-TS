import React from "react";
import knight_11 from "../assets/images/argus_7.png";

function Info() {
  return (
    <section className="h-[100vh] w-full relative">
      <div className="absolute top-0 left-0 w-full h-[100vh]"></div>

      {/* Second div with shadow on top */}
      <div className="relative bg-gray-900/90 md:px-40 w-full h-[100vh] p-4 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] flex md:flex-row gap-4">
        {/* Left Section */}
        <section className="flex-1 flex items-start flex-col justify-center">
          <h1 className="font-bold md:text-5xl flex gap-2">
            KNIGHTS <p className="text-emerald-400"> DUTY</p>
          </h1>
          <div className="md:w-[250px] h-[5px] bg-white mt-3"></div>
          <div className="md:w-[150px] h-[5px] bg-white mt-3"></div>
          <p className="mt-4 md:text-md">
            Knight Duty is a role embodying leadership, responsibility, and
            service. It requires individuals to uphold honor and integrity while
            fulfilling tasks that ensure the safety, unity, and well-being of a
            community or organization. Whether overseeing operations, guiding a
            team, or providing support during critical moments, Knight Duty
            emphasizes commitment, strategic thinking, and unwavering dedication
            to the mission at hand. This role reflects the highest standards of
            discipline and excellence, inspiring others through action and
            resolve.
          </p>
        </section>

        {/* Right Section with Radial Gradient */}
        <section className="relative flex-1 flex items-center justify-end">
          <div
            className="absolute md:w-[150px] md:h-[150px] rounded-full z-10 shadow-lg"
            style={{
              backgroundImage: "radial-gradient(circle, white, white)",
              filter: "blur(150px)", 
            }}
          ></div>
          <img
            src={knight_11}
            alt="Knight"
            className="object-contain relative md:w-[400px] md:h-[450px] z-20 rounded-md"
          />
        </section>
      </div>
    </section>
  );
}

export default Info;
