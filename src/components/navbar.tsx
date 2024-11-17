"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Folder, LayoutPanelLeft, Phone, Send, Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FaTelegram } from "react-icons/fa";

interface NavItemProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const NavLinkData: NavItemProps[] = [
  {
    href: "/",
    text: "Asosiy",
    icon: <LayoutPanelLeft className="w-5 h-5" />,
  },
  {
    href: "/blog",
    text: "Blog",
    icon: <Send className="w-5 h-5" />,
  },
  {
    href: "/projects",
    text: "Loyihalar",
    icon: <Folder className="w-5 h-5" />,
  },
  { href: "/contact", text: "Aloqa", icon: <Phone className="w-5 h-5" /> },
];

const NavItem = ({
  href,
  text,
  icon,
  onClick,
}: NavItemProps & { onClick?: () => void }) => {
  return (
    <motion.li
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="flex gap-2 items-center hover:text-blue-400 transition-colors duration-200 text-gray-800 dark:text-gray-200"
        onClick={onClick}
      >
        {icon}
        <span className="text-sm font-medium">{text}</span>
      </Link>
    </motion.li>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const scrollYProgress = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(isScrolled && scrollY.get() > 10);
    };
    return scrollY.onChange(handleScroll);
  }, [scrollY]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-300/20 dark:border-gray-700/20 bg-white dark:bg-gray-900"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          className="h-1 bg-blue-500 origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex gap-2 items-center">
                <LayoutPanelLeft className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  ULUGBEK<span className="text-orange-500">ESHNAZAROV</span>
                </span>
              </Link>
            </motion.div>
            <ul className="hidden md:flex items-center justify-between gap-6">
              {NavLinkData.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                  <FaTelegram className="w-8 h-8" />
                  <span>Obuna Buling</span>
                </Button>
              </motion.div>
              <motion.button
                className="md:hidden text-gray-800 dark:text-white"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end">
                <motion.button
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-800 dark:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              <ul className="mt-8 space-y-4">
                {NavLinkData.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    text={item.text}
                    icon={item.icon}
                    onClick={toggleMenu}
                  />
                ))}
              </ul>
              <motion.div
                className="mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                  <FaTelegram className="w-5 h-5 mr-2" />
                  <span>Obuna Buling</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
