'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // This will set hasMounted to true after the initial render on the client side
    setHasMounted(true);
  }, []);


  useEffect(() => {
    if (hasMounted) {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
    } 
    },[hasMounted, timeLeft]);

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
          return null;
        }
    
        return (
          <span key={interval} className="m-2">
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

  return (
      <div className="text-5xl 2xl:text-6xl text-center text-white p-4 bg-gray-700 bg-opacity-30 rounded-lg">
        {timerComponents.length ? timerComponents : <span>Welcome to the conference</span>}
      </div>
  );
};

export default CountdownTimer;