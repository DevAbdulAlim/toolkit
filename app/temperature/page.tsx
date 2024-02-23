"use client";
import React, { useState, ChangeEvent } from "react";

import { IoThermometerOutline } from "react-icons/io5";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState<number | "">("");
  const [fahrenheit, setFahrenheit] = useState<number | "">("");

  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue !== "" ? parseFloat(celsiusValue) : "");
    setFahrenheit(
      celsiusValue !== "" ? (parseFloat(celsiusValue) * 9) / 5 + 32 : ""
    );
  };

  const handleFahrenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue !== "" ? parseFloat(fahrenheitValue) : "");
    setCelsius(
      fahrenheitValue !== "" ? ((parseFloat(fahrenheitValue) - 32) * 5) / 9 : ""
    );
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center justify-center mb-4">
          <IoThermometerOutline className="text-4xl mr-2 text-green-600" />
          <h2 className="text-xl font-bold text-green-600">
            Temperature Converter
          </h2>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label className="text-lg font-semibold">
              Celsius:
              <input
                type="number"
                className="ml-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"
                value={celsius === "" ? "" : celsius}
                onChange={handleCelsiusChange}
                placeholder="Enter Celsius"
              />
            </label>
          </div>
          <div className="flex items-center">
            <label className="text-lg font-semibold">
              Fahrenheit:
              <input
                type="number"
                className="ml-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"
                value={fahrenheit === "" ? "" : fahrenheit}
                onChange={handleFahrenheitChange}
                placeholder="Enter Fahrenheit"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
