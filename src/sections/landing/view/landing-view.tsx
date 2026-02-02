"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ------------------------------------------------------------

const PROJECTS_ROW_1 = [
  "/assets/images/thumbnail-project/1.png",
  "/assets/images/thumbnail-project/2.png",
  "/assets/images/thumbnail-project/3.png",
];

const PROJECTS_ROW_2 = [
  "/assets/images/thumbnail-project/4.png",
  // "/assets/images/thumbnail-project/5.jpg",
  "/assets/images/thumbnail-project/6.png",
  "/assets/images/thumbnail-project/7.png",
];

// ------------------------------------------------------------

export function LandingView() {
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
    <div className="min-h-screen flex flex-col bg-foreground text-background relative overflow-hidden">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`fixed left-1/2 -translate-x-1/2 z-10 flex items-center gap-8 bg-foreground/50 backdrop-blur-md rounded-lg p-2 pl-3 transition-all duration-500 ease-in-out ${
          isVisible ? "top-3" : "-top-24"
        }`}
      >
        <Link href="/">
          <h1 className="text-2xl font-bold">R</h1>
        </Link>
        <div className="flex items-center gap-5">
          {/* <Link href="/" className="text-sm">
            Home
          </Link> */}
          <Link href="/" className="text-sm">
            Portfolio
          </Link>
          <Link href="/" className="text-sm">
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
      <main className="flex flex-col">
        {/* Hero */}
        <section className="min-h-screen container mx-auto px-5 flex items-center relative pb-20 md:pb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="w-full flex flex-col gap-y-2"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-lg font-medium"
            >
              HI, I AM
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-6xl md:text-9xl leading-none font-bold tracking-tight -ml-1 md:-ml-2 mb-4 md:mb-8"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
                Reinaldi
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
                Djamil
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-lg font-medium md:text-center"
            >
              & I'M A
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-6xl md:text-9xl leading-none font-bold tracking-tight md:text-right"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
                Web
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
                Developer
              </span>
            </motion.h1>
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
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            className="w-full absolute bottom-20 md:bottom-10 left-0 right-0 flex flex-col md:flex-row md:items-center justify-between px-5"
          >
            <div className="hidden md:flex items-center gap-3">
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
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Button
                variant="outline"
                className="w-full md:w-auto h-11 border-background bg-foreground font-semibold px-4"
              >
                Explore My Work
                <Icon icon="hugeicons:arrow-down-02" className="size-5" />
              </Button>
              <Link
                href="https://wa.me/6282214487498/?text=Halo%20Redjaa..."
                target="_blank"
              >
                <Button
                  variant="secondary"
                  className="hidden md:flex h-11 font-semibold px-4"
                >
                  Let's Connect
                  <Icon icon="hugeicons:arrow-right-02" className="size-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
        {/* Preview Portfolio */}
        <section className="overflow-hidden py-10 flex flex-col gap-5">
          <div className="flex">
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-5 shrink-0 pr-5"
            >
              {[
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
              ].map((project, index) => (
                <div
                  key={index}
                  className="h-60 sm:h-80 md:h-96 aspect-4/3 overflow-hidden relative shrink-0"
                >
                  <Image
                    src={project}
                    fill
                    className="object-cover"
                    alt={`Project ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-5 shrink-0 pr-5"
            >
              {[
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
                ...PROJECTS_ROW_1,
              ].map((project, index) => (
                <div
                  key={index}
                  className="h-60 sm:h-80 md:h-96 aspect-4/3 overflow-hidden relative shrink-0"
                >
                  <Image
                    src={project}
                    fill
                    className="object-cover"
                    alt={`Project ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex">
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-5 shrink-0 pr-5"
            >
              {[
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
              ].map((project, index) => (
                <div
                  key={index}
                  className="h-60 sm:h-80 md:h-96 aspect-4/3 overflow-hidden relative shrink-0"
                >
                  <Image
                    src={project}
                    fill
                    className="object-cover"
                    alt={`Project ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex items-center gap-5 shrink-0 pr-5"
            >
              {[
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
                ...PROJECTS_ROW_2,
              ].map((project, index) => (
                <div
                  key={index}
                  className="h-60 sm:h-80 md:h-96 aspect-4/3 overflow-hidden relative shrink-0"
                >
                  <Image
                    src={project}
                    fill
                    className="object-cover"
                    alt={`Project ${index + 1}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
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
          <div>
            <p>
              © {new Date().getFullYear()} Reinaldi Djamil. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <p>Based in Indonesia</p>
            <p>GMT+8</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
