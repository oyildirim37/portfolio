import React from "react";
import { motion } from "framer-motion";

const HomeButton = ({ start, handleClick123 }) => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
        }}
        animate={{
          transition: start ? { duration: 1.3 } : { duration: 0.3 },
          opacity: start ? 1 : 0,
        }}
      >
        <svg
          style={{
            marginLeft: "38vw",
            marginTop: "0vh",
          }}
          onClick={() => {
            handleClick123();
          }}
          width="12vw"
          height="24vh"
          xmlns="http://www.w3.org/2000/svg"
          className="hover-animation2"
        >
          <circle
            cx="6.75vw" // Hälfte der SVG-Breite
            cy="13.75vh" // Hälfte der SVG-Höhe
            r="3.5vw"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="360 180"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0; 360; 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="6.75vw" // Hälfte der SVG-Breite
            cy="13.75vh" // Hälfte der SVG-Höhe
            r="2.75vw"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="180 180"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0; 180; 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="6.75vw" // Hälfte der SVG-Breite
            cy="13.75vh" // Hälfte der SVG-Höhe
            r="2vw"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0; 360; 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          {/* Text innerhalb des innersten Kreises */}
          <text
            x="0vw" // Hälfte der SVG-Breite
            y="13.55vh" // Hälfte der SVG-Höhe
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="white"
            fontSize="1vw"
          >
            <tspan x="6.75vw" dy="0.75vh">
              Home
            </tspan>
          </text>
        </svg>
      </motion.section>
    </>
  );
};

export default HomeButton;
