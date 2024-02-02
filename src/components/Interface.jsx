import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import "./menu.css";
import "./interface.css";
import { useMotionValue, animate } from "framer-motion";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";
import Home from "./Home";
import HomeButton from "./HomeButton";
import Page1 from "./Content/Page1";
import Page2 from "./Content/Page2";
import Page3 from "./Content/Page3";
import Page4 from "./Content/Page4";
import Page5 from "./Content/Page5";
import Page6 from "./Content/Page6";
import Page7 from "./Content/Page7";
import Page8 from "./Content/Page8";
import Page9 from "./Content/Page9";
import Page10 from "./Content/Page10";
import Page11 from "./Content/Page11";
import Page12 from "./Content/Page12";
import Page13 from "./Content/Page13";
export const Interface = (props) => {
  const { clickedP1, setClickP1 } = props;
  const { clickedP2, setClickP2 } = props;
  const { clickedP3, setClickP3 } = props;
  const { clickedP4, setClickP4 } = props;
  const { clickedP5, setClickP5 } = props;
  const { clickedP6, setClickP6 } = props;
  const { clickedP7, setClickP7 } = props;
  const { clickedP8, setClickP8 } = props;
  const { clickedP9, setClickP9 } = props;
  const { clickedP10, setClickP10 } = props;
  const { clickedP11, setClickP11 } = props;
  const { clickedP12, setClickP12 } = props;
  const { clickedP13, setClickP13 } = props;
  const [p1isVisible, setp1IsVisible] = useState(false);
  const [pIs1Visible, setp2IsVisible] = useState(false);
  const [pIs3Visible, setp3IsVisible] = useState(false);
  const [pIs4Visible, setp4IsVisible] = useState(false);
  const [pIs5Visible, setp5IsVisible] = useState(false);
  const [pIs6Visible, setp6IsVisible] = useState(false);
  const [pIs7Visible, setp7IsVisible] = useState(false);
  const [pIs8Visible, setp8IsVisible] = useState(false);
  const [pIs9Visible, setp9IsVisible] = useState(false);
  const [pIs10Visible, setp10IsVisible] = useState(false);
  const [pIs11Visible, setp11IsVisible] = useState(false);
  const [pIs12Visible, setp12IsVisible] = useState(false);
  const [pIs13Visible, setp13IsVisible] = useState(false);

  const [p1Opacity, setP1Opacity] = useState(0);
  const [p2Opacity, setP2Opacity] = useState(0);
  const [p3Opacity, setP3Opacity] = useState(0);
  const [p4Opacity, setP4Opacity] = useState(0);
  const [p5Opacity, setP5Opacity] = useState(0);
  const [p6Opacity, setP6Opacity] = useState(0);
  const [p7Opacity, setP7Opacity] = useState(0);
  const [p8Opacity, setP8Opacity] = useState(0);
  const [p9Opacity, setP9Opacity] = useState(0);
  const [p10Opacity, setP10Opacity] = useState(0);
  const [p11Opacity, setP11Opacity] = useState(0);
  const [p12Opacity, setP12Opacity] = useState(0);
  const [p13Opacity, setP13Opacity] = useState(0);

  const [light1, setLight1] = useState(0);
  const [light2, setLight2] = useState(0);
  const [light3, setLight3] = useState(0);

  const { visible, setVisible } = props;
  const { hover, setHover } = props;
  const [buttonText, setButtonText] = useState("Home");
  const [buttonPosition, setButtonPosition] = useState([0.07, -0.01, 0]);
  const [start, setAnimateCamera] = useState(false);
  const cameraPositionX = useMotionValue(-5.7);
  const cameraLookAtX = useMotionValue(-0);
  const cameraPositionY = useMotionValue(0.15);
  const cameraLookAtY = useMotionValue(0.06);
  const cameraPositionZ = useMotionValue(0.2);
  const cameraLookAtZ = useMotionValue(0.2);
  const CameraAnimation = ({ start, setTest }) => {
    useEffect(() => {
      const duration = 0.67; // Dauer der Animation in Sekunden

      if (clickedP6) {
        animate(cameraPositionY, 0.07, { duration });
        animate(cameraPositionZ, 0.058, { duration });
        animate(cameraPositionX, -0.05, { duration });

        animate(cameraLookAtX, -0.05, { duration });
        animate(cameraLookAtY, 0.06, { duration });
        animate(cameraLookAtZ, 0, { duration });
        setP6Opacity(1);
        setp6IsVisible(true);
      } else if (clickedP5) {
        animate(cameraPositionY, 0.07, { duration });
        animate(cameraPositionZ, 0.1, { duration });
        animate(cameraPositionX, 0.03, { duration });

        animate(cameraLookAtX, 0.027, { duration });
        animate(cameraLookAtY, 0.07, { duration });
        animate(cameraLookAtZ, 0, { duration });
        setP5Opacity(1);
        setp5IsVisible(true);
      } else if (clickedP7) {
        animate(cameraPositionY, 0.09, { duration });
        animate(cameraPositionZ, 0.055, { duration });
        animate(cameraPositionX, -0.09, { duration });

        animate(cameraLookAtX, -0.1, { duration });
        animate(cameraLookAtY, 0.085, { duration });
        animate(cameraLookAtZ, 0, { duration });
        setP7Opacity(1);
        setp7IsVisible(true);
      } else if (clickedP9) {
        animate(cameraPositionY, 0.04, { duration });
        animate(cameraPositionZ, 0.06, { duration });
        animate(cameraPositionX, -0.01, { duration });

        animate(cameraLookAtX, -0.06, { duration });
        animate(cameraLookAtY, -0.01, { duration });
        animate(cameraLookAtZ, -0.0, { duration });
        setP9Opacity(1);
        setp9IsVisible(true);
      } else if (clickedP8) {
        animate(cameraPositionY, 0.03, { duration });
        animate(cameraPositionZ, 0.057, { duration });
        animate(cameraPositionX, -0.03, { duration });

        animate(cameraLookAtX, -0.07, { duration });
        animate(cameraLookAtY, 0.03, { duration });
        animate(cameraLookAtZ, -0.0, { duration });
        setP8Opacity(1);
        setp8IsVisible(true);
      } else if (clickedP12) {
        animate(cameraPositionY, 0.1, { duration });
        animate(cameraPositionZ, 0.1, { duration });
        animate(cameraPositionX, 0.05, { duration });

        animate(cameraLookAtX, 0.075, { duration });
        animate(cameraLookAtY, -0.05, { duration });
        animate(cameraLookAtZ, 0, { duration });
        setP12Opacity(1);
        setp12IsVisible(true);
      } else if (
        start &&
        !clickedP1 &&
        !clickedP2 &&
        !clickedP3 &&
        !clickedP4 &&
        !clickedP5 &&
        !clickedP6 &&
        !clickedP7 &&
        !clickedP8 &&
        !clickedP9 &&
        !clickedP10 &&
        !clickedP11 &&
        !clickedP12 &&
        !clickedP13
      ) {
        animate(cameraPositionX, -0.1, { duration });
        animate(cameraPositionY, 0.2, { duration });
        animate(cameraPositionZ, 0.3, { duration });
        animate(cameraLookAtX, 0, { duration });
        animate(cameraLookAtY, 0.02, { duration });
        animate(cameraLookAtZ, -0, { duration });
      } else if (clickedP1) {
        animate(cameraPositionX, -0, { duration });
        animate(cameraPositionY, 0.1, { duration });
        animate(cameraPositionZ, 0.07, { duration });
        animate(cameraLookAtX, 0, { duration });
        animate(cameraLookAtY, 0.01, { duration });
        animate(cameraLookAtZ, -0.03, { duration });
        setp1IsVisible(true);
        setP1Opacity(1);
      } else if (clickedP2) {
        animate(cameraPositionX, 0.02, { duration });
        animate(cameraPositionY, 0.1, { duration });
        animate(cameraPositionZ, 0.1, { duration });
        animate(cameraLookAtX, 0.07, { duration });
        animate(cameraLookAtY, 0.015, { duration });
        animate(cameraLookAtZ, 0, { duration });
        setP2Opacity(1);
        setp2IsVisible(true);
      } else if (clickedP3) {
        animate(cameraPositionX, 0.07, { duration });
        animate(cameraPositionY, 0.07, { duration });
        animate(cameraPositionZ, 0.07, { duration });
        animate(cameraLookAtX, 0.19, { duration });
        animate(cameraLookAtY, 0.025, { duration });
        animate(cameraLookAtZ, -0.14, { duration });
        setP3Opacity(1);
        setp3IsVisible(true);
      } else if (clickedP4) {
        animate(cameraPositionX, 0.06, { duration });
        animate(cameraPositionY, 0.08, { duration });
        animate(cameraPositionZ, 0.06, { duration });
        animate(cameraLookAtX, 0.1, { duration });
        animate(cameraLookAtY, 0.06, { duration });
        animate(cameraLookAtZ, -0.14, { duration });
        setP4Opacity(1);
        setp4IsVisible(true);
      } else if (clickedP10) {
        animate(cameraPositionX, -0.1, { duration });
        animate(cameraPositionY, 0.1, { duration });
        animate(cameraPositionZ, 0.1, { duration });
        animate(cameraLookAtX, -0.1, { duration });
        animate(cameraLookAtY, -0.3, { duration });
        animate(cameraLookAtZ, -0.2, { duration });
        setP10Opacity(1);
        setp10IsVisible(true);
      } else if (clickedP11) {
        animate(cameraPositionY, 0.1, { duration });
        animate(cameraPositionZ, 0.07, { duration });
        animate(cameraPositionX, 0.05, { duration });

        animate(cameraLookAtX, 0.2, { duration });
        animate(cameraLookAtY, -0.09, { duration });
        animate(cameraLookAtZ, -0.02, { duration });
        setP11Opacity(1);
        setp11IsVisible(true);
      } else if (clickedP13) {
        animate(cameraPositionY, 0.07, { duration });
        animate(cameraPositionZ, 0.075, { duration });
        animate(cameraPositionX, 0.05, { duration });

        animate(cameraLookAtX, 0.2, { duration });
        animate(cameraLookAtY, 0.03, { duration });
        animate(cameraLookAtZ, -0.01, { duration });
        setP13Opacity(1);
        setp13IsVisible(true);
      } else {
        animate(cameraPositionX, -0.7, { duration });
        animate(cameraPositionY, 0.15, { duration });
        animate(cameraPositionZ, 0.2, { duration });
        animate(cameraLookAtX, 0, { duration });
        animate(cameraLookAtY, 0.06, { duration });
        animate(cameraLookAtZ, 0.2, { duration });
      }
    }, [
      start &&
        clickedP1 &&
        clickedP2 &&
        clickedP3 &&
        clickedP4 &&
        clickedP5 &&
        clickedP6 &&
        clickedP7 &&
        clickedP8 &&
        clickedP9 &&
        clickedP10 &&
        clickedP11 &&
        clickedP12,
    ]);

    useFrame((state) => {
      state.camera.position.x = cameraPositionX.get();
      state.camera.position.y = cameraPositionY.get(); // Füge die Aktualisierung für die Y-Achse hinzu
      state.camera.position.z = cameraPositionZ.get(); // Füge die Aktualisierung für die Z-Achse hinzu

      state.camera.lookAt(
        cameraLookAtX.get(),
        cameraLookAtY.get(), // Füge die Aktualisierung für die Y-Achse hinzu
        cameraLookAtZ.get()
      );
    });
  };
  const handleClick = () => {
    setp1IsVisible(false);
    setp2IsVisible(false);
    setp3IsVisible(false);
    setp4IsVisible(false);
    setp5IsVisible(false);
    setp6IsVisible(false);
    setp7IsVisible(false);
    setp8IsVisible(false);
    setp9IsVisible(false);
    setp10IsVisible(false);
    setp11IsVisible(false);
    setp12IsVisible(false);
    setp13IsVisible(false);
    setClickP1(false);
    setClickP2(false);
    setClickP3(false);
    setClickP4(false);
    setClickP5(false);
    setClickP6(false);
    setClickP7(false);
    setClickP8(false);
    setClickP9(false);
    setClickP10(false);
    setClickP11(false);
    setClickP12(false);
    setClickP13(false);
    setP1Opacity(0);
    setP2Opacity(0);
    setP3Opacity(0);
    setP4Opacity(0);
    setP5Opacity(0);
    setP6Opacity(0);
    setP7Opacity(0);
    setP8Opacity(0);
    setP9Opacity(0);
    setP10Opacity(0);
    setP11Opacity(0);
    setP12Opacity(0);
    setP13Opacity(0);
    setButtonPosition(
      buttonPosition[0] === 0.07 ? [-0.13, -0.01, 0] : [0.07, -0.01, 0]
    ); // Change position on click
    setTimeout(() => {
      setVisible(!visible);
    }, 670);
  };

  const handleClick123 = () => {
    setAnimateCamera(!start);
    setTimeout(() => {
      setVisible(!visible);
      setHover(!hover);
    }, 670);
  };

  return (
    <>
      <Html
        position={[0, 0, 0.25]}
        style={{
          position: "relative",
          top: "-65vh",
          width: "800px",
          height: "0vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ height: "90vh" }}>
          <Home start={start} handleClick123={handleClick123} />
        </div>
      </Html>
      <Html style={{ marginTop: "19vh" }}>
        <HomeButton start={start} handleClick123={handleClick123} />
      </Html>
      {/* Page1 */}
      <Html
        position={[-0.003, -0.0015, -0.05]}
        style={{ opacity: p1Opacity, position: "fixed" }}
      >
        <Page1
          p1Opacity={p1Opacity}
          p1isVisible={p1isVisible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page2 */}
      <Html
        position={[0.075, 0.0065, -0.01]}
        style={{ opacity: p2Opacity, transition: "opacity 1s" }}
      >
        <Page2
          p2Opacity={p2Opacity}
          pIs1Visible={pIs1Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page3 */}
      <Html
        position={[0.1155, 0.0528, -0.01]}
        style={{ opacity: p3Opacity, transition: "opacity 1s" }}
      >
        <Page3
          p3Opacity={p3Opacity}
          pIs3Visible={pIs3Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page4 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p4Opacity, transition: "opacity 1s" }}
      >
        <Page4
          p4Opacity={p4Opacity}
          pIs4Visible={pIs4Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page5 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p5Opacity, transition: "opacity 1s" }}
      >
        <Page5
          p5Opacity={p5Opacity}
          pIs5Visible={pIs5Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page6 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p6Opacity, transition: "opacity 1s" }}
      >
        <Page6
          p6Opacity={p6Opacity}
          pIs6Visible={pIs6Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page7 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p7Opacity, transition: "opacity 1s" }}
      >
        <Page7
          p7Opacity={p7Opacity}
          pIs7Visible={pIs7Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page8 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p8Opacity, transition: "opacity 1s" }}
      >
        <Page8
          p8Opacity={p8Opacity}
          pIs8Visible={pIs8Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page9 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p9Opacity, transition: "opacity 1s" }}
      >
        <Page9
          p9Opacity={p9Opacity}
          pIs9Visible={pIs9Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page10 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p10Opacity, transition: "opacity 1s" }}
      >
        <Page10
          p10Opacity={p10Opacity}
          pIs10Visible={pIs10Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page11 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p11Opacity, transition: "opacity 1s" }}
      >
        <Page11
          p11Opacity={p11Opacity}
          pIs11Visible={pIs11Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page12 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p12Opacity, transition: "opacity 1s" }}
      >
        <Page12
          p12Opacity={p12Opacity}
          pIs12Visible={pIs12Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      {/* Page13 */}
      <Html
        position={[0, 0.0, 0]}
        style={{ opacity: p13Opacity, transition: "opacity 1s" }}
      >
        <Page13
          p13Opacity={p13Opacity}
          pIs13Visible={pIs13Visible}
          handleClick={handleClick}
          buttonText={buttonText}
        />
      </Html>
      <CameraAnimation start={start} />{" "}
    </>
  );
};
