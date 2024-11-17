"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <motion.div
        className="absolute inset-0 border-[20px] border-zinc-200 dark:border-zinc-800"
        style={{ scale: scrollYProgress, opacity }}
      />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            variants={animationVariants}
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              ULUGBEK
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              ESHNAZAROV
            </span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto"
            variants={animationVariants}
          >
            Ajoyib loyihalar va innovatsion yechimlarni kashf eting.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            variants={animationVariants}
          >
            <Button
              className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto"
              size="lg"
            >
              Explore Projects
              <FaArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-4"
            variants={animationVariants}
          >
            <motion.a
              href="#"
              className="text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-100 to-transparent dark:from-zinc-900 z-10"
        style={{ y }}
      />

      <motion.div
        className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        animate={{
          scale: [1, 1.1, 1],
          translateX: [0, 20, 0],
          translateY: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        animate={{
          scale: [1, 1.1, 1],
          translateX: [0, -20, 0],
          translateY: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        animate={{
          scale: [1, 1.1, 1],
          translateX: [0, 15, 0],
          translateY: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </section>
  );
}
