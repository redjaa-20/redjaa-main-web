"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { paths } from "src/routes/paths";
import { Button } from "../ui/button";

// ------------------------------------------------------------

export function LandingHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 20) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-foreground/50 backdrop-blur-md rounded-lg p-2 pl-3 transition-all duration-500 ease-in-out ${
        isVisible ? "top-3" : "-top-24"
      }`}
    >
      <Link href={paths.landing.root}>
        <h1 className="text-2xl font-bold">R</h1>
      </Link>
      <div className="flex items-center gap-5">
        {/* <Link href="/" className="text-sm">
            Home
          </Link> */}
        <Link href={paths.landing.portfolio} className="text-sm">
          Portfolio
        </Link>
        <Link href={paths.landing.about} className="text-sm">
          About
        </Link>
        {/* <Button
            variant="ghost"
            className="font-normal hover:bg-transparent hover:text-background"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="font-normal hover:bg-transparent hover:text-background"
          >
            Portfolio
          </Button>
          <Button
            variant="ghost"
            className="font-normal hover:bg-transparent hover:text-background"
          >
            About
          </Button> */}
        <Button variant="secondary" className="font-semibold px-4">
          Contact
        </Button>
      </div>
    </motion.header>
  );
}
