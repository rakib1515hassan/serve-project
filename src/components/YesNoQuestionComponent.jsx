"use client";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

export default function YesNoQuestionComponent({
  question = "Ask question",
  backHref,
  nextHref,
  progress = 0,
  title = "animalistic.",
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4ee] text-[#4A4A4A]">
      {/* Header */}
      <HeaderComponent title={title} progress={progress} />

      {/* Frage Text */}
      <div className="text-center mt-10 text-xl font-semibold">
        {typeof question === "string" ? (
          <p>{question}</p>
        ) : (
          question.map((line, index) => <p key={index}>{line}</p>)
        )}
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
      <FooterComponent backHref={backHref} nextHref={nextHref} />
    </div>
  );
}
