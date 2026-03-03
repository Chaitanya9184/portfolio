'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Globe ─────────────────────────────────────────────── */
function Globe() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireRef = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (meshRef.current) meshRef.current.rotation.y += delta * 0.08;
        if (wireRef.current) wireRef.current.rotation.y += delta * 0.08;
    });

    return (
        <group>
            {/* Solid inner sphere — subtle glow */}
            <Sphere ref={meshRef} args={[2.2, 64, 64]}>
                <MeshDistortMaterial
                    color="#0a1628"
                    emissive="#0d2545"
                    emissiveIntensity={0.6}
                    distort={0.08}
                    speed={1.2}
                    metalness={0.4}
                    roughness={0.7}
                    transparent
                    opacity={0.85}
                />
            </Sphere>

            {/* Wireframe overlay */}
            <Sphere ref={wireRef} args={[2.22, 28, 28]}>
                <meshBasicMaterial
                    color="#1a6bff"
                    wireframe
                    transparent
                    opacity={0.18}
                />
            </Sphere>

            {/* Outer glow halo */}
            <Sphere args={[2.7, 32, 32]}>
                <meshBasicMaterial
                    color="#0066ff"
                    transparent
                    opacity={0.04}
                    side={THREE.BackSide}
                />
            </Sphere>
        </group>
    );
}

/* ─── Orbiting Node ──────────────────────────────────────── */
interface NodeProps {
    radius: number;
    speed: number;
    phase: number;
    inclination: number;
    color: string;
}

function OrbitingNode({ radius, speed, phase, inclination, color }: NodeProps) {
    const ref = useRef<THREE.Mesh>(null);
    const trailRef = useRef<{ x: number; y: number; z: number }[]>([]);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed + phase;
        const x = Math.cos(t) * radius;
        const z = Math.sin(t) * radius;
        const y = Math.sin(t + inclination) * radius * 0.4;

        if (ref.current) {
            ref.current.position.set(x, y, z);
        }

        trailRef.current.push({ x, y, z });
        if (trailRef.current.length > 20) trailRef.current.shift();
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2}
                roughness={0}
                metalness={0.8}
            />
        </mesh>
    );
}

/* ─── Orbit Ring ─────────────────────────────────────────── */
function OrbitRing({ radius, inclination, color }: { radius: number; inclination: number; color: string }) {
    const points = useMemo(() => {
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i <= 128; i++) {
            const angle = (i / 128) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle + inclination) * radius * 0.4, Math.sin(angle) * radius));
        }
        return pts;
    }, [radius, inclination]);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return geo;
    }, [points]);

    return (
        <line geometry={geometry}>
            <lineBasicMaterial color={color} transparent opacity={0.12} />
        </line>
    );
}

/* ─── Floating Particles ─────────────────────────────────── */
function FloatingParticles() {
    const ref = useRef<THREE.Points>(null);

    const { positions, colors } = useMemo(() => {
        const count = 200;
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const palette = [
            new THREE.Color('#1a6bff'),
            new THREE.Color('#00d4ff'),
            new THREE.Color('#7c3aed'),
            new THREE.Color('#10b981'),
        ];

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 3.5 + Math.random() * 5;
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.cos(phi);
            positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
            const c = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
        }
        return { positions, colors };
    }, []);

    useFrame((_, delta) => {
        if (ref.current) ref.current.rotation.y += delta * 0.015;
    });

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [positions, colors]);

    return (
        <points ref={ref} geometry={geometry}>
            <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} sizeAttenuation />
        </points>
    );
}

/* ─── Scene ──────────────────────────────────────────────── */
const NODES = [
    { radius: 3.5, speed: 0.4, phase: 0, inclination: 0.4, color: '#00d4ff' },
    { radius: 3.8, speed: 0.28, phase: 2.1, inclination: -0.8, color: '#1a6bff' },
    { radius: 4.2, speed: 0.35, phase: 4.2, inclination: 1.2, color: '#10b981' },
    { radius: 3.3, speed: 0.5, phase: 1.0, inclination: -0.3, color: '#7c3aed' },
    { radius: 4.5, speed: 0.22, phase: 3.5, inclination: 0.9, color: '#00d4ff' },
    { radius: 3.6, speed: 0.45, phase: 5.8, inclination: -1.1, color: '#f59e0b' },
    { radius: 4.0, speed: 0.31, phase: 0.7, inclination: 0.6, color: '#1a6bff' },
    { radius: 3.4, speed: 0.55, phase: 2.8, inclination: -0.5, color: '#10b981' },
];

function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#4488ff" />
            <pointLight position={[-10, -5, -5]} intensity={0.8} color="#00d4ff" />
            <pointLight position={[0, -10, 5]} intensity={0.5} color="#7c3aed" />

            <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={0.5} />

            <Globe />
            <FloatingParticles />

            {NODES.map((n, i) => (
                <group key={i}>
                    <OrbitRing radius={n.radius} inclination={n.inclination} color={n.color} />
                    <OrbitingNode {...n} />
                </group>
            ))}

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.4}
                enableDamping
                dampingFactor={0.05}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI * 3 / 4}
            />
        </>
    );
}

/* ─── Export ─────────────────────────────────────────────── */
export default function ThreeHero() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
