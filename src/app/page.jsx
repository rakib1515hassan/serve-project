"use client";
import { useState } from "react";
import YesNoQuestionComponent from "@/components/utils/YesNoQuestionComponent";
import ChoseComponent from "@/components/ChoseDogCatComponent";
import { langContent } from "@/lib/langContent";

export default function StepManager() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const lang = process.env.NEXT_PUBLIC_ACTIVE_LANGUAGE || "EN"; // fallback to EN
  const t = langContent[lang];

  const goToNext = () => setStep((prev) => prev + 1);
  const goToPrev = () => setStep((prev) => prev - 1);

  const handleYesNoAnswer = (answer) => {
    const newAnswers = { ...answers, has_pet: answer };
    setAnswers(newAnswers);
    localStorage.setItem("has_pet", answer);
  };

  switch (step) {
    case 1:
      return (
        <YesNoQuestionComponent
          progress={12}
          question={t.question1}
          onAnswer={handleYesNoAnswer}
          back={null}
          next={goToNext}
        />
      );

    case 2:
      return (
        <ChoseComponent
          question={t.question2}
          back={goToPrev}
          next={() => setStep(3)}
        />
      );

    default:
      return <div className="text-center mt-10">End of steps</div>;
  }
}
