import React, { useEffect, useState } from 'react';
import './CursorRing.css';

const CursorRing = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDoubleClick = () => {
      setVisible((prev) => !prev); // Toggle visibility on double-click
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('dblclick', handleDoubleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('dblclick', handleDoubleClick);
    };
  }, []);

  return (
    <div
      className={`cursor-ring ${visible ? 'visible' : 'hidden'}`}
      style={{ left: cursorPosition.x - 30, top: cursorPosition.y - 30 }}
    ></div>
  );
};

export default CursorRing;
