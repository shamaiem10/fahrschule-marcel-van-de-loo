import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function LaneMaterial() {
  // Simple shader stripes moving in X, emissive-like
  const materialRef = useRef();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uTint: { value: [1.0, 0.18, 0.24] },
    uIntensity: { value: 0.7 }
  }), []);
  useFrame((_, d) => {
    uniforms.uTime.value += d * 0.2;
  });
  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={`
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `}
      fragmentShader={`
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uTint;
        uniform float uIntensity;
        // stripe pattern
        float stripes(vec2 uv){
          float x = fract(uv.x*8.0 + uTime);
          float band = step(x, 0.12);
          return band;
        }
        void main(){
          vec2 uv = vUv;
          float s = stripes(uv);
          vec3 base = vec3(0.04,0.06,0.08);
          vec3 glow = uTint * (0.4 + 0.6*step(0.1, s));
          vec3 col = mix(base, glow, uIntensity * s);
          gl_FragColor = vec4(col, 1.0);
        }
      `}
      transparent={false}
    />
  );
}

function SplitPlanes() {
  const leftRef = useRef();
  const rightRef = useRef();
  useFrame(({ pointer }) => {
    const tiltX = (pointer.y - 0.5) * -0.04;
    const tiltY = (pointer.x - 0.5) * 0.04;
    if (leftRef.current) leftRef.current.rotation.set(tiltX, tiltY, -0.18);
    if (rightRef.current) rightRef.current.rotation.set(-tiltX, -tiltY, 0.18);
  });
  return (
    <group>
      <mesh ref={leftRef} position={[-0.4, 0, -0.2]} rotation={[0,0,-0.18]}>
        <planeGeometry args={[1.2, 1.6, 1, 1]} />
        <LaneMaterial />
      </mesh>
      <mesh ref={rightRef} position={[0.4, 0, -0.2]} rotation={[0,0,0.18]}>
        <planeGeometry args={[1.2, 1.6, 1, 1]} />
        <LaneMaterial />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 1.8], fov: 45 }}>
      <color attach="background" args={[0.043, 0.059, 0.078]} />
      <ambientLight intensity={0.7} />
      <SplitPlanes />
    </Canvas>
  );
}
