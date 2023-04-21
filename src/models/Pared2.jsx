import { useLoader } from '@react-three/fiber';
import React, { useState } from 'react';
import { DoubleSide,TextureLoader } from "three";


export default function Pared2(){
    const [clicked,setClicked] = useState(false);
    
    const PATH = "static/imagenes/"
    const texture1 = useLoader(TextureLoader, PATH + 'lambo.png')
    const texture2 = useLoader(TextureLoader, PATH + 'pollo.png')

    const onHandleImages = () => {
        setClicked(!clicked);   
    };
    

    return (
        <group>
            <mesh position={[0.5, 0, 0.5]} rotation-y={[- Math.PI * 0.5]}>
                <planeGeometry/>
                <meshStandardMaterial  side = {DoubleSide} color='red'/>
            </mesh>
            <mesh position={[0.499, 0, 0.5]} rotation-y={[- Math.PI * 0.5]} scale={0.8}  onDoubleClick={onHandleImages} >
                <planeGeometry args={[1, 1]}/>
                <meshStandardMaterial map={clicked ? texture2 : texture1} />
            </mesh>
        </group>
    );
}