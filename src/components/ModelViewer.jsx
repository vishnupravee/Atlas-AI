

// import React, { useRef, useEffect, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF } from '@react-three/drei';
// import '../styles/ModelViewer.css'

// const Model = ({ mouse }) => {
//   const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
//   const modelRef = useRef();

//   useFrame(() => {
//     if (modelRef.current) {
//       // Limit rotation angle range
//       const targetY = (mouse.current.x / window.innerWidth - 0.5) * 0.6; // max ±0.3 rad (~17°)
//       const targetX = (mouse.current.y / window.innerHeight - 0.5) * 0.2; // max ±0.1 rad (~6°)

//       // Smooth interpolation
//       modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.05;
//       modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.05;
//     }
//   });

//   return <primitive ref={modelRef} object={gltf.scene} scale={2} />;
// };

// const ModelViewer = () => {
//   const mouse = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <Canvas style={{ height: '100vh', width: '100vw' }}>
//       <ambientLight intensity={1.2} />
//       <directionalLight position={[2, 2, 2]} />
//       <Suspense fallback={null}>
//         <Model mouse={mouse} />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ModelViewer;

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = ({ mouse }) => {
  const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      const targetY = (mouse.current.x / window.innerWidth - 0.5) * 0.6;
      const targetX = (mouse.current.y / window.innerHeight - 0.5) * 0.2;

      modelRef.current.rotation.y += (targetY - modelRef.current.rotation.y) * 0.05;
      modelRef.current.rotation.x += (targetX - modelRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      // scale={window.innerWidth < 768 ? 1.3 : 2}
        scale={window.innerWidth < 768 ? 2 : 3}
      // position={[0, -1, 0]}
       position={[0, -1, 0]}
    />
  );
};

const ModelViewer = () => {
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div  className="model-wrapper">
      <Canvas
        gl={{ alpha: true }}
        style={{
           paddingBottom: '5rem', // ✅ Adds bottom padding visually
          background: 'transparent',
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
