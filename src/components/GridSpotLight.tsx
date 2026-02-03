"use client";

import { useEffect, useState, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "src/lib/utils";

interface GridSpotlightProps {
  className?: string;
  gridSize?: number;
  gridColor?: string;
  gridStrokeWidth?: number;
  spotlightCount?: number;
  duration?: number;
}

/**
 * GridSpotlight Component
 * Renders an invisible grid that is revealed by "roaming spotlights".
 *
 * @param gridSize - Size of the grid squares (default: 100)
 * @param gridColor - Color of the grid lines (default: cyan)
 * @param gridStrokeWidth - Width of the grid lines (default: 2)
 * @param spotlightCount - Number of spotlights roaming (default: 1)
 * @param duration - Average duration of one movement cycle (default: 15)
 */
export const GridSpotlight = ({
  className,
  gridSize = 100,
  gridColor = "rgb(14, 165, 233)", // Bright cyan
  gridStrokeWidth = 2,
  spotlightCount = 1,
  duration = 15,
}: GridSpotlightProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const uniqueId = useId();

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const spotlights = Array.from({ length: spotlightCount }).map((_, i) => i);

  if (dimensions.width === 0) return null; // Wait for hydration/mount

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 overflow-hidden bg-neutral-950",
        className,
      )}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          {/* Grid Pattern */}
          <pattern
            id={`grid-pattern-${uniqueId}`}
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
              fill="none"
              stroke={gridColor}
              strokeWidth={gridStrokeWidth}
            />
          </pattern>

          {/* Gradient for the spotlight mask */}
          <radialGradient id={`spotlight-grad-${uniqueId}`}>
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The Mask Definition */}
        <mask id={`grid-mask-${uniqueId}`}>
          <rect width="100%" height="100%" fill="black" />
          {spotlights.map((id) => (
            <SpotlightItem
              key={id}
              containerWidth={dimensions.width}
              containerHeight={dimensions.height}
              baseDuration={duration}
              gradId={`spotlight-grad-${uniqueId}`}
            />
          ))}
        </mask>

        {/* The Grid Rect applying the mask */}
        <rect
          width="100%"
          height="100%"
          fill={`url(#grid-pattern-${uniqueId})`}
          mask={`url(#grid-mask-${uniqueId})`}
        />
      </svg>
    </div>
  );
};

// Individual moving spotlight logic
const SpotlightItem = ({
  containerWidth,
  containerHeight,
  baseDuration,
  gradId,
}: {
  containerWidth: number;
  containerHeight: number;
  baseDuration: number;
  gradId: string;
}) => {
  // Generate random target params
  const getRandomParams = () => ({
    x: Math.random() * containerWidth,
    y: Math.random() * containerHeight,
    nextX: Math.random() * containerWidth,
    nextY: Math.random() * containerHeight,
    // Variation around the base duration
    duration: baseDuration + (Math.random() * 5 - 2.5),
    delay: Math.random() * 5,
  });

  const [params, setParams] = useState(getRandomParams());
  const [key, setKey] = useState(0);

  const handleComplete = () => {
    setParams(getRandomParams());
    setKey((prev) => prev + 1);
  };

  return (
    <motion.circle
      key={key}
      fill={`url(#${gradId})`}
      initial={{
        cx: params.x,
        cy: params.y,
        opacity: 0,
        r: 150,
      }}
      animate={{
        cx: params.nextX,
        cy: params.nextY,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: params.duration,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
        repeat: 0,
      }}
      onAnimationComplete={handleComplete}
    />
  );
};
