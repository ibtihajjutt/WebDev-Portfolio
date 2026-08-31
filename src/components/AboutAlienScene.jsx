import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Alien } from "../models/Alien";

const AboutAlienScene = () => {
  return (
    <Canvas dpr={[1, 1.5]} gl={{ antialias: false }}>
      <ambientLight />
      <OrbitControls enableZoom={false} />
      <Alien scale={2} position={[0, -5.5, 0]} rotation={[0, -0.5, 0]} />
    </Canvas>
  );
};

export default AboutAlienScene;
