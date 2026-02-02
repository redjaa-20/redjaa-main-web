"use client";

import React from "react";

type Props = {
  className?: string;
  /** ukuran kotak grid (px) */
  size?: number;
  /** durasi animasi drift (detik) - makin besar makin pelan */
  speed?: number;
  /** ketebalan garis (px) */
  lineWidth?: number;
  /** opacity garis grid */
  lineOpacity?: number;
  /** opacity glow */
  glowOpacity?: number;
  /** seberapa “3D” (deg). 0 = flat */
  tiltDeg?: number;
  /** seberapa zoom grid */
  scale?: number;
};

export default function AnimatedGridBackground({
  className,
  size = 120,
  speed = 14,
  lineWidth = 1,
  lineOpacity = 0.18,
  glowOpacity = 0.45,
  tiltDeg = 18,
  scale = 1.08,
}: Props) {
  // CSS vars biar gampang tuning
  const style = {
    ["--grid-size" as any]: `${size}px`,
    ["--grid-line" as any]: `${lineWidth}px`,
    ["--grid-line-opacity" as any]: lineOpacity,
    ["--grid-glow-opacity" as any]: glowOpacity,
    ["--grid-speed" as any]: `${speed}s`,
    ["--grid-tilt" as any]: `${tiltDeg}deg`,
    ["--grid-scale" as any]: scale,
  } as React.CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className ?? "",
      ].join(" ")}
      style={style}
    >
      {/* Wrapper untuk perspective */}
      <div className="absolute inset-0 [perspective:900px]">
        {/* Layer grid */}
        <div className="grid-layer absolute inset-[-20%] origin-center" />
        {/* Glow + vignette supaya mirip screenshot */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,transparent_35%,rgba(0,0,0,0.55)_85%)]" />
        {/* Mask lembut di tepi (bikin fokus ke tengah) */}
        <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)] bg-black/30" />
      </div>

      <style jsx>{`
        .grid-layer {
          transform: rotateX(var(--grid-tilt)) scale(var(--grid-scale));
          will-change: background-position, transform;
          opacity: 1;
          /* base grid: dua repeating-linear-gradient */
          background-image:
            repeating-linear-gradient(
              to right,
              rgba(255, 255, 255, var(--grid-line-opacity)) 0,
              rgba(255, 255, 255, var(--grid-line-opacity)) var(--grid-line),
              transparent var(--grid-line),
              transparent var(--grid-size)
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(255, 255, 255, var(--grid-line-opacity)) 0,
              rgba(255, 255, 255, var(--grid-line-opacity)) var(--grid-line),
              transparent var(--grid-line),
              transparent var(--grid-size)
            );
          /* Glow layer tambahan (lebih lembut) */
          filter: drop-shadow(
              0 0 12px rgba(255, 255, 255, var(--grid-glow-opacity))
            )
            drop-shadow(
              0 0 26px
                rgba(255, 255, 255, calc(var(--grid-glow-opacity) * 0.55))
            );
          animation: grid-drift var(--grid-speed) linear infinite;
        }

        @keyframes grid-drift {
          0% {
            background-position:
              0px 0px,
              0px 0px;
          }
          100% {
            /* drift diagonal halus biar “bergerak” */
            background-position:
              calc(var(--grid-size) * 1) calc(var(--grid-size) * -1),
              calc(var(--grid-size) * -1) calc(var(--grid-size) * 1);
          }
        }

        /* Prefer-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .grid-layer {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
