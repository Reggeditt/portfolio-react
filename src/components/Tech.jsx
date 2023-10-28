import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion, motionValue, useTransform } from "framer-motion";

const SkillsCard = ({stacks}) => {
  const techStacks = stacks;
  return (
  <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techStacks.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
)};


const Tech = () => {
  const x = motionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#050816", "#981AE3"]
  );
  return (
    <div className='flex flex-col flex-wrap justify-center gap-10'>
      {
        Object.keys(technologies).map((key) => (
              <div key={key} className="flex flex-col gap-8">
                <motion.div style={{ background }}  className="w-[200px] h-[200px] mx-auto flex justify-center items-center p-4 rounded-full text-2xl" whileInView={{ x: [0, 50, 50, -50, -50, 0] }}>
                  <motion.h2
                    style={{ x}}
                    className="text-center font-thin"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, x: [0, 100, -100, 0] }}
                    transition={{
                      duration: 4,
                      ease: [1, 0.5, 0.8, 1],
                      scale: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                      }
                    }} 
                  >{key}</motion.h2>
                </motion.div>
                <SkillsCard stacks={technologies[key]} />
              </div>
        ))
      }
   </div>
  )
};

export default SectionWrapper(Tech, "");
