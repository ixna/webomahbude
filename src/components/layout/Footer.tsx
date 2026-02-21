"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { img } from "@/lib/utils";

const footerLinks = {
  program: [
    { label: "Bayi (0-12 bulan)", href: "/program#bayi" },
    { label: "Batita (1-2 tahun)", href: "/program#batita" },
    { label: "Balita (2-4 tahun)", href: "/program#balita" },
    { label: "Pra-PAUD (4-5 tahun)", href: "/program#pra-paud" },
  ],
  informasi: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Fasilitas", href: "/tentang-kami#fasilitas" },
    { label: "Tim Pengajar", href: "/tentang-kami#tim" },
    { label: "Kontak", href: "/kontak" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-cream-200/50 pt-20 pb-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 blob blob-lavender opacity-20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 blob blob-rose opacity-20 translate-x-1/3 translate-y-1/3" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src={img("/images/logo.png")}
                  alt="Omah Bude Daycare Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-lavender-600">
                  Omah Bude
                </h3>
                <p className="text-xs text-rose-400 font-medium">
                  mengasuh sepenuh hati
                </p>
              </div>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Rumah kedua untuk tumbuh kembang si kecil. Kami berkomitmen
              memberikan pengasuhan terbaik dengan penuh kasih sayang.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/omahbude"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-lavender-100 transition-colors group"
              >
                <Instagram className="w-5 h-5 text-lavender-500 group-hover:text-lavender-600" />
              </a>
              <a
                href="https://facebook.com/omahbude"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-lavender-100 transition-colors group"
              >
                <Facebook className="w-5 h-5 text-lavender-500 group-hover:text-lavender-600" />
              </a>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
              Program Kami
            </h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-lavender-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
              Informasi
            </h4>
            <ul className="space-y-3">
              {footerLinks.informasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-lavender-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-foreground mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/70">
                  Jl. Kebahagiaan No. 123, Kelurahan Ceria,
                  Jakarta Selatan 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lavender-500 flex-shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="text-sm text-foreground/70 hover:text-lavender-600 transition-colors font-mono"
                >
                  0812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lavender-500 flex-shrink-0" />
                <a
                  href="mailto:hello@omahbude.com"
                  className="text-sm text-foreground/70 hover:text-lavender-600 transition-colors"
                >
                  hello@omahbude.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-lavender-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-foreground/70">
                  <p>Senin - Jumat: 07.00 - 18.00</p>
                  <p>Sabtu: 07.00 - 14.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lavender-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Omah Bude Daycare. Hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privasi"
                className="text-sm text-foreground/60 hover:text-lavender-600 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat"
                className="text-sm text-foreground/60 hover:text-lavender-600 transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
