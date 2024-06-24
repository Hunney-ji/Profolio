import React, { Suspense, useRef, useState } from 'react'
import {Canvas } from "@react-three/fiber"
import Loader from '../components/Loader'
import Island from '../models/island'
import { OrbitControls,  } from '@react-three/drei'
import Sky from '../models/sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
    Bond
</div> */}
const Home = () => {
    const [isRotating , setIsRotating]=useState(false);
    const [currentStage , setCurrentStage]=useState(1);
    const [isplaying, setisplaying] = useState(false);
    const audioref=useRef(new Audio('sona'));
    return (
    <section className="w-full h-screen relative">
    <span className='absolute top-28 right-0 left-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} /> }
    </span>
      <Canvas 
      className={`w-full h-screen bg-transparent ${isRotating? 'cursor-grabbing':'cursor-grab'}`}
      camera={{near:0.1 , far:1000 }}>
        <Suspense fallback={<Loader/>}>
        <directionalLight position={[1,1,1]} intensity={2}/>
        <spotLight />
        <pointLight />
        <hemisphereLight />
        <ambientLight intensity={2}/>
        <Plane
          isRotating={isRotating}
        /> 
        {/* <OrbitControls/> */}
        <Bird/>
        <Sky isRotating={isRotating}/>
        <Island 
          scale={[0.7,0.7,0.7]}
         position={[0,-4,-10]}
          rotation={[0.2,9.0,0]}
          isRotating={isRotating}
          setCurrentStage={setCurrentStage}
          setIsRotating={setIsRotating}
        /> 
      </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
        src={!isplaying ? 'soundoff' :'soundon'}
        className='w-10 h-10'
        onClick={ () =>setisplaying(!isplaying)}
        />
      </div>
    </section>
  )
}

export default Home
