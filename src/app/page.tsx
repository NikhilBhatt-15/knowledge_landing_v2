"use client";
import { Hero } from "@/components/Hero";
import { QuizGame as Quiz } from "@/components/QuizGame";
import Features from "@/components/Features";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Quiz />
      {/* <Pills /> */}
    </>
  );
}
