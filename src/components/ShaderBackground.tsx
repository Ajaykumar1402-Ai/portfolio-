import React, { useRef, useMemo } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    // Fluid distortion
    vec2 q = vec2(0.);
    q.x = snoise(st + 0.00 * uTime);
    q.y = snoise(st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = snoise(st + 1.0 * q + vec2(1.7, 9.2) + 0.15 * uTime);
    r.y = snoise(st + 1.0 * q + vec2(8.3, 2.8) + 0.126 * uTime);

    float f = snoise(st + r);

    // Deep Obsidian / Titanium / Rose Gold / Amber Palette (NO BLUE)
    // Base: Deep dark charcoal
    vec3 color = mix(vec3(0.02, 0.02, 0.02), vec3(0.1, 0.08, 0.12), clamp((f*f)*4.0,0.0,1.0));

    // Liquid Titanium/Silver waves
    color = mix(color, vec3(0.6, 0.55, 0.58), clamp(length(q),0.0,1.0));

    // Molten Rose Gold / Amber highlights
    color = mix(color, vec3(0.9, 0.3, 0.4), clamp(length(r.x),0.0,1.0)); // Deep Crimson/Rose
    color = mix(color, vec3(1.0, 0.6, 0.1), clamp(length(r.y)*0.5,0.0,1.0)); // Warm Amber

    // Add extra smooth noise overlay for "luxury grain"
    float noise = (fract(sin(dot(vUv, vec2(12.9898,78.233))) * 43758.5453) - 0.5) * 0.05;
    
    // Vignette
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float vignette = smoothstep(0.8, 0.2, dist);
    
    gl_FragColor = vec4((color + noise) * vignette, 1.0);
  }
`;

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime * 0.5; // Smooth slow motion
    }
  });

  // Handle resize
  React.useEffect(() => {
    const handleResize = () => {
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [uniforms]);

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export const ShaderBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black">
      <Canvas orthographic camera={{ position: [0, 0, 1], zoom: 1 }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
};
