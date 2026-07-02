import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParticleSwarm = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles within a sphere
  const sphere = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const InteractiveOrb = () => {
  const orbRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      orbRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={orbRef} args={[1, 64, 64]} position={[4, 0, -2]}>
      <MeshDistortMaterial
        color="#8a8b9e"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#ffffff"
        emissiveIntensity={0.1}
        transparent
        opacity={0.8}
      />
    </Sphere>
  );
};

const CameraRig = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });

    tl.to(camera.position, {
      z: -10,
      y: -5,
      ease: 'none'
    });
    
    tl.to(camera.rotation, {
      x: Math.PI / 8,
      ease: 'none'
    }, 0);

  }, [camera]);

  return null;
};

export const CanvasBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#8a8b9e" />
        <CameraRig />
        <ParticleSwarm />
        <InteractiveOrb />
      </Canvas>
    </div>
  );
};
