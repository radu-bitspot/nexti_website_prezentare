import React from 'react';
import '../styles/AnimatedShapes.css';

const AnimatedShapes: React.FC = () => {
  return (
    <div className="shapes-container">
      {/* Cube wireframe */}
      <svg className="shape shape-cube" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="cube-group">
          {/* Front face */}
          <path d="M 60 80 L 140 80 L 140 160 L 60 160 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Back face */}
          <path d="M 80 60 L 160 60 L 160 140 L 80 140 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Connecting lines */}
          <line x1="60" y1="80" x2="80" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="140" y1="80" x2="160" y2="60" stroke="currentColor" strokeWidth="1.5" />
          <line x1="140" y1="160" x2="160" y2="140" stroke="currentColor" strokeWidth="1.5" />
          <line x1="60" y1="160" x2="80" y2="140" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Pyramid wireframe */}
      <svg className="shape shape-pyramid" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="pyramid-group">
          {/* Base */}
          <path d="M 50 150 L 150 150 L 150 120 L 50 120 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Apex lines */}
          <line x1="50" y1="150" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="150" y1="150" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="150" y1="120" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="120" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Octahedron wireframe */}
      <svg className="shape shape-octahedron" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="octahedron-group">
          {/* Middle square */}
          <path d="M 60 100 L 100 70 L 140 100 L 100 130 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {/* Top pyramid */}
          <line x1="60" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="70" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" />
          {/* Bottom pyramid */}
          <line x1="60" y1="100" x2="100" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="140" y1="100" x2="100" y2="160" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="130" x2="100" y2="160" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Torus segments */}
      <svg className="shape shape-torus" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="torus-group">
          <ellipse cx="100" cy="100" rx="60" ry="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="100" cy="100" rx="40" ry="23" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 40 100 Q 40 80, 60 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 160 100 Q 160 120, 140 120" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Icosahedron segments */}
      <svg className="shape shape-icosahedron" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="icosahedron-group">
          <path d="M 100 40 L 60 90 L 100 100 L 140 90 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 60 90 L 80 140 L 100 100 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 140 90 L 120 140 L 100 100 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 80 140 L 100 160 L 120 140 L 100 100 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>

      {/* Tetrahedron */}
      <svg className="shape shape-tetrahedron" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g className="tetrahedron-group">
          <path d="M 100 50 L 50 140 L 150 140 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="100" y1="50" x2="125" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="50" y1="140" x2="125" y2="120" stroke="currentColor" strokeWidth="1.5" />
          <line x1="150" y1="140" x2="125" y2="120" stroke="currentColor" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedShapes;
