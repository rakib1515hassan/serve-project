"use client";
import { useState } from "react";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

export default function YesNoQuestionComponent({
  title = "animalistic.",
  progress = 0,
  question = "Ask question",
  backHref,
  nextHref,
  onAnswer,
}) {
  const [selected, setSelected] = useState(null); // 'ja' or 'nein'

  const handleAnswer = (answer) => {
    setSelected(answer); // ✅ Track selected button
    if (onAnswer) onAnswer(answer);
  };

  const getButtonStyle = (option) =>
    option === selected
      ? "bg-white text-[#4A3A2D] border-2 border-[#4A3A2D]"
      : "bg-[#4A3A2D] text-white";

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f4ee] text-[#4A4A4A]">
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
        <button
          onClick={() => handleAnswer("ja")}
          className={`w-64 h-14 rounded-xl text-lg font-semibold hover:opacity-90 transition ${getButtonStyle(
            "ja"
          )}`}
        >
          Ja
        </button>
        <button
          onClick={() => handleAnswer("nein")}
          className={`w-64 h-14 rounded-xl text-lg font-semibold hover:opacity-90 transition ${getButtonStyle(
            "nein"
          )}`}
        >
          Nein
        </button>
      </div>

      <FooterComponent backHref={backHref} nextHref={nextHref} />
    </div>
  );
}
