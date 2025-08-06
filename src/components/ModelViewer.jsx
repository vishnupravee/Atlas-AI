// src/components/ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/AI_Visage_0720113618_texture.glb');
  return <primitive object={gltf.scene} scale={2} />;
};

const ModelViewer = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#000' }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default ModelViewer;
