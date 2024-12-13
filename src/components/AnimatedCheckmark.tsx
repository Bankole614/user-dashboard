
import { useState, useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6"

export default function AnimatedCheckmark() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setShow(false);
      setTimeout(() => setShow(true), 100);
    };

    // Initial animation
    startAnimation();

    // Set up the interval for repeated animations
    const intervalId = setInterval(startAnimation, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {show && (
          <>
            {/* Background circle */}
            <div className="absolute inset-0 animate-circle">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="stroke-green-500 stroke-2 fill-none"
                  cx="50"
                  cy="50"
                  r="45"
                  pathLength="1"
                  style={{
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    animation: 'circle 0.6s ease-in-out forwards',
                  }}
                />
              </svg>
            </div>
            
            {/* Checkmark icon */}
            <FaCircleCheck 
              className="text-7xl text-green-500 z-10 absolute"
              style={{
                animation: 'check 0.4s ease-in-out 0.5s forwards',
                opacity: 0,
                transform: 'scale(0.5)',
              }}
            />
          </>
        )}
      </div>

      <style  >{`
        @keyframes circle {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes check {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}