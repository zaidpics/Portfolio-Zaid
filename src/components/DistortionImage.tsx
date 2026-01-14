import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Vertex Shader
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Fragment Shader
const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uHover;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  
  // Calculate distance from mouse
  float dist = distance(uv, uMouse);
  
  // Distortion ripple effect
  float wave = sin(dist * 10.0 - uTime * 2.0) * 0.5 + 0.5;
  float distortion = (1.0 - smoothstep(0.0, 0.4, dist)) * uHover;
  
  vec2 distortedUv = uv + (uMouse - uv) * distortion * 0.1 * wave;

  // RGB Shift
  float rgbShift = distortion * 0.03;
  float r = texture2D(uTexture, distortedUv + vec2(rgbShift, 0.0)).r;
  float g = texture2D(uTexture, distortedUv).g;
  float b = texture2D(uTexture, distortedUv - vec2(rgbShift, 0.0)).b;

  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

const ImagePlane = ({ imageUrl }: { imageUrl: string }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture(imageUrl);

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uHover: { value: 0 },
            uTime: { value: 0 },
        }),
        [texture]
    );

    useFrame((state) => {
        if (meshRef.current) {
            // Small continuous flow
            uniforms.uTime.value = state.clock.getElapsedTime();

            // Smoothly interpolate hover strength
            const targetHover = meshRef.current.userData.isHovered ? 1 : 0;
            uniforms.uHover.value = THREE.MathUtils.lerp(uniforms.uHover.value, targetHover, 0.1);
        }
    });

    const handlePointerMove = (e: any) => {
        // uv is intersection point (0..1)
        if (e.uv) {
            uniforms.uMouse.value.set(e.uv.x, e.uv.y);
        }
    };

    const { viewport } = useThree();

    return (
        <mesh
            ref={meshRef}
            scale={[viewport.width, viewport.height, 1]}
            onPointerOver={() => (meshRef.current!.userData.isHovered = true)}
            onPointerOut={() => (meshRef.current!.userData.isHovered = false)}
            onPointerMove={handlePointerMove}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

interface DistortionImageProps {
    image: string;
}

const DistortionImage = ({ image }: DistortionImageProps) => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '400px', borderRadius: '20px', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <React.Suspense fallback={null}>
                    <ImagePlane imageUrl={image} />
                </React.Suspense>
            </Canvas>
        </div>
    );
};

export default DistortionImage;
