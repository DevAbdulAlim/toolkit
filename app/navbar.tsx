import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="container py-12 mx-auto flex justify-between px-3">
      <Link
        href="/"
        className="text-2xl text-green-500 hover:bg-green-500 hover:text-white inline-block p-2 rounded-full"
      >
        <FaHome />
      </Link>
      <Link
        href="/"
        className="text-2xl text-green-500 hover:bg-green-500 hover:text-white inline-block p-2 rounded-full"
      >
        <FiSettings />
      </Link>
    </div>
  );
}
