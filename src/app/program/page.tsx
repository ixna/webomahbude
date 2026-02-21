"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/page/AnimatedSection";
import GlassCard from "@/components/ui/page/GlassCard";
import { 
  Clock, 
  Users, 
  BookOpen, 
  Utensils, 
  Moon, 
  Music, 
  Palette,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  Baby,
  Sparkles,
  Heart
} from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/utils";

// Programs data with detailed information
const programs = [
  {
    id: "bayi",
    name: "Bayi",
    age: "0-12 bulan",
    price: 3500000,
    ratio: "1 : 2",
    description: "Program khusus untuk bayi dengan perhatian intensif dan stimulasi awal yang lembut. Kami memahami bahwa bayi membutuhkan kasih sayang dan perhatian ekstra dalam masa-masa awal kehidupannya.",
    activities: [
      "Stimulasi sensorik (penglihatan, pendengaran, sentuhan)",
      "Tummy time dan latihan motorik dasar",
      "Lagu pengantar tidur dan musik lembut",
      "Interaksi verbal untuk perkembangan bahasa",
      "Pijat bayi dan senam bayi",
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "Serah terima & adaptasi" },
      { time: "08:00 - 09:00", activity: "Sarang & istirahat" },
      { time: "09:00 - 10:00", activity: "Stimulasi sensorik" },
      { time: "10:00 - 11:00", activity: "Tidur pagi" },
      { time: "11:00 - 12:00", activity: "Makan siang" },
      { time: "12:00 - 14:00", activity: "Tidur siang" },
      { time: "14:00 - 15:00", activity: "Aktivitas lembut" },
      { time: "15:00 - 16:00", activity: "Makan sore" },
      { time: "16:00 - 17:00", activity: "Persiapan pulang" },
      { time: "17:00 - 18:00", activity: "Penjemputan" },
    ],
    image: img("/images/hero/hero-program.png"),
    color: "lavender",
  },
  {
    id: "batita",
    name: "Batita",
    age: "1-2 tahun",
    price: 3000000,
    ratio: "1 : 3",
    description: "Program untuk anak usia 1-2 tahun yang mulai aktif menjelajahi dunia sekitar. Fokus pada pengembangan motorik, bahasa awal, dan kemandirian melalui bermain yang terarah.",
    activities: [
      "Bermain bebas terarah dan eksplorasi",
      "Latihan berjalan dan keseimbangan",
      "Pengenalan bentuk dan warna",
      "Lagu anak dan gerakan sederhana",
      "Latihan makan mandiri",
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "Serah terima & bermain bebas" },
      { time: "08:00 - 09:00", activity: "Sarapan bersama" },
      { time: "09:00 - 10:00", activity: "Aktivitas motorik kasar" },
      { time: "10:00 - 11:00", activity: "Seni & kreativitas" },
      { time: "11:00 - 12:00", activity: "Makan siang" },
      { time: "12:00 - 14:00", activity: "Tidur siang" },
      { time: "14:00 - 15:00", activity: "Aktivitas sensorik" },
      { time: "15:00 - 16:00", activity: "Makan sore & cerita" },
      { time: "16:00 - 17:00", activity: "Bermain bebas" },
      { time: "17:00 - 18:00", activity: "Penjemputan" },
    ],
    image: img("/images/gallery/activity-art.png"),
    color: "rose",
  },
  {
    id: "balita",
    name: "Balita",
    age: "2-4 tahun",
    price: 2750000,
    ratio: "1 : 5",
    description: "Program untuk anak usia 2-4 tahun yang sedang dalam masa keemasan perkembangan. Kurikulum terintegrasi yang mengembangkan kognitif, sosial, emosional, dan motorik secara seimbang.",
    activities: [
      "Pengenalan huruf dan angka",
      "Bermain peran dan sosialisasi",
      "Olahraga dan permainan outdoor",
      "Kelas musik dan tari",
      "Latihan toilet training",
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "Serah terima & circle time" },
      { time: "08:00 - 09:00", activity: "Sarapan bersama" },
      { time: "09:00 - 10:00", activity: "Pembelajaran terstruktur" },
      { time: "10:00 - 11:00", activity: "Outdoor play" },
      { time: "11:00 - 12:00", activity: "Makan siang" },
      { time: "12:00 - 14:00", activity: "Tidur siang" },
      { time: "14:00 - 15:00", activity: "Seni & kreativitas" },
      { time: "15:00 - 16:00", activity: "Makan sore & cerita" },
      { time: "16:00 - 17:00", activity: "Free play" },
      { time: "17:00 - 18:00", activity: "Penjemputan" },
    ],
    image: img("/images/gallery/activity-reading.png"),
    color: "lavender",
  },
  {
    id: "pra-paud",
    name: "Pra-PAUD",
    age: "4-5 tahun",
    price: 2500000,
    ratio: "1 : 6",
    description: "Program persiapan menuju pendidikan formal untuk anak usia 4-5 tahun. Mengembangkan kesiapan akademik, kemandirian, dan keterampilan sosial yang diperlukan untuk TK.",
    activities: [
      "Membaca dan menulis dasar",
      "Matematika sederhana",
      "Sains eksplorasi",
      "Bahasa Inggris dasar",
      "Keterampilan sosial & emosional",
    ],
    schedule: [
      { time: "07:00 - 08:00", activity: "Serah terima & persiapan" },
      { time: "08:00 - 09:00", activity: "Sarapan bersama" },
      { time: "09:00 - 10:00", activity: "Literasi & numerasi" },
      { time: "10:00 - 11:00", activity: "Sains & eksplorasi" },
      { time: "11:00 - 12:00", activity: "Makan siang" },
      { time: "12:00 - 14:00", activity: "Tidur siang / kegiatan tenang" },
      { time: "14:00 - 15:00", activity: "Bahasa Inggris" },
      { time: "15:00 - 16:00", activity: "Makan sore & review" },
      { time: "16:00 - 17:00", activity: "Free play" },
      { time: "17:00 - 18:00", activity: "Penjemputan" },
    ],
    image: img("/images/facilities/classroom.png"),
    color: "rose",
  },
];

