import { useState, useEffect } from "react";
import styles from '../LevelOne/LevelOne.module.css';
import React from "react";

interface TimerProps {
  initialTime: number;
  onStop: () => void;
  paused: boolean;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onStop, paused }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);

  useEffect(() => {
      let timer: number | null | undefined = null;

      if (!paused) {
        timer = setInterval(() => {
          setTimeLeft((prevTimeLeft) => {
            if (prevTimeLeft <= 0) {
              if (timer) {
                clearInterval(timer);
              }
              onStop(); // Call the onStop function when the timer reaches zero
              return 0;
            }
            return prevTimeLeft - 1;
          });
        }, 1000);
      }

      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
  }, [initialTime, onStop, paused]);

  useEffect(() => {
    if (timeLeft === 0) {
      // If time is up, call the onStop function to navigate to a different page
      onStop();
    }
  }, [timeLeft, onStop]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.bottomContainer}>
      <span className={styles.gameText}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
