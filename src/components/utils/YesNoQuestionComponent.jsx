"use client";
import { useState } from "react";
import HeaderComponent from "@/components/layout/HeaderComponent";
import FooterComponent from "@/components/layout/FooterComponent";

export default function YesNoQuestionComponent({
  progress = 0,
  question = "Ask question",
  back,
  next,
  onAnswer,
}) {
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submit
    if (selected && onAnswer) {
      onAnswer(selected); // send selected answer to parent
      if (next) next(); // go to next step
    }
  };

  const getButtonStyle = (option) =>
    option === selected
      ? "bg-white text-[#4A3A2D] border-2 border-[#4A3A2D]"
      : "bg-[#4A3A2D] text-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col bg-[#f8f4ee] text-[#4A4A4A]"
    >
      <HeaderComponent progress={progress} />

      {/* Question Text */}
      <div className="text-center mt-10 px-4 text-xl font-semibold">
        {typeof question === "string" ? (
          <p>{question}</p>
        ) : (
          question.map((line, index) => <p key={index}>{line}</p>)
        )}
      </div>

      {/* Answer Buttons */}
      <div className="flex flex-col gap-4 items-center justify-center mt-10 px-4">
        <button
          type="button"
          onClick={() => setSelected("ja")}
          className={`w-full max-w-xs h-14 rounded-xl text-lg font-semibold hover:opacity-90 transition ${getButtonStyle(
            "ja"
          )}`}
        >
          Ja
        </button>
        <button
          type="button"
          onClick={() => setSelected("nein")}
          className={`w-full max-w-xs h-14 rounded-xl text-lg font-semibold hover:opacity-90 transition ${getButtonStyle(
            "nein"
          )}`}
        >
          Nein
        </button>
      </div>

      <FooterComponent onBack={back} isSubmit />
    </form>
  );
}
