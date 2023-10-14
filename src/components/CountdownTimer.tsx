import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const initialTime = {
    days: 12,
    hours: 12,
    minutes: 43,
    seconds: 5,
  };

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds === 0
      ) {
        clearInterval(countdownInterval);
        // Reset to initial state
        setTime(initialTime);
      } else {
        // Update the timer
        const newTime = { ...time };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        setTime(newTime);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [time]);

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <p>
      {formatTime(time.days)}d : {formatTime(time.hours)}h :{" "}
      {formatTime(time.minutes)}m : {formatTime(time.seconds)}s
    </p>
  );
};

export default CountdownTimer;
