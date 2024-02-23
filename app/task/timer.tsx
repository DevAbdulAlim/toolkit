"use client"
import React, { useEffect, useState } from "react";

export default function Timer({
  duration,
  isActive,
}: {
  duration: number;
  isActive: boolean;
}) {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(duration * 60);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isActive && remainingSeconds > 0) {
      timer = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, remainingSeconds, duration]);

  // Format remaining seconds as m:ss
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes)}m ${String(seconds).padStart(2, '0')}s`;

  return <time className={isActive && seconds > 0 ? 'text-green-500' : (isActive && seconds === 0) ? 'text-red-500' : 'text-gray-500'}>{formattedTime}</time>;
}
