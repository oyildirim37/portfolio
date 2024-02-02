// Page1 Component
import React, { useEffect, useRef, useState } from "react";

const Page1 = ({
  setP1Opacity,
  p1Opacity,
  p1isVisible,
  handleClick,
  buttonText,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const lettersArray = letters.split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text =
          lettersArray[Math.floor(Math.random() * lettersArray.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
      }
    }

    const animationInterval = setInterval(draw, 25);

    // Cleanup on component unmount
    return () => clearInterval(animationInterval);
  }, [p1isVisible]);

  return (
    <div
      style={{
        opacity: p1Opacity,
        transition: "1s",
        backgroundColor: "black",
        position: "fixed",
        left: "-48vw",
      }}
    >
      {p1isVisible && (
        <>
          <button
            id="button1"
            onClick={() => {
              handleClick();
            }}
          >
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
            <span>{buttonText}</span>
          </button>
          <h1 style={{ position: "fixed", marginBottom: "10vh" }}>Page1</h1>
        </>
      )}

      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    </div>
  );
};

export default Page1;
