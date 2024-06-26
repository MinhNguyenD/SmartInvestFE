import React from "react";
import TypewriterComponent from "typewriter-effect";

function Hero() {
  return (
    <div className="py-36 text-white text-center">
      <div className="text-4xl font-extrabold">
        <p>The best platform for</p>
        <div className="leading-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
          <TypewriterComponent
            options={{
              strings: [
                "Stock Portfolio Management",
                "Trading Simulation",
                "Investment Community",
              ],
              autoStart: true,
              loop: true,
            }}
          ></TypewriterComponent>
        </div>
      </div>
    </div>
  );
}

export default Hero;
