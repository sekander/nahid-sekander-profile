import React, {useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';


// Helper function for linear interpolation.
function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

function RotatingBox() {
  const [hovered, setHovered] = useState(false);

  //This ref allows us to directly modify the cube scale
  const cubeRef = useRef<any>(null);

  //Rotate the cube on every frame for animation
  useFrame(() => {
    if (cubeRef.current) {
      const targetScale = hovered ? 2.5 : 1; // Hover scale or normal scale.
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.scale.x = lerp(cubeRef.current.scale.x, targetScale, 0.1);
      cubeRef.current.scale.y = lerp(cubeRef.current.scale.y, targetScale, 0.1);
      cubeRef.current.scale.z = lerp(cubeRef.current.scale.z, targetScale, 0.1);
    }
  });

  return (
    <mesh 
      ref={cubeRef}
      // scale={hovered ? 1.5 : 1} // Scale changes on hover.
      onPointerOver={() => setHovered(true)} //Mouse enters
      onPointerOut={() => setHovered(false)}
    >

       <boxGeometry args={[1, 1, 1]}/>
       <meshStandardMaterial color={hovered ? 'red' : 'blue'} />
       <Edges color="black" />
      
    </mesh>
    // <mesh rotation={[0.4, 0.2, 0]}>
    //   <boxGeometry args={[1, 1, 1]}/>
    //   <meshStandardMaterial color="blue" />
    // </mesh>
  );
}

export default RotatingBox;