import { FC, useEffect, useState } from "react";
import { EntityProps } from "./Entity";
import { Color } from "@react-three/fiber";
import { Capsule } from "@react-three/drei";
import { useBox, Triplet } from "@react-three/cannon";
import { BufferGeometry, Mesh, Vector3 } from "three";
import { useEventRegister } from "../utils/EventRegister";

type PlayerEntityProps = EntityProps & {
  showId: boolean;
  color: Color;
  movable: boolean;
};

const PlayerEntity: FC<PlayerEntityProps> = (props) => {


  const [jumping, setJumping] = useState(false);

  const onCol = () => {
    console.log("Colide")
    setJumping(false);
  }

  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 5, 0], angularDamping: 1, fixedRotation: true, onCollide: onCol, linearDamping: 0 }));

  const eventRegister = useEventRegister();

  useEffect(() => {
    if (!props.movable) return;

    const event = eventRegister.register("keys", ([keys]) => {
      // console.log(keys)

      const velo: Triplet = [0, 0, 0]
      if (keys["KeyA"]) {
        velo[0] = -3
      }

      if (keys["KeyD"]) {
        velo[0] = 3
      }

      if (keys["KeyW"] && jumping == false) {
        velo[1] = 10
        setJumping(true);
      }

      if(velo.some((value) => value != 0)) {
        api.velocity.set(velo[0], velo[1], velo[2]);
      }

    });

    return () => {
      eventRegister.unregiter(event);
    };
  }, [jumping]);

  return (
    <Capsule
      ref={ref as React.RefObject<Mesh<BufferGeometry>>}
      args={[0.5, 2]}
    ></Capsule>
  );
};

export default PlayerEntity;
