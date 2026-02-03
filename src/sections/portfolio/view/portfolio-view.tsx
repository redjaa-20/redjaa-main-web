"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { GridSpotlight } from "src/components/GridSpotLight";
import { portfolio } from "src/constant/portfolio";

// ------------------------------------------------------------

export function PortfolioView() {
  return (
    <>
      <section className="min-h-[500px] container mx-auto flex items-center justify-center px-5">
        <div className="absolute inset-0 z-0">
          <GridSpotlight
            gridSize={150}
            gridColor="rgba(255, 255, 255, 0.5)"
            gridStrokeWidth={2}
            spotlightCount={2}
            duration={15}
            className=""
          />
        </div>
        <div className="z-10">
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
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-6xl md:text-8xl font-bold mb-2 tracking-tight text-center"
            >
              <span className="bg-clip-text text-transparent bg-linear-to-tr from-white to-[#b5b5b5]">
                Portfolio
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-lg font-medium text-center"
            >
              I am open for freelance projects and other collaborative works.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="container mx-auto px-5 pb-10 md:pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-7 md:gap-y-10"
        >
          {portfolio.map((porto) => (
            <motion.div
              key={porto.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Link href={`https://${porto.url}.redjaa.my.id`} target="_blank">
                <div className="flex flex-col">
                  <div className="h-60 md:h-70 relative overflow-hidden">
                    <Image
                      src={`/assets/images/portfolio/${porto.thumbnail}`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
