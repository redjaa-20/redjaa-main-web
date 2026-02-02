"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "../ui/button";

// ------------------------------------------------------------

export function LandingFooter() {
  return (
    <footer className="container mx-auto px-5 py-10 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="w-full flex flex-col items-center justify-center mb-10"
      >
        <h1 className="text-6xl md:text-9xl font-bold mb-2 tracking-tight">
          <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
            Connect
          </span>
        </h1>
        <p className="text-lg font-medium text-center">
          I am open for freelance projects and other collaborative works.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.1 },
          },
        }}
        className="flex items-center justify-between mb-10"
      >
        <div className="flex items-center gap-3">
          <div className="group relative z-10 flex items-center justify-center animate-float">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 border-background border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-17 border-background/50 border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 border-background/20 border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-100"></div>
            <Link href="https://instagram.com/redjaa__" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="border-background bg-foreground rounded-full text-background size-11 relative z-20"
              >
                <Icon icon="bi:instagram" className="size-5" />
              </Button>
            </Link>
          </div>
          <div className="group relative z-10 flex items-center justify-center animate-float [animation-delay:1.5s]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 border-background border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-17 border-background/50 border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 border-background/20 border rounded-full opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 delay-100"></div>
            <Link href="https://threads.com/redjaa__" target="_blank">
              <Button
                variant="outline"
                size="icon"
                className="border-background bg-foreground rounded-full text-background size-11 relative z-20"
              >
                <Icon icon="bi:threads" className="size-5" />
              </Button>
            </Link>
          </div>
        </div>
        <Link
          href="https://wa.me/6282214487498/?text=Halo%20Redjaa..."
          target="_blank"
        >
          <Button variant="secondary" className="h-11 font-semibold px-4">
            Let's Talk
            <Icon icon="hugeicons:arrow-right-02" className="size-5" />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          },
        }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-y-4"
      >
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} Reinaldi Djamil. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-8">
          <p>Based in Indonesia</p>
          <p>GMT+8</p>
        </div>
      </motion.div>
    </footer>
  );
}
