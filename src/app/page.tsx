"use client";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/Faq";
import { QuizGame as Quiz } from "@/components/QuizGame";
import Pills from "@/components/Pills";
import Features from "@/components/Features";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Quiz />
      <Pills />
      <FAQ />
    </>
  );
}
