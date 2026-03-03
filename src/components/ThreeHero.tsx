'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, MeshDistortMaterial, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Atmosphere Rim Shader ───────────────────────────────── */
const AtmosphereMaterial = shaderMaterial(
    { glowColor: new THREE.Color('#1a6bff'), intensity: 1.0 },
    `varying vec3 vNormal;
     void main() {
       vNormal = normalize(normalMatrix * normal);
       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
     }`,
    `varying vec3 vNormal;
     uniform vec3 glowColor;
     uniform float intensity;
     void main() {
       float glow = pow(1.0 - dot(vNormal, vec3(0.0,0.0,1.0)), 3.0);
       gl_FragColor = vec4(glowColor * glow * intensity, glow * 0.65);
     }`
);
extend({ AtmosphereMaterial });

/* ─── Globe ─────────────────────────────────────────────── */
function Globe() {
    const coreRef = useRef<THREE.Mesh>(null);
    const wireRef = useRef<THREE.Mesh>(null);
    const wire2Ref = useRef<THREE.Mesh>(null);
    const atmRef = useRef<THREE.Mesh>(null);

    useFrame((_, d) => {
        const r = d * 0.06;
        [coreRef, wireRef, atmRef].forEach(ref => { if (ref.current) ref.current.rotation.y += r; });
        if (wire2Ref.current) wire2Ref.current.rotation.y -= d * 0.03;
    });

    return (
        <group>
            {/* Inner distorted core */}
            <Sphere ref={coreRef} args={[2.0, 64, 64]}>
                <MeshDistortMaterial
                    color="#06112b"
                    emissive="#092450"
                    emissiveIntensity={1.2}
                    distort={0.14}
                    speed={1.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Sphere>

            {/* Fine wireframe */}
            <Sphere ref={wireRef} args={[2.02, 48, 48]}>
                <meshBasicMaterial color="#2266ff" wireframe transparent opacity={0.28}
                    blending={THREE.AdditiveBlending} depthWrite={false} />
            </Sphere>

            {/* Coarser counter-rotating wireframe */}
            <Sphere ref={wire2Ref} args={[2.035, 18, 18]}>
                <meshBasicMaterial color="#00ccff" wireframe transparent opacity={0.14}
                    blending={THREE.AdditiveBlending} depthWrite={false} />
            </Sphere>

            {/* Fake bloom: multiple halos */}
            {[2.35, 2.6, 2.9].map((r, i) => (
                <Sphere key={i} args={[r, 32, 32]}>
                    <meshBasicMaterial
                        color="#0066ff"
                        transparent
                        opacity={0.024 - i * 0.006}
                        side={THREE.BackSide}
                        blending={THREE.AdditiveBlending}
                        depthWrite={false}
                    />
                </Sphere>
            ))}

            {/* Atmosphere rim */}
            <Sphere ref={atmRef} args={[2.55, 32, 32]}>
                {/* @ts-expect-error – atmosphereMaterial is registered via extend() */}
                <atmosphereMaterial
                    glowColor={new THREE.Color('#1a6bff')}
                    intensity={1.5}
                    transparent
                    depthWrite={false}
                    side={THREE.BackSide}
                    blending={THREE.AdditiveBlending}
                />
            </Sphere>
        </group>
    );
}

/* ─── Globe Surface Location Pins ────────────────────────── */
const PIN_LOCATIONS = [
    { lat: 40.7, lon: -74.0, color: '#00d4ff' }, // New York
    { lat: 51.5, lon: -0.1, color: '#10b981' }, // London
    { lat: 35.7, lon: 139.7, color: '#f59e0b' }, // Tokyo
    { lat: 28.6, lon: 77.2, color: '#7c3aed' }, // Delhi
    { lat: -33.9, lon: 18.4, color: '#10b981' }, // Cape Town
    { lat: 1.3, lon: 103.8, color: '#00d4ff' }, // Singapore
    { lat: 37.8, lon: -122.4, color: '#f59e0b' }, // San Francisco
    { lat: 48.9, lon: 2.3, color: '#7c3aed' }, // Paris
];

function latLonToVec3(lat: number, lon: number, r: number) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
    );
}

function SurfacePins() {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((_, d) => { if (groupRef.current) groupRef.current.rotation.y += d * 0.06; });

    return (
        <group ref={groupRef}>
            {PIN_LOCATIONS.map((pin, i) => {
                const pos = latLonToVec3(pin.lat, pin.lon, 2.08);
                const c = new THREE.Color(pin.color);
                return (
                    <group key={i} position={pos.toArray()}>
                        <mesh>
                            <sphereGeometry args={[0.055, 8, 8]} />
                            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={4} />
                        </mesh>
                        {/* Halo ring */}
                        <mesh rotation={[Math.PI / 2, 0, 0]}>
                            <ringGeometry args={[0.09, 0.13, 16]} />
                            <meshBasicMaterial color={c} transparent opacity={0.6}
                                side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
                        </mesh>
                        {/* Bloom glow sphere */}
                        <mesh>
                            <sphereGeometry args={[0.18, 8, 8]} />
                            <meshBasicMaterial color={c} transparent opacity={0.08}
                                blending={THREE.AdditiveBlending} depthWrite={false} />
                        </mesh>
                    </group>
                );
            })}
        </group>
    );
}

