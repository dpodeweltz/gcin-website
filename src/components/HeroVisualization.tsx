// src/components/HeroVisualization.tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// *** FIXED: Removed unused useState ***
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { MathUtils } from 'three';

// Generate points using useMemo (remains the same)
function usePointData(count = 6000) {
    return useMemo(() => {
        const points = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();
        for (let i = 0; i < points.length; i += 3) {
            const r = 7 + Math.random() * 8;
            const phi = Math.acos(2 * Math.random() - 1);
            const theta = Math.random() * Math.PI * 2;
            points[i] = r * Math.sin(phi) * Math.cos(theta);
            points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            points[i + 2] = r * Math.cos(phi);
            // Use project colors - Orange and Blue/Violet
            color.set(Math.random() > 0.5 ? '#FF9F70' : '#AA66FF'); // Lighter Orange/Violet
            colors[i] = color.r;
            colors[i + 1] = color.g;
            colors[i + 2] = color.b;
        }
        return { positions: points, colors };
    }, [count]);
}

// Component for the points and effects (remains largely the same structure)
function PointCloudEffects() {
    const pointsRef = useRef<THREE.Points>(null);
    const materialRef = useRef<THREE.PointsMaterial>(null);
    const flowPointsRef = useRef<THREE.Points>(null);
    const flowMaterialRef = useRef<THREE.PointsMaterial>(null);

    const pointData = usePointData(6000);

    const flowData = useMemo(() => {
        const count = 150; // Increased flow points slightly
        const positions = new Float32Array(count * 3);
        const originalPositions = [];
        const targetScales = [];
        const animationOffsets = []; // Add random offset for variety

        for (let i = 0; i < count; i++) {
            const mainIndex = Math.floor(Math.random() * (pointData.positions.length / 3)) * 3;
            const x = pointData.positions[mainIndex];
            const y = pointData.positions[mainIndex + 1];
            const z = pointData.positions[mainIndex + 2];
            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            originalPositions.push(new THREE.Vector3(x, y, z));
            targetScales.push(Math.random() * 4 + 1); // Slightly larger max scale
            animationOffsets.push(Math.random() * Math.PI * 2); // Random start time
        }
        return { positions, originalPositions, targetScales, animationOffsets };
    }, [pointData.positions]);

    const currentScales = useRef<number[]>(new Array(flowData.originalPositions.length).fill(1)).current;

    useFrame((state, delta) => {
        const elapsedTime = state.clock.getElapsedTime();

        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
        }

        // Animate main point size (Subtle pulse)
        if (materialRef.current) {
            materialRef.current.size = 0.12 + Math.sin(elapsedTime * 0.5) * 0.01; // Increased base, smaller pulse
        }

        // Animate "Flow" points
        if (flowPointsRef.current && flowPointsRef.current.geometry.attributes.position) {
            const positions = flowPointsRef.current.geometry.attributes.position.array as Float32Array;
            const cycleDuration = 4; // Faster cycle

            for (let i = 0; i < flowData.originalPositions.length; i++) {
                const progress = ((elapsedTime + flowData.animationOffsets[i]) % cycleDuration) / cycleDuration;
                const easedProgress = Math.sin(progress * Math.PI); // 0 -> 1 -> 0

                const originalPos = flowData.originalPositions[i];
                const targetScale = flowData.targetScales[i];
                const currentScale = MathUtils.lerp(1, targetScale, easedProgress);
                currentScales[i] = currentScale;

                // Animate position slightly outward
                const currentPos = originalPos.clone().multiplyScalar(MathUtils.lerp(1, 1.15, easedProgress)); // Move 15% outwards

                positions[i * 3] = currentPos.x;
                positions[i * 3 + 1] = currentPos.y;
                positions[i * 3 + 2] = currentPos.z;

                // Animate size/opacity of flow points
                if (flowMaterialRef.current) {
                    // Make points larger and fully opaque at peak, fade otherwise
                    flowMaterialRef.current.size = MathUtils.lerp(0.05, 0.3, easedProgress); // More size variation
                    flowMaterialRef.current.opacity = easedProgress * 0.8 + 0.2; // Fade in/out more
                }
            }
            flowPointsRef.current.geometry.attributes.position.needsUpdate = true;
            // Important: If material props are uniform, setting needsUpdate isn't needed.
            // If we were setting individual point sizes/opacities (more complex),
            // we would need geometry.attributes.size.needsUpdate = true etc.
        }
    });

    return (
        <>
            {/* Main Point Cloud */}
            <Points ref={pointsRef} positions={pointData.positions} colors={pointData.colors} stride={3}>
                <PointMaterial
                    ref={materialRef}
                    transparent
                    vertexColors // Use the generated colors!
                    size={0.12} // Base size
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* "Flow" Point Cloud */}
            <Points ref={flowPointsRef} positions={flowData.positions} stride={3}>
                <PointMaterial
                    ref={flowMaterialRef}
                    transparent
                    color="#FFA500" // Bright Orange
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>
        </>
    );
}

export default function HeroVisualization() {
    return (
        <div className="absolute inset-0 z-0 bg-[#0c1a1f]">
            <Canvas camera={{ position: [0, 0, 20], fov: 50 }}> {/* Slightly backed up camera */}
                <color attach="background" args={['#0c1a1f']} />
                <fog attach="fog" args={['#0c1a1f', 18, 35]} />

                <ambientLight intensity={0.15} /> {/* Slightly brighter ambient */}
                {/* *** FIXED HemisphereLight props *** */}
                <hemisphereLight args={['#8A2BE2', '#2E8B57', 0.8]} /> {/* sky, ground, intensity */}

                {/* *** STRONGER Spotlights *** */}
                <spotLight
                    position={[-25, 20, -10]} intensity={100.0} color="#FF7F50" // Much stronger intensity
                    angle={0.4} penumbra={0.6} distance={150} castShadow={false} // Wider angle
                />
                <spotLight
                    position={[25, 20, 10]} intensity={100.0} color="#8A2BE2" // Much stronger intensity
                    angle={0.4} penumbra={0.6} distance={150} castShadow={false} // Wider angle
                />

                <PointCloudEffects />
            </Canvas>
        </div>
    );
}