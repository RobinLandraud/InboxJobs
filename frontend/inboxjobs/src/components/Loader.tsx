import React from "react";
import { motion } from "motion/react";

const Loader = () => {
  const circles = [0, 1, 2];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="w-6 h-6 bg-blue-500 rounded-full mx-2"
          animate={{
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default Loader;