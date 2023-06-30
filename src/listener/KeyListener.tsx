import { FC, useEffect } from "react";
import { useEventRegister } from "../utils/EventRegister";
import { useFrame } from "@react-three/fiber";

const KeyListener: FC = () => {
  const keys: { [key: string]: boolean } = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false,
    Shift: false,
  };
  
  const eventRegister = useEventRegister();

  useFrame(() => {
    eventRegister.execute("keys", keys);
  });


  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
    };

    const keyUp = (e: KeyboardEvent) => {
      keys[e.code] = false;
    };

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keydown", keyUp);
    };

  }, []);

  return <></>;
};

export default KeyListener;
