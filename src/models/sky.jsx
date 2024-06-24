import React, { useRef } from 'react'
import Islandscene from '../assets/public/sky.glb';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {
  const sky=useGLTF(Islandscene);
  const skyref=useRef();
  useFrame((_,delta)=>{
    if(1){
        skyref.current.rotation.y += 0.05* delta
    }
  })

  return (
    <mesh ref={skyref} scale={[1,1,1]} position={[0,0,0]}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky