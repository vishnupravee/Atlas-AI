// src/components/WordBackground.jsx
import React from 'react';
import '../styles/WordBackground.css';

const words = [
  'AI', 'NeuralNet', 'MachineLearning', 'DeepLearning', 'Automation', 'Chatbot',
  'Intelligence', 'Algorithm', 'Python', 'TensorFlow', 'BigData', 'Analytics',
  'Code', 'Data', 'Model', 'Training', 'Inference', 'GPU', 'Future', 'Cyber',
  'Digital', 'Smart', 'Learning', 'AutoML', 'Vision', 'NLP', 'Generative',
  'Prompt', 'Transformer', 'EdgeAI', 'Serverless', 'Compute', 'Bots', 'Search',
  'Intuition', 'Robotics', 'System', 'Pattern', 'Network'
];

const WordBackground = () => {
  return (
    <div className="word-background">
      {Array.from({ length: 150 }).map((_, i) => {
        const word = words[Math.floor(Math.random() * words.length)];
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 10}s`,
          fontSize: `${12 + Math.random() * 24}px`,
        };
        return (
          <span key={i} className="floating-word" style={style}>
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default WordBackground;
