/* eslint-disable react/no-unknown-property */

import { Center, Float, MeshReflectorMaterial, OrbitControls, PresentationControls, Stage } from "@react-three/drei"
import { Model } from "./Model"
import { Suspense } from "react"


export const Experience = () => {
  return (
    <>
        
        <ambientLight />
        <OrbitControls/>
            <Stage environment="city" intensity={0.6} castShadow={false}>
                <Suspense fallback={null}>
                    <Center>
                        <Model />
                    </Center>
                </Suspense>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                <planeGeometry args={[170, 170]}/>
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
    </>
  )
}
