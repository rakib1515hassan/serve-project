"use client";
import React from "react";

export default function HeaderComponent({ title = "", progress = 0 }) {
  return (
    <div className="w-full">
      {/* Header Title */}
      <div className="text-center text-2xl font-bold mt-6">{title}</div>

      {/* Progress Bar */}
      <div className="w-4/5 mx-auto mt-6 h-2 bg-white rounded-full">
        <div
          className="h-full bg-[#4A4A4A] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
