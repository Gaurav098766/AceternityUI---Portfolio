"use client";
import React from "react";
import { Category } from "@/utils/data";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { Button } from "./ui/moving-border";
interface CatListPorps {
  selectedCategoryId: number | null;
  setSelectedCategoryId: (categoryId: number | null) => void;
  categories: Category[];
}
const Categories = ({
  selectedCategoryId,
  setSelectedCategoryId,
  categories,
}: CatListPorps) => {
  return (
    <motion.div
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className="flex justify-center flex-wrap gap-4"
    >
      {/* <button
        onClick={() => setSelectedCategoryId(0)}
        borderRadius="1.75rem"
        className={`${
          selectedCategoryId == 0 && "bg-purple-500"
        } bg-black border-purple-500 border-[1px] text-white font-bold py-2 px-4 rounded-lg`}
      >
        All
      </button> */}
      <Button
        onClick={() => setSelectedCategoryId(0)}
        borderRadius="1.75rem"
        className={`${selectedCategoryId == 0 && "bg-yellow-500"} 
          bg-black border-yellow-500 border-[3px] text-white text-base font-extrabold py-2 px-4 rounded-lg`}
      >
        All
      </Button>
      {categories.map((cat) => (
        <Button
          onClick={() => setSelectedCategoryId(cat.id)}
          borderRadius="1.75rem"
          className={`${selectedCategoryId == cat.id && "bg-yellow-500"}
          bg-black border-yellow-500 border-[3px] text-white text-base font-extrabold py-2 px-4 rounded-lg`}
        >
          {cat.name}
        </Button>
      ))}
    </motion.div>
  );
};

export default Categories;
