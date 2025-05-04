
const ButterflyFlower = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Flower */}
      <div className="forget-me-not">
        <div className="flower-petal"></div>
        <div className="flower-petal"></div>
        <div className="flower-petal"></div>
        <div className="flower-petal"></div>
        <div className="flower-petal"></div>
        <div className="flower-center absolute left-1/2 top-1/2 -ml-[6px] -mt-[6px]"></div>
      </div>
      
      {/* Butterfly */}
      <div className="absolute -top-6 -right-2 animate-butterfly-flying">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 11.5913 17.3679 13.1174 16.2426 14.2426C15.1174 15.3679 13.5913 16 12 16C10.4087 16 8.88258 15.3679 7.75736 14.2426C6.63214 13.1174 6 11.5913 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4ZM12 4V2M4 12L2 14M20 12L22 14M6 20C7.5 18 9.5 17 12 17C14.5 17 16.5 18 18 20"
            stroke="#4A8FE7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButterflyFlower;
