import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Room } from "./Room";
import { Interface } from "./interface";
import { useRef } from "react";
// ...

export const Experience = () => {
  // ...

  const [clickedP1, setClickP1] = useState(false);
  const [clickedP2, setClickP2] = useState(false);
  const [clickedP3, setClickP3] = useState(false);
  const [clickedP4, setClickP4] = useState(false);
  const [clickedP5, setClickP5] = useState(false);
  const [clickedP6, setClickP6] = useState(false);
  const [clickedP7, setClickP7] = useState(false);
  const [clickedP8, setClickP8] = useState(false);
  const [clickedP9, setClickP9] = useState(false);
  const [clickedP10, setClickP10] = useState(false);
  const [clickedP11, setClickP11] = useState(false);
  const [clickedP12, setClickP12] = useState(false);
  const [clickedP13, setClickP13] = useState(false);
  const [hoveredP1, setHoverP1] = useState(false);
  const [hoveredP2, setHoverP2] = useState(false);
  const [hoveredP3, setHoverP3] = useState(false);
  const [hoveredP4, setHoverP4] = useState(false);
  const [hoveredP5, setHoverP5] = useState(false);
  const [hoveredP6, setHoverP6] = useState(false);
  const [hoveredP7, setHoverP7] = useState(false);
  const [hoveredP8, setHoverP8] = useState(false);
  const [hoveredP9, setHoverP9] = useState(false);
  const [hoveredP10, setHoverP10] = useState(false);
  const [hoveredP11, setHoverP11] = useState(false);
  const [hoveredP12, setHoverP12] = useState(false);
  const [hoveredP13, setHoverP13] = useState(false);
  const [light1, setLight1] = useState(2.1);
  const [light2, setLight2] = useState(0.4);
  const [light3, setLight3] = useState(5.1);

  const pointLightProps = {
    position: [0, 1, 0.2],
    intensity: light1,
    color: "#ccffff",
    distance: 2.5,
  };

  const pointLightProps2 = {
    position: [0, 0.1, 0.0],
    intensity: light2,
    color: "#ffffff",
    distance: 1,
  };

  const pointLightProps1 = {
    position: [0, -1, -0.2],
    intensity: light3,
    color: "#ffffff",
    distance: 1.5,
  };

  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <mesh
        onClick={() => {
          setClickP1(true), setHoverP1(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP1(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP1(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.003, -0.0015, -0.05]}
        rotation={[Math.PI / 1, 1.6, 0]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.052, 0.097]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP1 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP2(true), setHoverP2(!hoveredP2), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP2(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP2(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.086, 0.007, -0.01]}
        rotation={[Math.PI / 1, 2.1, 0]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.05, 0.095]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP2 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP3(true), setHoverP3(!hoveredP3), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP3(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP3(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.125, 0.06, -0.01]}
        rotation={[Math.PI / 1, 2.25, 0]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.032, 0.057]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP3 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP4(true), setHoverP4(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP4(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP4(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.0682, 0.0835, -0.014]}
        rotation={[Math.PI / 1, 1.75, 0.3]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.028, 0.03]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP4 ? 0.6 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP5(true), setHoverP5(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP5(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP5(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.0125, 0.0825, -0.016]}
        rotation={[Math.PI / 1.01, 1.6, 0.3]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.036, 0.053]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP5 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP6(true), setHoverP6(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            if (hover) {
              e.stopPropagation();
              setHoverP6(true);

              document.body.style.cursor = "pointer"; // Change cursor to pointer}
            }
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP6(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.0565, 0.0695, -0.016]}
        rotation={[Math.PI / 1, 1.6, 0.3]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.0245, 0.032]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP6 ? 0.6 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP7(true), setHoverP7(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP7(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP7(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.1089, 0.1019, -0.0]}
        rotation={[Math.PI / 1, 0.9, 0.3]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.031, 0.046]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP7 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP8(true), setHoverP8(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP8(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP8(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.1035, 0.043, -0.02]}
        rotation={[Math.PI / 1, 0.9, 0.33]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.028, 0.03]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP8 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP9(true), setHoverP9(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP9(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP9(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.085, 0.008, 0.028]}
        rotation={[Math.PI / 1, 0.75, 0]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.024, 0.029]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP9 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP10(true), setHoverP10(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP10(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP10(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[-0.114, -0.012, 0.0395]}
        rotation={[Math.PI / 1, 0.39, -1.1]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.0245, 0.0245]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP10 ? 0.3 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP11(true), setHoverP11(false), setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP11(true);

            document.body.style.cursor = "pointer"; // Change cursor to pointer}
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP11(false);

            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.127, -0.019, 0.039]}
        rotation={[Math.PI / 1, -0.35, 1.1]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.024, 0.025]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP11 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP12(true);
          setHoverP12(false);
          setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP12(true);
            document.body.style.cursor = "pointer";
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP12(false);
            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.073, -0.018, 0.039]}
        rotation={[Math.PI / 1, -0.98, 1.2]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.027, 0.026]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP12 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <mesh
        onClick={() => {
          setClickP13(true);
          setHoverP13(false);
          setVisible(!visible);
        }}
        onPointerOver={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP13(true);
            document.body.style.cursor = "pointer";
          }
        }}
        onPointerOut={(e) => {
          if (hover) {
            e.stopPropagation();
            setHoverP13(false);
            document.body.style.cursor = "auto"; // Change cursor to pointer}
          }
        }}
        position={[0.16, 0.05399, 0.051]}
        rotation={[Math.PI / 1, -0, 0]}
        scale={visible ? [1, 1, 1] : [0, 0, 0]}
      >
        <boxGeometry args={[0.0001, 0.0247, 0.0285]} />
        <meshStandardMaterial
          transparent
          opacity={hoveredP13 ? 0.5 : 0}
          color="white"
        />
      </mesh>
      <Avatar />
      <Room position={[0, 0, 0]} />
      {/* Erstelle ein interaktives Mesh mit einem Klick-Event */}
      <spotLight {...pointLightProps} />
      <pointLight {...pointLightProps1} />
      <pointLight {...pointLightProps2} />
      <Interface
        clickedP1={clickedP1}
        clickedP2={clickedP2}
        clickedP3={clickedP3}
        clickedP4={clickedP4}
        clickedP5={clickedP5}
        clickedP6={clickedP6}
        clickedP7={clickedP7}
        clickedP8={clickedP8}
        clickedP9={clickedP9}
        clickedP10={clickedP10}
        clickedP11={clickedP11}
        clickedP12={clickedP12}
        clickedP13={clickedP13}
        setClickP1={setClickP1}
        setClickP2={setClickP2}
        setClickP3={setClickP3}
        setClickP4={setClickP4}
        setClickP5={setClickP5}
        setClickP6={setClickP6}
        setClickP7={setClickP7}
        setClickP8={setClickP8}
        setClickP9={setClickP9}
        setClickP10={setClickP10}
        setClickP11={setClickP11}
        setClickP12={setClickP12}
        setClickP13={setClickP13}
        setHover={setHover}
        hover={hover}
        visible={visible}
        setVisible={setVisible}
        // add as many props as you need
      />{" "}
    </>
  );
};

export default Experience;
