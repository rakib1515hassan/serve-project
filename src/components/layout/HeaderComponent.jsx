"use client";
import React from "react";

export default function HeaderComponent({ title = "", progress = 0 }) {
  return (
    <div className="w-full px-4">
      {/* Header Title */}
      <div className="text-center text-2xl md:text-3xl font-bold mt-6">
        {title}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-6 h-2 rounded-full bg-white border border-[#4A4A4A]">
        <div
          className="h-full bg-[#4A4A4A] rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
