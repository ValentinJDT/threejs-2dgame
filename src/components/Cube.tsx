import { MeshProps, Camera } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh, BufferGeometry, NormalBufferAttributes, Material, Color } from "three";

const Cube: FC<MeshProps> = (props) => {
  const mesh = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null);

  const depth = 1;

  return (
    <mesh {...props} ref={mesh}>
        
      <boxGeometry args={[1, 1, depth]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Cube;
