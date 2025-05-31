"use client";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/Faq";
import { QuizGame as Quiz } from "@/components/QuizGame";
export default function Home() {
  return (
    <>
      <Hero />
      <Quiz />
      <FAQ />
      <Footer />
    </>
  );
}
