"use client";
import { useState } from "react";
import YesNoQuestionComponent from "@/components/utils/YesNoQuestionComponent";
import ChoseComponent from "@/components/ChoseDogCatComponent";
import NoPatComponent from "@/components/NoPatComponent";
import { langContent } from "@/lib/langContent";

export default function StepManager() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const lang = process.env.NEXT_PUBLIC_ACTIVE_LANGUAGE || "EN";
  const t = langContent[lang];

  const goToNext = () => setStep((prev) => prev + 1);
  const goToPrev = () => setStep((prev) => prev - 1);

  const handleYesNoAnswer = (answer) => {
    const newAnswers = { ...answers, has_pet: answer };
    setAnswers(newAnswers);
    localStorage.setItem("has_pet", answer);
    goToNext(); // move to step 2
  };

  switch (step) {
    case 1:
      return (
        <YesNoQuestionComponent
          progress={12}
          question={t.question1}
          onAnswer={handleYesNoAnswer}
          back={null}
          next={goToNext} // still used if needed
        />
      );

    case 2:
      if (answers.has_pet === "1") {
        return (
          <ChoseComponent
            progress={25}
            question={t.question2}
            back={goToPrev}
            next={() => setStep(3)}
          />
        );
      } else {
        return (
          <NoPatComponent back={goToPrev} />
        );
      }

    default:
      return <div className="text-center mt-10">End of steps</div>;
  }
}
