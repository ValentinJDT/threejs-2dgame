import { Canvas, useFrame } from "@react-three/fiber";
import { FC, useEffect, useRef } from "react";
import Cube from "../components/Cube";
import Ground from "../components/Ground";
import {
  CameraControls,
  FaceControls,
  Grid,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import Camera from "../components/Camera";
import KeyListener from "../listener/KeyListener";
import PlayerEntity from "../entity/PlayerEntity";
import { Physics } from "@react-three/cannon";

interface Props {}

const MainScene: FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // canvasRef.current.height = 1200
    }
  }, [canvasRef]);

  return (
    <Canvas
      style={{
        height: "500px",
        width: "500px",
        border: "#000000 solid",
      }}
      ref={canvasRef}
    >
      <Physics gravity={[0, -30, 0]}>

        <ambientLight />
        <pointLight position={[0, 10, 0]} />

        <Camera />
        <PlayerEntity id="Player1" showId color={"red"} location={[0, 0]} movable />

        <Ground />
      </Physics>

      <KeyListener />
      <axesHelper />
    </Canvas>
  );
};

export default MainScene;
