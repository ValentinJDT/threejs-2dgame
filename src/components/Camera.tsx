import { CameraControls, OrthographicCamera } from "@react-three/drei";
import { FC, useRef } from "react";

const Camera: FC = () => {
  const cameraRef = useRef();

  return (
    <>
      <OrthographicCamera ref={cameraRef} />
      <CameraControls
        // maxPolarAngle={toRadians(85)}
        // minPolarAngle={toRadians(85)}
        // minAzimuthAngle={toRadians(0)}
        // maxAzimuthAngle={toRadians(0)}
        camera={cameraRef.current}
      />
    </>
  );
};

// Convert from degrees to radians.
const toRadians = function (degrees: number) {
  return (degrees * Math.PI) / 180;
};

// Convert from radians to degrees.
const toDegree = (radians: number) => {
  return (radians * 180) / Math.PI;
};

export default Camera;
