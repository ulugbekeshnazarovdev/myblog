"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  imageUrl: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Copy Paste from Figma",
    description: "Streamline your workflow with our Figma plugin",
    excerpt:
      "Install the Figma plugin and you're ready to convert your designs to a responsive site. Seamlessly transfer your designs into code with just a few clicks.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/copy-paste-from-figma",
  },
  {
    id: 2,
    title: "Start with Site Templates",
    description: "Kickstart your project with professional templates",
    excerpt:
      "Browse dozens of professionally designed templates. Click, duplicate, customize. Get your website up and running in no time with our extensive template library.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/site-templates",
  },
  {
    id: 3,
    title: "Responsive Design Tools",
    description: "Create layouts that work on all devices",
    excerpt:
      "Create beautiful responsive layouts that work perfectly across all devices and screen sizes. Our intuitive tools make it easy to design for mobile, tablet, and desktop.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/responsive-design-tools",
  },
  {
    id: 4,
    title: "Advanced Features",
    description: "Unlock powerful development capabilities",
    excerpt:
      "Access powerful development tools and features to enhance your web development workflow. From custom animations to API integrations, take your projects to the next level.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/advanced-features",
  },
  {
    id: 5,
    title: "Collaboration Made Easy",
    description: "Work together seamlessly on projects",
    excerpt:
      "Our platform makes team collaboration a breeze. Share designs, leave comments, and work together in real-time to bring your ideas to life faster than ever.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/collaboration-tools",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Speed up your website with built-in tools",
    excerpt:
      "Optimize your website's performance with our suite of built-in tools. From image compression to code minification, ensure your site loads quickly and efficiently.",
    imageUrl: "/placeholder.svg?height=300&width=600",
    link: "/blog/performance-optimization",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
    >
      <Link href={post.link}>
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.02 }}
          >
            {post.title}
          </motion.h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {post.description}
          </p>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const itemsPerPage = 4;

export function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our latest articles, tutorials, and insights about web
            development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <span className="text-gray-600 dark:text-gray-300">
            Page {currentPage} of {Math.ceil(blogPosts.length / itemsPerPage)}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(blogPosts.length / itemsPerPage)
            }
            variant="outline"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/blog">More Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
