"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { education } from "@/utils/data";

const Education = () => {
  return (
    <div>
      <TitleText title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {education?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVariant}
            initial="hidden"
            whileInView="show"
          >
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {exp.university}
              </p>
              <p className="text-gray-500 mt-2">{exp.Branch}</p>
              <p className="text-sm text-neutral-600">
                {exp.startDate} - {exp.endDate}
              </p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
