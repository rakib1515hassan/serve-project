"use client";
import { useState } from "react";
import YesNoQuestionComponent from "@/components/utils/YesNoQuestionComponent";
import ChoseComponent from "@/components/ChoseDogCatComponent";

export default function StepManager() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const goToNext = () => setStep((prev) => prev + 1);
  const goToPrev = () => setStep((prev) => prev - 1);

  const handleYesNoAnswer = (answer) => {
    const newAnswers = { ...answers, has_pet: answer };
    setAnswers(newAnswers);
    localStorage.setItem("has_pet", answer);
    // do not navigate here, handled in component after submit
  };

  switch (step) {
    case 1:
      return (
        <YesNoQuestionComponent
          title="tierlich."
          progress={12}
          question="Hast du Haustiere?"
          onAnswer={handleYesNoAnswer}
          back={null}
          next={goToNext}
        />
      );

    case 2:
      return <ChoseComponent back={goToPrev} next={() => setStep(3)} />;

    default:
      return <div className="text-center mt-10">End of steps</div>;
  }
}
