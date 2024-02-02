// Page1 Component
import React, { useEffect, useRef } from "react";

const Page3 = ({ p3Opacity, pIs3Visible, handleClick, buttonText }) => {
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
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const animationInterval = setInterval(draw, 33);

    // Cleanup on component unmount
    return () => clearInterval(animationInterval);
  }, [pIs3Visible]);

  return (
    <div
      style={{
        position: "fixed",
        top: "-50vh",
        left: "-50vw",
        width: "100vw",
        height: "100vh",
        opacity: p3Opacity,
        backgroundColor: "black",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pIs3Visible && (
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
          <h1 style={{ position: "fixed", marginBottom: "10vh" }}>Page3</h1>
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

export default Page3;
