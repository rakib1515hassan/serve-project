"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function FooterComponent({ backHref, nextHref }) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#4A3A2D] text-white h-16 z-50">
      <div className="w-full h-full flex justify-between items-center px-4">
        {/* Back Button */}
        {backHref ? (
          <Link href={backHref} className="flex items-center gap-2 text-sm">
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        ) : (
          <div /> // placeholder for spacing
        )}

        {/* Further Button */}
        {nextHref ? (
          <Link
            href={nextHref}
            className="bg-white text-[#4A3A2D] px-4 py-2 text-sm rounded-full font-medium hover:bg-gray-100 transition"
          >
            Further
          </Link>
        ) : (
          <div /> // placeholder for spacing
        )}
      </div>
    </footer>
  );
}