/* ─── Connection Arc ─────────────────────────────────────── */
function ConnectionArc({ from, to, color, progress }: {
    from: THREE.Vector3; to: THREE.Vector3; color: string; progress: number;
}) {
    const arcGeo = useMemo(() => {
        const mid = from.clone().add(to).multiplyScalar(0.5);
        mid.normalize().multiplyScalar(mid.length() + from.distanceTo(to) * 0.4);
        const curve = new THREE.QuadraticBezierCurve3(from, mid, to);
        return curve.getPoints(64);
    }, [from, to]);

    const lineObj = useMemo(() => {
        const total = arcGeo.length;
        const s = Math.floor(progress * total * 0.8);
        const e = Math.min(total, s + Math.floor(total * 0.22));
        const pts = arcGeo.slice(s, e);
        if (pts.length < 2) return null;
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 });
        return new THREE.Line(geo, mat);
    }, [arcGeo, progress, color]);

    if (!lineObj) return null;
    return <primitive object={lineObj} />;
}

/* ─── Orbiting Node ──────────────────────────────────────── */
interface NodeDef {
    radius: number; speed: number; phase: number; inclination: number; color: string;
}

function OrbitingNode({ radius, speed, phase, inclination, color }: NodeDef) {
    const ref = useRef<THREE.Mesh>(null);
    const halo = useRef<THREE.Mesh>(null);
    const pulseT = useRef(Math.random() * Math.PI * 2);

    useFrame(({ clock }, delta) => {
        const t = clock.getElapsedTime() * speed + phase;
        const pos = new THREE.Vector3(
            Math.cos(t) * radius,
            Math.sin(t + inclination) * radius * 0.4,
            Math.sin(t) * radius,
        );
        pulseT.current += delta * 2.5;
        const s = 1 + 0.35 * Math.sin(pulseT.current);

        if (ref.current) { ref.current.position.copy(pos); ref.current.scale.setScalar(s); }
        if (halo.current) { halo.current.position.copy(pos); halo.current.scale.setScalar(s * 2.2); }
    });

    const c = new THREE.Color(color);
    return (
        <>
            <mesh ref={ref}>
                <sphereGeometry args={[0.09, 14, 14]} />
                <meshStandardMaterial color={c} emissive={c} emissiveIntensity={4} roughness={0} metalness={1} />
            </mesh>
            {/* Fake bloom halo */}
            <mesh ref={halo}>
                <sphereGeometry args={[0.09, 8, 8]} />
                <meshBasicMaterial color={c} transparent opacity={0.07}
                    blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
        </>
    );
}

/* ─── Orbit Lane ─────────────────────────────────────────── */
function OrbitLane({ radius, inclination, color }: { radius: number; inclination: number; color: string }) {
    const lineObj = useMemo(() => {
        const pts = Array.from({ length: 129 }, (_, i) => {
            const a = (i / 128) * Math.PI * 2;
            return new THREE.Vector3(Math.cos(a) * radius, Math.sin(a + inclination) * radius * 0.4, Math.sin(a) * radius);
        });
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.11 });
        return new THREE.Line(geo, mat);
    }, [radius, inclination, color]);

    return <primitive object={lineObj} />;
}

