import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Boy } from "../models/Boy";

const HeroExperience = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,40,213,0.18),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(28,52,255,0.22),transparent_32%),linear-gradient(180deg,rgba(11,6,32,0.1),rgba(11,6,32,0.8))]" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-grid" />

      <Canvas
        className="!absolute inset-0"
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight />
        <directionalLight position={[-2, 0, 3]} intensity={3} color="#FF28D5" />
        <directionalLight position={[2, 0, 3]} intensity={3} color="#1C34FF" />
        <Sparkles count={45} size={2} speed={0.45} scale={[10, 10, 2]} color="pink" />
        <group>
          <Boy scale={9} position={[0, -15, 0]} />
        </group>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
