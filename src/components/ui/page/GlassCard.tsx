"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "subtle";
  hover?: boolean;
  children: React.ReactNode;
}

export default function GlassCard({
  variant = "default",
  hover = true,
  children,
  className,
  ...props
}: GlassCardProps) {
  const variants = {
    default: "bg-white/60 backdrop-blur-xl border-white/50",
    strong: "bg-white/85 backdrop-blur-2xl border-white/60",
    subtle: "bg-white/40 backdrop-blur-lg border-white/40",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 16px 48px rgba(138, 110, 230, 0.15)" } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border shadow-glass overflow-hidden",
        variants[variant],
        hover && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
