"use client";
import YesNoQuestionComponent from "@/components/YesNoQuestionComponent";

export default function Page2() {
  return (
    <YesNoQuestionComponent
      question={["Ask", "question"]}
      progress={12.5}
      backHref="/page1"
      nextHref="/page3"
    />
  );
}
