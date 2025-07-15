"use client";
import { FaArrowLeft } from "react-icons/fa";

export default function FooterComponent({
  backHref,
  nextHref,
  onBack,
  isSubmit = false,
}) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#4A3A2D] text-white h-16 z-50">
      <div className="w-full h-full flex justify-between items-center px-4">
        {/* Back */}
        {backHref ? (
          <Link href={backHref} className="flex items-center gap-2 text-sm">
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        ) : onBack ? (
          <button
            onClick={onBack}
            type="button"
            className="flex items-center gap-2 text-sm"
          >
            <FaArrowLeft />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        {/* Further */}
        {nextHref ? (
          <Link
            href={nextHref}
            className="bg-white text-[#4A3A2D] px-4 py-2 text-sm rounded-full font-medium hover:bg-gray-100 transition"
          >
            Further
          </Link>
        ) : isSubmit ? (
          <button
            type="submit"
            className="bg-white text-[#4A3A2D] px-4 py-2 text-sm rounded-full font-medium hover:bg-gray-100 transition"
          >
            Further
          </button>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}
