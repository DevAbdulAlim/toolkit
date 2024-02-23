"use client";
import React, { useState } from "react";

interface DateObject {
  year: number;
  month: number;
  day: number;
}

export default function Age() {
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<DateObject | null>(null);

  const calculateAge = () => {
    if (!dob) return;

    const dobDate = new Date(dob);
    const now = new Date();
    const diff = now.getTime() - dobDate.getTime();
    const ageDate = new Date(diff);

    const year = Math.abs(ageDate.getUTCFullYear() - 1970);
    const month = ageDate.getUTCMonth();
    const day = ageDate.getUTCDay();

    setAge({ year, month, day });
  };

  return (
    <div className="container mx-auto flex items-center justify-center py-12 px-3">
      <div>
        <h2 className="text-3xl font-bold mb-4">Age Calculator</h2>
        <label className="block mb-4">
          Date of Birth:
          <input
            type="date"
            className="border ml-2 border-green-300 rounded px-4 py-2 mt-2 focus:outline-none focus:border-green-500"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={calculateAge}
        >
          Calculate
        </button>
        {age && (
          <p className="mt-4">
            Your age is {age.year} years, {age.month} months, and {age.day} days
          </p>
        )}
      </div>
    </div>
  );
}
