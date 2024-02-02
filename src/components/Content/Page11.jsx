import React from "react";

const Page11 = ({ p11Opacity, pIs11Visible, handleClick, buttonText }) => {
  return (
    <div
      position={[0, 0.0, 0]}
      style={{ opacity: p11Opacity, transition: "opacity 1s" }}
    >
      {pIs11Visible && (
        <div
          style={{
            backgroundColor: "black",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "-50vh",
            left: "-50vw",
            color: "white",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>This is Page 11</h1>
          <p>This is some content.</p>
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
        </div>
      )}
    </div>
  );
};

export default Page11;
