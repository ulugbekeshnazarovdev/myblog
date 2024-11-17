"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Next.js", "Stripe", "MongoDB"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/example/taskmanager",
  },
  {
    id: "project3",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard with location-based forecasts and historical data visualization.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "D3.js", "OpenWeather API"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/example/weather-dashboard",
  },
  {
    id: "project4",
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics tool for tracking and visualizing social media engagement across platforms.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Node.js", "Express", "Chart.js"],
    liveUrl: "https://example-analytics.com",
    githubUrl: "https://github.com/example/social-analytics",
  },
  {
    id: "project5",
    title: "Fitness Tracker",
    description:
      "A mobile-first fitness tracking application with workout plans, progress monitoring, and social features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React Native", "GraphQL", "AWS Amplify"],
    liveUrl: "https://example-fitness.com",
    githubUrl: "https://github.com/example/fitness-tracker",
  },
  {
    id: "project6",
    title: "Code Learning Platform",
    description:
      "An interactive platform for learning programming with code challenges, tutorials, and a community forum.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    liveUrl: "https://example-codelearning.com",
    githubUrl: "https://github.com/example/code-learning",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <motion.div
            className="relative h-48 w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-xl mb-2">
            <motion.span
              initial={{ backgroundSize: "0% 2px" }}
              whileHover={{ backgroundSize: "100% 2px" }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundImage:
                  "linear-gradient(to right, currentColor, currentColor)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "0 100%",
              }}
            >
              {project.title}
            </motion.span>
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex justify-between items-center w-full">
            <div className="space-x-2">
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live
                  </motion.span>
                </Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </motion.span>
                </Link>
              </Button>
            </div>
            <Button size="sm" variant="ghost" asChild>
              <Link href={`/projects/${project.id}`}>
                <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.span>
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-36">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h1
          className="text-xl sm:text-4xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          initial={{ backgroundSize: "0% 100%" }}
          animate={{ backgroundSize: "100% 100%" }}
          transition={{ duration: 1 }}
        >
          Oxirgi Loyihalarim.
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Eng zamonaviy veb-ilovalar va vositalar to&apos;plamini
          o&apos;rganing, zamonaviy texnologiyalar va ijodiy tajribani namoyish
          etish muammoni hal qilish.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
