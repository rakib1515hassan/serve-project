"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import YesNoQuestionComponent from "@/components/YesNoQuestionComponent";
import ChoseComponent from "@/components/ChoseComponent";

export default function Home() {
  const router = useRouter();

  const handleAnswer = (answer) => {
    // ✅ Save to localStorage
    localStorage.setItem("has_pet", answer); // 'ja' or 'nein'

    console.log("answer =", answer);

    // ✅ Navigate based on answer
    if (answer === "ja") {
      <ChoseComponent/>
    } else {
    }
  };

  return (
    <YesNoQuestionComponent
      title="tierlich."
      progress={12}
      question="Hast du Haustiere ?"
      onAnswer={handleAnswer}
      backHref="/page1"
      nextHref="/page2"
    />
  );
}
