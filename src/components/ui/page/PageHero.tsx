"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  overlay?: boolean;
  centered?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  overlay = true,
  centered = true,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80" />
        )}
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom py-32">
        <div
          className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}
        >
          <AnimatedSection>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              {title}
            </h1>
          </AnimatedSection>
          {subtitle && (
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                {subtitle}
              </p>
            </AnimatedSection>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-lavender-400 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 rounded-full bg-lavender-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
