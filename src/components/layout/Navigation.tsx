"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 glass-card-strong border-b border-lavender-100/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 md:w-14 md:h-14"
            >
              <Image
                src="/images/logo.png"
                alt="Omah Bude Daycare Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="font-serif font-bold text-lg md:text-xl text-lavender-600 leading-tight">
                Omah Bude
              </h1>
              <p className="text-xs text-rose-400 font-medium -mt-0.5">
                mengasuh sepenuh hati
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 hover:text-lavender-600 transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lavender-500 to-rose-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 text-sm text-foreground/70 hover:text-lavender-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-sm">0812-3456-7890</span>
            </a>
            <Link
              href="/kontak"
              className="px-5 py-2.5 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium text-sm rounded-full hover:shadow-lg hover:shadow-lavender-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Jadwalkan Kunjungan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-lavender-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-lavender-600" />
            ) : (
              <Menu className="w-6 h-6 text-lavender-600" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-card-strong mt-2 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground/80 hover:text-lavender-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4 border-t border-lavender-100"
              >
                <Link
                  href="/kontak"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-medium text-center rounded-full"
                >
                  Jadwalkan Kunjungan
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
