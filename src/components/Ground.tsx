import { useBox } from "@react-three/cannon";
import { MeshProps } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh, BufferGeometry, NormalBufferAttributes, Material } from "three";

const Ground: FC<MeshProps> = (props) => {
  const [ref, api] = useBox(() => ({ mass: -1, position: [0, -1, 0], collisionFilterGroup: 1 }));

  const depth = 1;

  return (
    <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}>
      <boxGeometry args={[2, 1, depth]} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default Ground;