// Inclusions
const inclusions = [
  { icon: Utensils, text: "Makan 3x sehari (sarapan, siang, sore)" },
  { icon: Moon, text: "Tempat tidur dan perlengkapan tidur" },
  { icon: BookOpen, text: "Buku dan material pembelajaran" },
  { icon: Music, text: "Kelas musik dan seni" },
  { icon: Palette, text: "Peralatan seni dan kreativitas" },
  { icon: Heart, text: "Laporan perkembangan bulanan" },
];

// Format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

// Accordion component
function ProgramAccordion({ program }: { program: typeof programs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            program.color === "lavender" ? "bg-lavender-100" : "bg-rose-100"
          }`}>
            <Baby className={`w-8 h-8 ${
              program.color === "lavender" ? "text-lavender-600" : "text-rose-500"
            }`} />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-xl text-foreground">
              {program.name}
            </h3>
            <p className="text-foreground/60 text-sm">{program.age}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="font-mono text-xl font-bold text-lavender-600 tabular-nums">
              {formatCurrency(program.price)}
            </p>
            <p className="text-xs text-foreground/60">per bulan</p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-foreground/40" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="border-t border-lavender-100 pt-6">
                {/* Mobile price */}
                <div className="sm:hidden mb-6 p-4 rounded-xl bg-lavender-50">
                  <p className="font-mono text-2xl font-bold text-lavender-600 tabular-nums">
                    {formatCurrency(program.price)}
                  </p>
                  <p className="text-sm text-foreground/60">per bulan</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description & Activities */}
                  <div>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-lavender-500" />
                        <span className="text-sm font-medium text-foreground">
                          Rasio Pengasuh : Anak
                        </span>
                      </div>
                      <p className="font-mono text-lg text-lavender-600 tabular-nums">
                        {program.ratio}
                      </p>
                    </div>

                    <h4 className="font-semibold text-foreground mb-3">
                      Kegiatan Utama
                    </h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-rose-500 flex-shrink-0 mt-1" />
                          <span className="text-sm text-foreground/70">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-lavender-500" />
                      Jadwal Harian
                    </h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto scrollbar-hide">
                      {program.schedule.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/50"
                        >
                          <span className="font-mono text-xs text-lavender-600 tabular-nums w-20 flex-shrink-0">
                            {item.time}
                          </span>
                          <span className="text-sm text-foreground/70">
                            {item.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Program() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={img("/images/hero/hero-program.png")}
            alt="Program Omah Bude Daycare untuk berbagai usia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/90" />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-lavender-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 container-custom py-32 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-600 text-sm font-medium mb-6">
              Program Kami
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Program{" "}
              <span className="text-gradient">Terbaik</span>{" "}
              untuk Setiap Usia
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Kami menyediakan program yang disesuaikan dengan tahap perkembangan anak, 
              dari bayi hingga siap masuk pendidikan formal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs Accordion */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground">
                  Pilih Program
                </h2>
                <p className="text-foreground/60">
                  Klik untuk melihat detail program
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lavender-400" />
                  <span>Usia dini</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <span>Usia pra-sekolah</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {programs.map((program, index) => (
              <AnimatedSection key={program.id} delay={index * 0.1}>
                <ProgramAccordion program={program} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl translate-x-1/3" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-rose-500 uppercase tracking-wider mb-4 block">
              Biaya
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Investasi untuk Masa Depan
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Biaya transparan tanpa biaya tersembunyi
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <GlassCard variant="strong" className="p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    program.color === "lavender" ? "bg-lavender-100" : "bg-rose-100"
                  }`}>
                    <Baby className={`w-6 h-6 ${
                      program.color === "lavender" ? "text-lavender-600" : "text-rose-500"
                    }`} />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-1">
                    {program.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-4">{program.age}</p>
                  <div className="mt-auto pt-4 border-t border-lavender-100">
                    <p className="font-mono text-2xl font-bold text-lavender-600 tabular-nums">
                      {formatCurrency(program.price)}
                    </p>
                    <p className="text-xs text-foreground/60">per bulan</p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={img("/images/gallery/activity-meal.png")}
                  alt="Anak-anak makan bersama di Omah Bude"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/30 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
                Termasuk dalam Biaya
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
                Semua yang Anak Butuhkan
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Biaya bulanan sudah mencakup semua kebutuhan harian anak. 
                Tidak ada biaya tambahan yang tersembunyi.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inclusions.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-lavender-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-lavender-600" />
                    </div>
                    <span className="text-foreground/70 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Jam Operasional
            </h2>
            <p className="text-foreground/60">Fleksibel untuk kebutuhan orang tua bekerja</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StaggerItem>
              <GlassCard className="p-6 text-center">
                <Clock className="w-8 h-8 text-lavender-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Senin - Jumat</h3>
                <p className="font-mono text-xl text-lavender-600 tabular-nums">
                  07:00 - 18:00
                </p>
              </GlassCard>
            </StaggerItem>
            <StaggerItem>
              <GlassCard className="p-6 text-center">
                <Clock className="w-8 h-8 text-rose-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Sabtu</h3>
                <p className="font-mono text-xl text-rose-500 tabular-nums">
                  07:00 - 14:00
                </p>
              </GlassCard>
            </StaggerItem>
            <StaggerItem>
              <GlassCard className="p-6 text-center">
                <Moon className="w-8 h-8 text-lavender-400 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Minggu & Libur</h3>
                <p className="text-xl text-foreground/60">Tutup</p>
              </GlassCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection>
            <GlassCard variant="strong" className="p-8 md:p-12 text-center">
              <Sparkles className="w-12 h-12 text-lavender-500 mx-auto mb-6" />
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
                Siap Mendaftarkan Si Kecil?
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                Jadwalkan kunjungan untuk melihat langsung fasilitas kami dan diskusi 
                tentang kebutuhan anak Anda. Tim kami siap membantu.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-lavender-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                Jadwalkan Kunjungan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
