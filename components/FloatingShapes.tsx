import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="floating-shape top-[60%] right-[10%] w-32 h-32 bg-primary-light organic-blob"></div>
      <div className="floating-shape top-[20%] right-[20%] font-mono text-xs text-primary">
        01011001
      </div>
      <div className="floating-shape bottom-[15%] left-[15%] font-mono text-xs text-primary">
        {`{ code }`}
      </div>
      <div className="floating-shape top-[40%] left-[50%] w-1 h-20 bg-gradient-to-b from-primary/40 to-transparent"></div>
    </div>
  );
};

export default FloatingShapes;