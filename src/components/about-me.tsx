"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptop,
  FaBook,
  FaMountain,
  FaBookOpen,
  FaUtensils,
  FaEnvelope,
} from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutMe = () => {
  const skills = [
    { name: "Frontend Development", icon: FaCode },
    { name: "Backend Development", icon: FaLaptop },
    { name: "Technical Writing", icon: FaBook },
  ];

  const hobbies = [
    { name: "Hiking", icon: FaMountain },
    { name: "Reading", icon: FaBookOpen },
    { name: "Cooking", icon: FaUtensils },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Profile picture"
            width={800}
            height={600}
            className="rounded-md shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Hello, I&apos;m John Doe
          </h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m a passionate full-stack developer with 5 years of
            experience in creating web applications. My journey in tech started
            with a curiosity for how things work on the internet, and it has led
            me to explore various technologies and frameworks.
          </p>
          <p className="text-muted-foreground mb-6">
            When I&apos;m not coding, you can find me:
          </p>
          <ul className="list-none space-y-2 mb-6">
            {hobbies.map((hobby) => (
              <li key={hobby.name} className="flex items-center">
                <hobby.icon className="w-5 h-5 mr-2 text-primary" />
                <span>{hobby.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">
                    <skill.icon className="w-6 h-6 mr-2 text-primary" />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="w-full bg-secondary rounded-md h-2.5"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                  >
                    <div
                      className="bg-primary h-2.5 rounded-md"
                      style={{ width: "70%" }}
                    ></div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect!</h2>
        <p className="text-muted-foreground mb-6">
          I&apos;m always excited to collaborate on new projects or discuss
          tech. Feel free to reach out!
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild className="rounded-md">
            <a href="/contact" className="inline-flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
