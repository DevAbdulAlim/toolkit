"use client";
import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClear = () => {
    setInput(input.slice(0, -1));
    setResult("");
  };

  const handleAllClear = () => {
    setInput("");
    setResult("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = event;
    if (
      (key >= "0" && key <= "9") ||
      key === "." ||
      key === "+" ||
      key === "-" ||
      key === "*" ||
      key === "/" ||
      key === "%"
    ) {
      handleClick(key);
    } else if (key === "Enter") {
      handleClick("=");
    } else if (key === "Backspace") {
      handleClear();
    }
  };

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult("= " + evalResult);
      } catch (error) {
        setResult(error as string);
      }
    } else {
      setInput(input + value);
    }
  };
  return (
    <div
      className="py-12 flex justify-center  items-center p-3"
      onKeyDown={handleKeyDown}
    >
      <div className="shadow-2xl max-w-md bg-white rounded-md p-4">
        <div className="border text-xl mb-2 text-white rounded-md overflow-hidden font-semibold">
          <input
            className="p-2 bg-blue-950  w-full focus:outline-none"
            type="text"
            name="input"
            value={input}
            readOnly
            placeholder="0"
          />
          <input
            className="p-2 bg-blue-950 w-full focus:outline-none"
            type="text"
            name="result"
            value={result}
            placeholder="="
            readOnly
          />
        </div>
        <div className="grid gap-4 grid-cols-4">
          <button
            type="button"
            className="shadow-md bg-gray-100 py-4 px-6"
            onClick={handleAllClear}
          >
            AC
          </button>
          <button
            type="button"
            className="shadow-md bg-gray-100 py-4 px-6"
            onClick={handleClear}
          >
            C
          </button>
          <button
            type="button"
            className="shadow-md bg-gray-100 py-4 px-6"
            onClick={() => handleClick("%")}
          >
            %
          </button>
          <button
            type="button"
            className="shadow-md bg-gray-100 py-4 px-6"
            onClick={() => handleClick("/")}
          >
            /
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-span-3">
            <div className="grid grid-cols-3 ">
              <button
                type="button"
                className="py-4 shadow-md bg-gray-200 px-6"
                onClick={() => handleClick("7")}
              >
                7
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("8")}
              >
                8
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("9")}
              >
                9
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("4")}
              >
                4
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("5")}
              >
                5
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("6")}
              >
                6
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("1")}
              >
                1
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("2")}
              >
                2
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick("3")}
              >
                3
              </button>
              <button
                type="button"
                className=" py-4 px-6 col-span-2"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <button
                type="button"
                className=" py-4 px-6"
                onClick={() => handleClick(".")}
              >
                .
              </button>
            </div>
          </div>
          {/* functions */}
          <div className="grid bg-green-50 gri-cols-1">
            <button
              type="button"
              className=" py-4 px-6"
              onClick={() => handleClick("*")}
            >
              x
            </button>
            <button
              type="button"
              className=" py-4 px-6"
              onClick={() => handleClick("-")}
            >
              -
            </button>
            <button
              type="button"
              className=" py-4 px-6"
              onClick={() => handleClick("+")}
            >
              +
            </button>
            <button
              type="button"
              className=" py-4 px-6"
              onClick={() => handleClick("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
