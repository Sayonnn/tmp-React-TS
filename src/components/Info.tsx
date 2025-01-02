import React from "react";
import knight_11 from "../assets/images/argus_7.png";
import knight_14 from "../assets/images/argus_3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Info() {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {

        trigger:"#info",
        start: "top 30%", // Start the animation when the section is 80% into the viewport
        toggleActions: "play none none reverse", // Play the animation and reverse on scroll
      },
    });

    timeline
    .fromTo("#description",
      {opacity:0},{opacity:1,duration:.5,ease:"power1.in"}
    )
      .fromTo(
        "#knigh1",
        { x: 200, scale: 0.2, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: .5, ease: "power3.out" }
      )
      .fromTo(
        "#knight2",
        { x: 300, scale: 0.2, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, duration: .5, ease: "power3.out" },
      )
     
  }, []);

  return (
    <section className="h-[100vh] w-full relative overflow-hidden" id = "info">
      <div className="absolute top-0 left-0 w-full h-[100vh]"></div>

      {/* Second div with shadow on top */}
      <div className="relative bg-gray-900/90 md:px-40 w-full h-[100vh] p-4 shadow-[0_-5px_15px_rgba(0,0,0,0.5)] flex md:flex-row gap-4 flex-col ">
        {/* Left Section */}
        <section className="flex-1 flex items-start flex-col justify-center">
          <h1 className="font-bold md:text-5xl text-4xl flex gap-2" id="description">
        
            KNIGHTS <p className="text-emerald-400"> DUTY</p>
          </h1>
          <div className="w-[250px] h-[5px] bg-white mt-3"></div>
          <div className="w-[150px] h-[5px] bg-white mt-3"></div>
          <p className="mt-4 md:text-lg" id="description">
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
        <section className="relative flex-1 flex md:items-center md:justify-start items-start  ">
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
            className="object-contain relative md:w-[400px] md:h-[450px] w-[300px] h-[370px] z-20 rounded-md  p-0"
            id="knigh1"
          />
          <img
            src={knight_14}
            alt="Knight"
            className="object-contain absolute md:w-[400px] md:h-[450px]  w-[300px] h-[370px] z-10 rounded-md md:right-[-100px] right-[-40px] "
            id="knight2"
          />
        </section>
      </div>
    </section>
  );
}

export default Info;
