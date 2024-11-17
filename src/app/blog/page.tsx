"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BlogPost {
  id: number;
  title: string;
  date: Date;
  image: {
    src: string;
    alt: string;
    color: string;
  };
  category: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React",
    date: new Date("2024-11-16"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "React logo on blue background",
      color: "bg-blue-400",
    },
    category: "React",
    excerpt:
      "Learn the basics of React and start building modern web applications.",
  },
  {
    id: 2,
    title: "CSS Grid Layout Mastery",
    date: new Date("2024-11-09"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "CSS grid illustration",
      color: "bg-green-300",
    },
    category: "CSS",
    excerpt: "Master CSS Grid Layout and create complex layouts with ease.",
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    date: new Date("2024-10-12"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "JavaScript logo",
      color: "bg-yellow-400",
    },
    category: "JavaScript",
    excerpt: "Explore the powerful features introduced in ES6 and beyond.",
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    date: new Date("2024-10-02"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "TypeScript logo",
      color: "bg-blue-500",
    },
    category: "TypeScript",
    excerpt:
      "Learn best practices for writing clean and efficient TypeScript code.",
  },
  {
    id: 5,
    title: "Responsive Web Design Techniques",
    date: new Date("2024-09-20"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "Responsive design illustration",
      color: "bg-purple-400",
    },
    category: "CSS",
    excerpt: "Discover modern techniques for creating responsive web designs.",
  },
  {
    id: 6,
    title: "Next.js App Router Deep Dive",
    date: new Date("2024-09-15"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "Next.js logo",
      color: "bg-black",
    },
    category: "React",
    excerpt:
      "Explore the new App Router in Next.js and learn how to leverage its power.",
  },
  {
    id: 7,
    title: "Mastering React Hooks",
    date: new Date("2024-09-10"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "React Hooks illustration",
      color: "bg-blue-300",
    },
    category: "React",
    excerpt:
      "Deep dive into React Hooks and how they can simplify your components.",
  },
  {
    id: 8,
    title: "Advanced CSS Animations",
    date: new Date("2024-09-05"),
    image: {
      src: "/placeholder.svg?height=100&width=100",
      alt: "CSS animation illustration",
      color: "bg-pink-400",
    },
    category: "CSS",
    excerpt:
      "Learn how to create stunning animations using pure CSS techniques.",
  },
];

const categories = ["All", "React", "CSS", "JavaScript", "TypeScript"];

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="flex items-start space-x-6 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`relative w-24 h-24 rounded-lg overflow-hidden ${post.image.color} flex-shrink-0`}
        >
          <Image
            src={post.image.src}
            alt={post.image.alt}
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply dark:mix-blend-normal"
          />
        </motion.div>
        <div className="flex-1">
          <motion.h2
            className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100"
            whileHover={{ x: 5 }}
          >
            {post.title}
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center space-x-4">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {format(post.date, "MMMM d, yyyy")}
            </time>
            <span className="text-sm px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {post.category}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const postsPerPage = 5;

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className=" container mx-auto py-24 md:py-36">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl sm:text-4xl md:text-8xl text-center font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
      >
        Maqolalar
      </motion.h1>
      <motion.p
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Shaxsiy maqolalarim uzimning hayotiy{" "}
      </motion.p>
      <div className="mb-8 flex justify-end">
        <Select
          onValueChange={(value) => {
            setSelectedCategory(value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <AnimatePresence mode="wait">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-8 flex justify-between items-center">
        <Button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
        </span>
        <Button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredPosts.length / postsPerPage)
          }
          variant="outline"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
