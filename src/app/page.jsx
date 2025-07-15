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

  const handleQuestion1Answer = (answer) => {
    const newAnswers = { ...answers, question1_ans: answer };
    setAnswers(newAnswers);
    localStorage.setItem("question1_ans", answer);
    goToNext(); // move to step 2
  };

  const handleQuestion3Answer = (answer) => {
    const newAnswers = { ...answers, question3_ans: answer };
    setAnswers(newAnswers);
    localStorage.setItem("question3_ans", answer);
    goToNext();
  };


  switch (step) {
    case 1:
      return (
        <YesNoQuestionComponent
          progress={12}
          question={t.question1}
          onAnswer={handleQuestion1Answer}
          back={null}
          //next={goToNext} // still used if needed
        />
      );

    case 2:
      console.log("Step 2 - question1_ans:", answers.question1_ans); // ✅ Debugging line
      if (answers.question1_ans === "1") {
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
          <YesNoQuestionComponent
            progress={12}
            question={t.question3}
            onAnswer={handleQuestion3Answer}
            back={goToPrev}
          />
        );
      }

    default:
      return <div className="text-center mt-10">End of steps</div>;
  }
}
