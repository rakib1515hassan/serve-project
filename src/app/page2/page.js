"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4ee] text-[#4A4A4A]">
      {/* Header */}
      <div className="text-center text-2xl font-bold mt-6">animalistic.</div>

      {/* Progress Bar */}
      <div className="w-4/5 mx-auto mt-6 h-2 bg-white rounded-full">
        <div className="h-full w-[12.5%] bg-[#4A4A4A] rounded-full"></div>
      </div>

      {/* Frage Text */}
      <div className="text-center mt-10 text-xl font-semibold">
        <p>Ask</p>
        <p>question</p>
      </div>

      {/* Ja / Nein Buttons */}
      <div className="flex flex-col gap-4 items-center justify-center mt-10">
        <button className="w-64 h-14 bg-[#4A3A2D] text-white rounded-xl text-lg font-semibold hover:opacity-90 transition">
          Yes
        </button>
        <button className="w-64 h-14 bg-[#4A3A2D] text-white rounded-xl text-lg font-semibold hover:opacity-90 transition">
          No
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-[#4A3A2D] text-white p-4">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex items-center gap-2">
            <FaArrowLeft />
            <Link href="/page1">Back</Link>
          </button>

          <Link
            href="/page3"
            className="bg-white text-[#4A3A2D] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Further
          </Link>
        </div>
      </footer>
    </div>
  );
}
