// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './styles/App.css';
import HolographicUI from './components/HolographicUI';
import ModelViewer from './components/ModelViewer';
import { speak } from './utils/speak';
import WordBackground from './components/WordBackground';

function App() {
  useEffect(() => {
    speak('Welcome to your AI-powered digital experience.');
  }, []);
  return (
    <div className="App">
       {/* <ModelViewer /> */}
       <WordBackground />
      <HolographicUI />
     
    </div>
  );
}

export default App;
