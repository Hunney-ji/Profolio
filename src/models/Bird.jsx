import React, { useEffect ,useRef ,useState} from 'react'
import Islandscene from '../assets/public/bird.glb';
import { useAnimations, useGLTF  } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
    const Birdref=useRef();
    const [pos , setpos]=useState(0);
    const {scene,animations}=useGLTF(Islandscene);
    const {actions}=useAnimations(animations , Birdref );
    useEffect(()=>{
        actions['Take 001'].play();
    })
 
    useFrame(({clock,camera})=>{
        
        Birdref.current.position.x = Math.sin(clock.elapsedTime)*4-3;
        Birdref.current.position.y = Math.cos(clock.elapsedTime/10)*1+3;
      

    })
  return (
    <mesh position={[0,3,-3]} scale={[0.005,0.005,0.005]} ref={Birdref}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird
