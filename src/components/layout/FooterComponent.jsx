"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function FooterComponent({ backHref, nextHref }) {
  return (
    <footer className="mt-auto bg-[#4A3A2D] text-white p-4">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {/* Back Button (optional) */}
        {backHref ? (
          <Link href={backHref} className="flex items-center gap-2">
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        ) : (
          <div /> // Empty div to keep spacing
        )}

        {/* Further Button (optional) */}
        {nextHref && (
          <Link
            href={nextHref}
            className="bg-white text-[#4A3A2D] px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Further
          </Link>
        )}
      </div>
    </footer>
  );
}
