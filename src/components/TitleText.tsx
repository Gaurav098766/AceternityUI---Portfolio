"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
const TitleText = ({ title }: { title: string }) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className="mt-20 mb-5 text-transparent text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-900 via-yellow-400 to-white font-bold mdl:text-[64px] text-center"
    >
      {title}
    </motion.h2>
  );
};

export default TitleText;
