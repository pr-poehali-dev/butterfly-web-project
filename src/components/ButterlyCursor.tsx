
import { useEffect, useState } from 'react';

const ButterlyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState('right');
  const [lastX, setLastX] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      if (e.clientX < lastX - 3) {
        setDirection('left');
      } else if (e.clientX > lastX + 3) {
        setDirection('right');
      }
      
      setLastX(e.clientX);
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [lastX]);

  if (!visible) return null;

  return (
    <div 
      className="butterfly-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)'
      }}
    >
      <div className="butterfly-cursor-inner">
        <svg 
          width="50" 
          height="50" 
          viewBox="0 0 24 24" 
          className="butterfly-wings"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 6C13.9 5.4 15.3 5 17 5C19.5 5 21.3 6 22 8C20.9 9.3 19.3 10 17 10C15.7 10 14.5 9.8 13.5 9.5M12.5 18C13.9 18.6 15.3 19 17 19C19.5 19 21.3 18 22 16C20.9 14.7 19.3 14 17 14C15.7 14 14.5 14.2 13.5 14.5M11.5 6C10.1 5.4 8.7 5 7 5C4.5 5 2.7 6 2 8C3.1 9.3 4.7 10 7 10C8.3 10 9.5 9.8 10.5 9.5M11.5 18C10.1 18.6 8.7 19 7 19C4.5 19 2.7 18 2 16C3.1 14.7 4.7 14 7 14C8.3 14 9.5 14.2 10.5 14.5M12 10C11.3 11.1 11.3 12.9 12 14M12 2V22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButterlyCursor;
