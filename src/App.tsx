import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import MainScene from './scenes/MainScene';
import { useEventRegister } from './utils/EventRegister';
import { useFrame } from '@react-three/fiber';

function App() {

  const eventRegister = useEventRegister()

  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <MainScene />
    </div>
  );
}

export default App;
