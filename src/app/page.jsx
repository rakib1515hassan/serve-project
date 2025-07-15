"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import YesNoQuestionComponent from "@/components/YesNoQuestionComponent";

export default function Home() {
  const router = useRouter();

  const handleAnswer = (answer) => {
    // ✅ Save to localStorage
    localStorage.setItem("has_pet", answer); // 'ja' or 'nein'

    console.log("answer =", answer);

    // ✅ Navigate based on answer
    if (answer === "ja") {
      // router.push("/page2"); // Example: question set A
    } else {
      // router.push("/page5"); // Example: question set B
    }
  };

  return (
    <YesNoQuestionComponent
      title="tierlich."
      progress={0}
      question="Hast du Haustiere ?"
      onAnswer={handleAnswer}
      nextHref="/page2"
    />
  );
}
