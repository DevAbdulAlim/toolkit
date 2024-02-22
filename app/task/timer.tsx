"use client";
import React, { useEffect, useState } from "react";

export default function Timer({
  duration,
  isActive,
}: {
  duration: number;
  isActive: boolean;
}) {
  const [seconds, setSeconds] = useState<number>(0);
  const durationInMinutes = 5;
  const durationInMillis = durationInMinutes * 60 * 1000;
  let timer: number;

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, durationInMillis]);

  useEffect(() => {
    if (seconds * 1000 >= durationInMillis) {
      clearTimeout(timer);
    }
  }, [seconds, durationInMillis]);

  return <div>{seconds}</div>;
}
