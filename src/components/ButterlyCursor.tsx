
import { useEffect, useState } from 'react';

const ButterlyCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState('right');
  const [lastX, setLastX] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Определение направления движения бабочки
      if (e.clientX < lastX) {
        setDirection('left');
      } else if (e.clientX > lastX) {
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

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
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
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="butterfly-cursor-wing"
        >
          <path
            d="M12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 11.5913 17.3679 13.1174 16.2426 14.2426C15.1174 15.3679 13.5913 16 12 16C10.4087 16 8.88258 15.3679 7.75736 14.2426C6.63214 13.1174 6 11.5913 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4ZM12 4V2M4 12L2 14M20 12L22 14M6 20C7.5 18 9.5 17 12 17C14.5 17 16.5 18 18 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButterlyCursor;
