import React from 'react';
import NeonButton from './NeonButton';
import '../styles/HolographicUI.css';
import ModelViewer from './ModelViewer';
// import AIHeadImage from '../assets/ai-head.png'; // replace with your actual image
// import AIHeadImage from '../components/image.png'
const HolographicUI = () => {
  return (
    <div className="holo-container pb-5">
     
  <ModelViewer />

      <div className="button-grid">
        <NeonButton text="Home" />
        <NeonButton text="AI Services" />
        <NeonButton text="Automation Tools" />
        <NeonButton text="AI Services" />
        <NeonButton text="Automation Tools" />
        <NeonButton text="Contact" />
      </div>
    </div>
  );
};

export default HolographicUI;
