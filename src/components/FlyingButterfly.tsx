
import { useEffect, useState } from 'react';

interface ButterflyProps {
  count?: number;
}

// Компонент анимированной летающей бабочки
const FlyingButterfly = ({ count = 3 }: ButterflyProps) => {
  const [butterflies, setButterflies] = useState<Array<{
    id: number;
    startX: number;
    startY: number;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newButterflies = Array.from({ length: count }, (_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      size: 30 + Math.random() * 20, // Размер от 30 до 50px
      duration: 20 + Math.random() * 40, // Длительность полета от 20 до 60 секунд
      delay: Math.random() * 15, // Задержка до 15 секунд
    }));
    
    setButterflies(newButterflies);
  }, [count]);

  return (
    <>
      {butterflies.map((butterfly) => (
        <div
          key={butterfly.id}
          className="absolute z-10 pointer-events-none butterfly-element"
          style={{
            left: `${butterfly.startX}%`,
            top: `${butterfly.startY}%`,
            animationDelay: `${butterfly.delay}s`,
            animationDuration: `${butterfly.duration}s`,
          }}
        >
          <svg 
            width={butterfly.size} 
            height={butterfly.size} 
            viewBox="0 0 24 24" 
            className="butterfly-wings"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 6C13.9 5.4 15.3 5 17 5C19.5 5 21.3 6 22 8C20.9 9.3 19.3 10 17 10C15.7 10 14.5 9.8 13.5 9.5M12.5 18C13.9 18.6 15.3 19 17 19C19.5 19 21.3 18 22 16C20.9 14.7 19.3 14 17 14C15.7 14 14.5 14.2 13.5 14.5M11.5 6C10.1 5.4 8.7 5 7 5C4.5 5 2.7 6 2 8C3.1 9.3 4.7 10 7 10C8.3 10 9.5 9.8 10.5 9.5M11.5 18C10.1 18.6 8.7 19 7 19C4.5 19 2.7 18 2 16C3.1 14.7 4.7 14 7 14C8.3 14 9.5 14.2 10.5 14.5M12 10C11.3 11.1 11.3 12.9 12 14M12 2V22"
              stroke="#1a91ea"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default FlyingButterfly;
