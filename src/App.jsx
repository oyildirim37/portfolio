import React, { Suspense } from "react"; // Use consistent quotes
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas shadows camera={{ fov: 32 }}>
        <color attach="background" args={["#000000"]} />
        {/* Add a comment explaining the purpose of the shadows and fov properties */}
        <ScrollControls pages={0} damping={0.1}>
          <Suspense>{started && <Experience />}</Suspense>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
