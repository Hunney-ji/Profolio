import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef} from 'react'
import Islandscene from '../assets/public/plane.glb';
import { useFrame } from '@react-three/fiber';
const Plane = (isRotating) => {
    const ref=useRef();
    const {scene,animations}=useGLTF(Islandscene);
    const { actions }=useAnimations(animations , ref );

    useEffect(()=>{
        if(isRotating){
            actions['Take 001'].play();
        }
        else if(!isRotating){
            actions['Take 001'].stop();
        }

    },[actions , isRotating])
    useFrame(({clock,camera})=>{
        
        ref.current.position.y = Math.cos(clock.elapsedTime)*0.5-0.5;
      

    })
  return (
    <mesh position={[0,-1,-1]} scale={[2,2,2]} rotation={[-0.3,1.5,0.4]} ref={ref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Plane
