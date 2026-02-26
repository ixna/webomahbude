"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/page/AnimatedSection";
import GlassCard from "@/components/ui/page/GlassCard";
import PageHero from "@/components/ui/page/PageHero";
import { Heart, Shield, BookOpen, Utensils, Star, ArrowRight, ChevronRight } from "lucide-react";
import { img } from "@/lib/utils";

// Features data
const features = [
  {
    icon: Shield,
    title: "Lingkungan Aman",
    description: "Fasilitas dirancang khusus untuk keamanan anak dengan pengawasan 24 jam dan standar kebersihan tinggi.",
    color: "lavender",
  },
  {
    icon: Heart,
    title: "Pengasuhan Penuh Kasih",
    description: "Tim pengasuh berpengalaman dan terlatih yang memperlakukan setiap anak seperti keluarga sendiri.",
    color: "rose",
  },
  {
    icon: BookOpen,
    title: "Pembelajaran Holistik",
    description: "Kurikulum terintegrasi yang mengembangkan aspek kognitif, emosional, sosial, dan motorik anak.",
    color: "lavender",
  },
  {
    icon: Utensils,
    title: "Nutrisi Seimbang",
    description: "Menu makanan bergizi yang disiapkan dengan bahan berkualitas dan disesuaikan kebutuhan usia.",
    color: "rose",
  },
];

// Programs preview
const programs = [
  {
    name: "Bayi",
    age: "0-12 bulan",
    description: "Perawatan intensif dengan rasio pengasuh 1:2 untuk perhatian maksimal",
    image: img("/images/hero/hero-program.png"),
  },
  {
    name: "Batita",
    age: "1-2 tahun",
    description: "Stimulasi sensorik dan motorik melalui bermain dan eksplorasi",
    image: img("/images/gallery/activity-art.png"),
  },
  {
    name: "Balita",
    age: "2-4 tahun",
    description: "Pengembangan kemandirian, sosialisasi, dan keterampilan dasar",
    image: img("/images/gallery/activity-reading.png"),
  },
  {
    name: "Pra-PAUD",
    age: "4-5 tahun",
    description: "Persiapan menuju pendidikan formal dengan kurikulum terstruktur",
    image: img("/images/facilities/classroom.png"),
  },
];

// Testimonials
const testimonials = [
  {
    name: "Ibu Sarah",
    role: "Orang tua Anindya (3 tahun)",
    content: "Sejak Anindya bergabung di Omah Bude, perkembangannya sangat pesat. Dia jadi lebih mandiri dan suka berbagi dengan teman-temannya.",
    rating: 5,
  },
  {
    name: "Bapak Rudi",
    role: "Orang tua Rafi (2 tahun)",
    content: "Pengasuhnya sangat profesional dan perhatian. Kami merasa tenang meninggalkan Rafi karena tahu dia dalam tangan yang tepat.",
    rating: 5,
  },
  {
    name: "Ibu Maya",
    role: "Orang tua Kirana (4 tahun)",
    content: "Fasilitas lengkap dan bersih. Kirana selalu cerita pengalaman menyenangkan setiap hari. Terima kasih Omah Bude!",
    rating: 5,
  },
];

export default function Beranda() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={img("/images/hero/hero-main.png")}
            alt="Interior Omah Bude Daycare yang hangat dan nyaman"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-white/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-32 right-20 w-72 h-72 bg-lavender-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-16 py-32 md:py-40">
          <div className="max-w-2xl lg:max-w-[45%]">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-600 text-sm font-medium mb-6">
                ✨ Terpercaya sejak 2018
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                Rumah Kedua untuk{" "}
                <span className="text-gradient">Tumbuh Kembang</span>{" "}
                Si Kecil
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                Omah Bude Daycare hadir sebagai solusi pengasuhan anak usia 0-5 tahun 
                dengan pendekatan holistik, lingkungan aman, dan tim pengasuh berpengalaman. 
                <span className="text-rose-500 font-medium"> Mengasuh sepenuh hati.</span>
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontak"
                  className="px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-lavender-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                >
                  Jadwalkan Kunjungan
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/program"
                  className="px-8 py-4 glass-card-strong text-foreground font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  Lihat Program
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>

            {/* Quick Stats */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-lavender-200/50">
                <div>
                  <p className="font-mono text-3xl font-bold text-lavender-600 tabular-nums">500+</p>
                  <p className="text-sm text-foreground/60">Anak telah bergabung</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-bold text-rose-500 tabular-nums">15+</p>
                  <p className="text-sm text-foreground/60">Pengasuh profesional</p>
                </div>
                <div>
                  <p className="font-mono text-3xl font-bold text-lavender-600 tabular-nums">98%</p>
                  <p className="text-sm text-foreground/60">Tingkat kepuasan</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Floating image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-8 top-0 bottom-0 my-auto w-[45%] h-[60%] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src={img("/images/hero/hero-children.png")}
            alt="Anak-anak bermain di Omah Bude Daycare"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 0px, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/20 to-transparent" />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lavender-200/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl translate-x-1/3" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
              Mengapa Omah Bude?
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Keunggulan Kami
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Kami berkomitmen memberikan yang terbaik untuk tumbuh kembang anak Anda
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <GlassCard className="p-8 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      feature.color === "lavender"
                        ? "bg-lavender-100 text-lavender-600"
                        : "bg-rose-100 text-rose-500"
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-rose-500 uppercase tracking-wider mb-4 block">
              Program Kami
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Kelompok Usia
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Program disesuaikan dengan tahap perkembangan anak untuk hasil optimal
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <Link href="/program">
                  <GlassCard className="group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={`Program ${program.name} Omah Bude`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-lavender-600 font-mono">
                          {program.age}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-lavender-600 transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {program.description}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-12">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 text-lavender-600 font-medium hover:text-lavender-700 transition-colors"
            >
              Lihat detail program lengkap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-lavender-200/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl translate-x-1/3" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
              Testimoni
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Kata Mereka
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Pengalaman orang tua yang telah mempercayakan anak mereka di Omah Bude
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <GlassCard variant="strong" className="p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lavender-400 to-rose-400 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.split(" ")[1]?.[0] || testimonial.name[1]}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src={img("/images/gallery/activity-outdoor.png")}
                alt="Anak-anak bermain di luar ruangan Omah Bude"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-lavender-600/95 via-lavender-500/90 to-rose-500/85" />
              
              <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
                    Siap Bergabung dengan Keluarga Omah Bude?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                    Jadwalkan kunjungan untuk melihat langsung fasilitas dan bertemu dengan tim kami. 
                    Kami siap menjawab semua pertanyaan Anda.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/kontak"
                      className="px-8 py-4 bg-white text-lavender-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
                    >
                      Jadwalkan Kunjungan
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a
                      href="tel:+6281234567890"
                      className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