/* ─── Radar Sweep ────────────────────────────────────────── */
function RadarRing() {
    const ref = useRef<THREE.Mesh>(null);
    const t = useRef(0);
    const geo = useMemo(() => new THREE.RingGeometry(2.5, 5.5, 64, 1, 0, Math.PI * 0.35), []);

    useFrame((_, d) => {
        t.current += d * 0.45;
        if (ref.current) {
            ref.current.rotation.z = t.current;
            (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.07 + 0.04 * Math.sin(t.current * 3);
        }
    });

    return (
        <mesh ref={ref} geometry={geo} rotation={[Math.PI / 2, 0, 0]}>
            <meshBasicMaterial color="#00ccff" transparent opacity={0.07}
                side={THREE.DoubleSide}
                blending={THREE.AdditiveBlending}
                depthWrite={false} />
        </mesh>
    );
}

/* ─── Arc Manager ────────────────────────────────────────── */
const NODES: NodeDef[] = [
    { radius: 3.5, speed: 0.40, phase: 0.0, inclination: 0.4, color: '#00d4ff' },
    { radius: 3.8, speed: 0.28, phase: 2.1, inclination: -0.8, color: '#1a6bff' },
    { radius: 4.2, speed: 0.35, phase: 4.2, inclination: 1.2, color: '#10b981' },
    { radius: 3.3, speed: 0.50, phase: 1.0, inclination: -0.3, color: '#7c3aed' },
    { radius: 4.5, speed: 0.22, phase: 3.5, inclination: 0.9, color: '#00d4ff' },
    { radius: 3.6, speed: 0.45, phase: 5.8, inclination: -1.1, color: '#f59e0b' },
    { radius: 4.0, speed: 0.31, phase: 0.7, inclination: 0.6, color: '#1a6bff' },
    { radius: 3.4, speed: 0.55, phase: 2.8, inclination: -0.5, color: '#10b981' },
];

const ARC_PAIRS = [
    { a: 0, b: 3, color: '#00d4ff' },
    { a: 1, b: 5, color: '#10b981' },
    { a: 2, b: 6, color: '#7c3aed' },
    { a: 4, b: 7, color: '#f59e0b' },
];

function ArcsLayer() {
    const posRefs = useRef(NODES.map(() => new THREE.Vector3()));
    const progRef = useRef(ARC_PAIRS.map(() => Math.random()));
    const tick = useRef(0);

    useFrame(({ clock }, delta) => {
        tick.current += delta;
        NODES.forEach((n, i) => {
            const t = clock.getElapsedTime() * n.speed + n.phase;
            posRefs.current[i].set(
                Math.cos(t) * n.radius,
                Math.sin(t + n.inclination) * n.radius * 0.4,
                Math.sin(t) * n.radius,
            );
        });
        progRef.current = progRef.current.map(p => (p + delta * 0.28) % 1);
    });

    return (
        <>
            {ARC_PAIRS.map((arc, i) => (
                <ConnectionArc
                    key={i}
                    from={posRefs.current[arc.a]}
                    to={posRefs.current[arc.b]}
                    color={arc.color}
                    progress={progRef.current[i]}
                />
            ))}
        </>
    );
}

/* ─── Floating Particles ─────────────────────────────────── */
function FloatingParticles() {
    const ref = useRef<THREE.Points>(null);
    const geo = useMemo(() => {
        const count = 400;
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        const palette = ['#1a6bff', '#00d4ff', '#7c3aed', '#10b981', '#f59e0b'].map(h => new THREE.Color(h));
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(Math.random() * 2 - 1);
            const theta = Math.random() * Math.PI * 2;
            const r = 4.2 + Math.random() * 5.8;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.cos(phi);
            pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
            const c = palette[i % palette.length];
            col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
        }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        g.setAttribute('color', new THREE.BufferAttribute(col, 3));
        return g;
    }, []);

    useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.01; });

    return (
        <points ref={ref} geometry={geo}>
            <pointsMaterial size={0.05} vertexColors transparent opacity={0.7} sizeAttenuation />
        </points>
    );
}

/* ─── Scene ──────────────────────────────────────────────── */
function Scene() {
    const { viewport, mouse } = useThree();
    const groupRef = useRef<THREE.Group>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useFrame((state) => {
        // Handle positioning: shift to the right on desktop, center on mobile
        const isMobile = viewport.width < 10;
        const targetX = isMobile ? 0 : viewport.width * 0.22;

        // Smoothly lerp the group position
        if (groupRef.current) {
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);

            // Cursor interactivity: subtle tilt/parallax
            // We lerp the mouse values for extra smoothness
            mousePos.current.x = THREE.MathUtils.lerp(mousePos.current.x, mouse.x, 0.1);
            mousePos.current.y = THREE.MathUtils.lerp(mousePos.current.y, mouse.y, 0.1);

            // Tilt the group slightly based on mouse
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.current.x * 0.12, 0.05);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mousePos.current.y * 0.08, 0.05);
        }
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[8, 8, 8]} intensity={2.5} color="#4488ff" />
            <pointLight position={[-8, -5, -5]} intensity={1.2} color="#00d4ff" />
            <pointLight position={[0, -8, 6]} intensity={0.7} color="#7c3aed" />
            <pointLight position={[5, 0, -8]} intensity={0.5} color="#10b981" />

            <Stars radius={90} depth={60} count={4500} factor={3.5} saturation={0.6} fade speed={0.4} />

            <group ref={groupRef}>
                <Globe />
                <SurfacePins />
                <RadarRing />
                <FloatingParticles />
                <ArcsLayer />

                {NODES.map((n, i) => (
                    <group key={i}>
                        <OrbitLane radius={n.radius} inclination={n.inclination} color={n.color} />
                        <OrbitingNode {...n} />
                    </group>
                ))}
            </group>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.35}
                enableDamping
                dampingFactor={0.05}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI * 4 / 5}
            />
        </>
    );
}

/* ─── Export ─────────────────────────────────────────────── */
export default function ThreeHero() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 2, 11], fov: 48 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.4,
                }}
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
