import React, { useEffect, useState } from 'react';
import './styles/utils.css'; // assuming the styles are defined in a file named "utils.css"

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div>
        <div id='cursor' className='cursor' style={{ left: position.x, top: position.y }}></div>
        <div className='cursor2' style={{ left: position.x, top: position.y }}></div>
      </div>
    );
  }
  
  export default Cursor;