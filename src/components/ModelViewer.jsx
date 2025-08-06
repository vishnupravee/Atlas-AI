// src/components/ModelViewer.jsx
// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Model = () => {
//   const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
//   return <primitive object={gltf.scene} scale={2} />;
// };

// const ModelViewer = () => {
//   return (
//     <Canvas style={{ height: '100vh', background: '#000' }}>
//       <ambientLight intensity={1.2} />
//       <directionalLight position={[3, 3, 3]} />
//       <Suspense fallback={null}>
//         <Model />
//       </Suspense>
//       <OrbitControls enableZoom={true} />
//     </Canvas>
//   );
// };

// export default ModelViewer;

// src/components/ModelViewer.jsx

// import React, { useRef, Suspense, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// const Model = ({ mouse }) => {
//   const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       // Smoothly interpolate rotation to mouse position
//       modelRef.current.rotation.y += (mouse.current.x / 100 - modelRef.current.rotation.y) * 0.05;
//       modelRef.current.rotation.x += (mouse.current.y /  100- modelRef.current.rotation.x) * 0.05;
//     }
//   });

//   return <primitive ref={modelRef} object={gltf.scene} scale={2} />;
// };

// const ModelViewer = () => {
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.current.x = e.clientX - window.innerWidth / 2;
//       mouse.current.y = e.clientY - window.innerHeight / 2;
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <Canvas style={{ height: '100vh' }}>
//       <ambientLight intensity={1} />
//       <directionalLight position={[2, 2, 2]} />
//       <Suspense fallback={null}>
//         <Model mouse={mouse} />
//       </Suspense>
//       {/* Remove OrbitControls if you want only mouse tilt control */}
//       {/* <OrbitControls enableZoom={false} /> */}
//     </Canvas>
//   );
// };

// export default ModelViewer;

// src/components/ModelViewer.jsx

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import '../styles/ModelViewer.css'

const Model = ({ mouse }) => {
  const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Limit rotation angle range
      const targetY = (mouse.current.x / window.innerWidth - 0.5) * 0.6; // max ±0.3 rad (~17°)
      const targetX = (mouse.current.y / window.innerHeight - 0.5) * 0.2; // max ±0.1 rad (~6°)

      // Smooth interpolation
      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.05;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={2} />;
};

const ModelViewer = () => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 2, 2]} />
      <Suspense fallback={null}>
        <Model mouse={mouse} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;

