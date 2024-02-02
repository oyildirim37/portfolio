import React from "react";
import { motion } from "framer-motion";
import HomeButton from "./HomeButton";

const Home = ({ start, handleClick123 }) => {
  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
          x: 1410,
        }}
        whileInView={!start && { opacity: 1, y: 0 }}
        transition={{ duration: 0.67 }}
        animate={{
          x: start ? 1410 : 0,
          transition: { duration: 0.67 },
          opacity: start ? 0 : 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-1vw",
            marginTop: "4vh",
          }}
        >
          <h4 style={{ fontSize: "1.5vh" }}>{" <p>"}</h4>
          <h2 style={{ fontSize: "2vh" }}> This is </h2>
          <h4 style={{ fontSize: "1.5vh" }}>{" </p>"}</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "3vw",
          }}
        >
          <h4 style={{ fontSize: "0.75vw" }}>{"<h1>"}</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "4vw",
            fontSize: "34px",
            marginTop: "-14vh",
          }}
        >
          <svg height="260" width="80">
            <line x1="10" y1="75" x2="10" y2="220" stroke="#00ff93" />
            <line x1="10" y1="120" x2="50" y2="120" stroke="#00ff93" />
          </svg>
          <h1
            style={{
              marginRight: "0vw",
              marginBottom: "2vh",
              fontSize: "2.5vw",
            }}
          >
            Oguzhan <br />
            Yildirim
          </h1>

          <svg
            onClick={() => {
              handleClick123();
            }}
            width="20vw"
            height="40vh"
            xmlns="http://www.w3.org/2000/svg"
            className="hover-animation"
          >
            <circle
              cx="10.5vw"
              cy="20vh"
              r="6.5vw"
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
              cx="10.5vw"
              cy="20vh"
              r="5.5vw"
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
              cx="10.5vw"
              cy="20vh"
              r="4.5vw"
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
              x="10.5vw"
              y="20vh"
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="white"
              fontSize="1vw"
            >
              <tspan x="10.5vw" dy="-0.5em">
                Dive into
              </tspan>
              <tspan x="10.5vw" dy="1.5em">
                my world
              </tspan>
            </text>
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "-11vh",
            marginLeft: "3vw",
          }}
        >
          <h4 style={{ fontSize: "0.75vw" }}>{"<h1>"}</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0vh",
            marginLeft: "0vw",
          }}
        >
          <h4 style={{ fontSize: "0.75vw" }}>{"<p>"}</h4>
          <h3 style={{ fontSize: "1.1vw" }}>Software Engineering Student</h3>
          <h4 style={{ fontSize: "0.75vw" }}>{"</p>"}</h4>
        </div>
        <div>
          <h5 style={{ fontSize: "0.75vw" }}>{"</h1>"}</h5>
          <h1
            style={{
              marginLeft: "1.5vw",
              marginTop: "-2vh",
              color: "#00ff93",
              fontSize: "1.5vw",
            }}
          >
            Hello World,
          </h1>
          <h5
            style={{
              marginLeft: "8vw",
              marginTop: "-1.5vh",
              fontSize: "0.75vw",
            }}
          >
            {"</h1>"}
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0vh",
            marginLeft: "1.5vw",
            marginBottom: "5vh",
          }}
        >
          <h2
            style={{
              marginRight: "3vw",
              color: "#bdbaba",
              textAlign: "justify",
              fontSize: "1.2vw",
            }}
          >
            Oguzhan here. One of those people who discovered their passion and
            enthusiasm for technology at an early age. I am currently pursuing a
            degree in{" "}
            <span style={{ color: "#00ff93" }}>Software Engineering</span> and
            consider myself a full-time geek, always eager to delve into the
            <span style={{ color: "#00ff93" }}> latest technologies</span> and
            acquire new knowledge. My journey into software development was
            sparked by my interest in gaming.{" "}
            <span style={{ color: "#00ff93" }}>I love what I do!</span> I'm
            currently immersed in my practical semester, gaining{" "}
            <span style={{ color: "#00ff93" }}>hands-on experience</span> in the
            field. Feel free to join me on this learning adventure and get a
            glimpse into my world of software engineering.
          </h2>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
