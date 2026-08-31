import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import { ContactBoy } from "../models/ContactBoy";

const ContactExperience = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_0_80px_rgba(89,142,255,0.2)]">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <ambientLight intensity={2} />
        <directionalLight position={[-5, 5, 5]} intensity={5} color="#1C34FF" />
        <group rotation={[0, -0.5, 0]}>
          <Text3D
            position={[-6, -3, -4]}
            curveSegments={24}
            bevelEnabled
            bevelSize={0.03}
            bevelThickness={0.08}
            height={0.4}
            letterSpacing={0.02}
            size={1.2}
            font="/WebDev-Portfolio/fonts/Inter_Bold.json"
          >
            {"Hello\nWorld!"}
            <meshNormalMaterial />
          </Text3D>
          <ContactBoy scale={2.2} position={[0, -3, 0]} />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;