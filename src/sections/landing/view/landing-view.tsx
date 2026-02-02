"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import Image from "next/image";
import LightRays from "src/components/LightRays";

// ------------------------------------------------------------

const PROJECTS_ROW_1 = [
  "/assets/images/portfolio/kontener.png",
  "/assets/images/thumbnail-project/2.png",
  "/assets/images/thumbnail-project/3.png",
];

const PROJECTS_ROW_2 = [
  "/assets/images/thumbnail-project/4.png",
  "/assets/images/thumbnail-project/6.png",
  "/assets/images/thumbnail-project/7.png",
];

// ------------------------------------------------------------

export function LandingView() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-dvh md:min-h-screen relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#b5b5b5"
            raysSpeed={1}
            lightSpread={1}
            rayLength={1.5}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse={false}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </motion.div>
        <div className="container mx-auto px-5 w-full min-h-dvh md:min-h-screen flex flex-col justify-center relative z-10 pb-16">
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
              className="text-[4rem] md:text-9xl leading-none font-bold tracking-tight -ml-1 md:-ml-2 mb-10 md:mb-8"
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
              className="text-[4rem] md:text-9xl leading-none font-bold tracking-tight md:text-right"
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
            className="w-full absolute bottom-8 md:bottom-10 left-0 right-0 flex flex-col md:flex-row md:items-center justify-between px-5"
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
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full md:w-auto h-11 font-semibold px-4"
                >
                  Let's Connect
                  <Icon icon="hugeicons:arrow-right-02" className="size-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Preview Portfolio */}
      <section className="overflow-hidden flex flex-col gap-5">
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
    </>
  );
}
