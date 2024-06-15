"use client";
import React from "react";

import Navbar from "../components/Navbar";
import About from "../components/About";
import { HeroBanner } from "@/components/HeroBanner";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
export default function Home() {
  return (
    <div className="bg-[#050709]">
      <Navbar />
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-10">
        <About />
        <RecentWork />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
