import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

export const LoadingScreen = (props) => {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    console.log(progress, total, loaded, item);
    if (progress == 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 50,
        transition: "opacity 1000ms",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        opacity: started ? 0 : 1,
      }}
    >
      <div
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "#00ff93",
          position: "relative",
          fontFamily: '"M PLUS 1 CODE", Arial, monospace',
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            transition: "width 500ms",
            width: `${progress}%`,
          }}
        >
          Oguzhan Yildirim
        </div>
        <div
          style={{
            opacity: 0.1,
            fontFamily: '"M PLUS 1 CODE", Arial, monospace',
          }}
        >
          Oguzhan Yildirim
        </div>
      </div>
    </div>
  );
};
export default LoadingScreen;
