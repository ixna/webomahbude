"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/ui/page/AnimatedSection";
import GlassCard from "@/components/ui/page/GlassCard";
import { Target, Heart, Users, Award, Eye, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { img } from "@/lib/utils";

// Vision & Mission data
const visiMisi = {
  visi: "Menjadi lembaga pengasuhan anak terpercaya yang mendukung tumbuh kembang optimal anak usia dini melalui pendekatan holistik dan penuh kasih sayang.",
  misi: [
    {
      icon: Heart,
      title: "Pengasuhan Penuh Kasih",
      description: "Memberikan perawatan dan perhatian dengan cinta seperti keluarga sendiri",
    },
    {
      icon: Sparkles,
      title: "Stimulasi Optimal",
      description: "Menyediakan lingkungan yang mendukung eksplorasi dan pembelajaran aktif",
    },
    {
      icon: Users,
      title: "Pembentukan Karakter",
      description: "Mengembangkan nilai-nilai positif dan keterampilan sosial sejak dini",
    },
    {
      icon: Award,
      title: "Standar Berkualitas",
      description: "Menjaga standar keamanan, kebersihan, dan kualitas layanan tertinggi",
    },
  ],
};

// Facilities data
const facilities = [
  {
    name: "Ruang Kelas",
    description: "Ruang belajar yang nyaman dengan pencahayaan alami dan dekorasi ramah anak",
    image: img("/images/facilities/classroom.png"),
    span: "md:col-span-2",
  },
  {
    name: "Playground Outdoor",
    description: "Area bermain luar ruangan dengan permainan aman dan flooring khusus",
    image: img("/images/facilities/playground.png"),
    span: "md:col-span-1",
  },
  {
    name: "Ruang Tidur",
    description: "Area tidur yang tenang dan nyaman dengan pengawasan ketat",
    image: img("/images/gallery/activity-nap.png"),
    span: "md:col-span-1",
  },
  {
    name: "Dapur & Kantin",
    description: "Dapur bersih untuk menyiapkan makanan sehat dan bergizi",
    image: img("/images/facilities/kitchen.png"),
    span: "md:col-span-2",
  },
  {
    name: "Ruang Resepsi",
    description: "Area selamat datang yang hangat untuk orang tua dan tamu",
    image: img("/images/facilities/reception.png"),
    span: "md:col-span-1",
  },
  {
    name: "Toilet Anak",
    description: "Fasilitas kebersihan dengan ukuran dan desain khusus untuk anak",
    image: img("/images/facilities/bathroom.png"),
    span: "md:col-span-1",
  },
];

// Team data
const team = [
  {
    name: "Ibu Ratna Dewi, S.Pd.",
    role: "Kepala Daycare",
    description: "Berpengalaman 15+ tahun dalam pendidikan anak usia dini",
    image: img("/images/team/principal.png"),
  },
  {
    name: "Ibu Sari Wulandari",
    role: "Guru Senior",
    description: "Spesialis stimulasi sensorik dan motorik halus",
    image: img("/images/team/teacher1.png"),
  },
  {
    name: "Ibu Anisa Putri",
    role: "Guru Asisten",
    description: "Ahli dalam kreativitas dan seni untuk anak",
    image: img("/images/team/teacher2.png"),
  },
  {
    name: "Ibu Dewi Anggraini, A.Md.",
    role: "Ahli Gizi",
    description: "Menyusun menu sehat dan bergizi untuk anak",
    image: img("/images/team/nutritionist.png"),
  },
];

// Gallery activities
const gallery = [
  { image: img("/images/gallery/activity-reading.png"), alt: "Kegiatan membaca bersama", caption: "Membaca Bersama" },
  { image: img("/images/gallery/activity-art.png"), alt: "Kegiatan seni dan kreativitas", caption: "Seni & Kreativitas" },
  { image: img("/images/gallery/activity-music.png"), alt: "Kelas musik untuk anak", caption: "Kelas Musik" },
  { image: img("/images/gallery/activity-meal.png"), alt: "Waktu makan bersama", caption: "Makan Bersama" },
  { image: img("/images/gallery/activity-outdoor.png"), alt: "Bermain di luar ruangan", caption: "Outdoor Play" },
];

// Lightbox component
function Lightbox({ 
  isOpen, 
  onClose, 
  image, 
  alt 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  image: string; 
  alt: string;
}) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative max-w-4xl w-full aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain rounded-2xl"
          sizes="(max-width: 1024px) 100vw, 80vw"
        />
      </motion.div>
    </motion.div>
  );
}

export default function TentangKami() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: "", alt: "" });

  const openLightbox = (image: string, alt: string) => {
    setLightbox({ isOpen: true, image, alt });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, image: "", alt: "" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={img("/images/hero/hero-children.png")}
            alt="Anak-anak belajar dan bermain di Omah Bude Daycare"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-white/90" />
        </div>

        <div className="absolute top-32 right-20 w-72 h-72 bg-lavender-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 container-custom py-32 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-500 text-sm font-medium mb-6">
              Tentang Kami
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Mengenal Lebih Dekat{" "}
              <span className="text-gradient">Omah Bude</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Sejak 2018, kami telah menjadi rumah kedua untuk ratusan anak di Jakarta. 
              Dengan dedikasi penuh, kami mendampingi setiap langkah tumbuh kembang si kecil.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-lavender-100" />
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={img("/images/hero/hero-main.png")}
                    alt="Interior Omah Bude Daycare"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 glass-card-strong p-6 max-w-xs"
                >
                  <p className="font-mono text-3xl font-bold text-lavender-600 tabular-nums">6+</p>
                  <p className="text-foreground/70">Tahun melayani keluarga Indonesia</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
                Cerita Kami
              </span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
                Berawal dari Kecintaan pada Anak
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Omah Bude didirikan oleh Ibu Ratna Dewi pada tahun 2018, berawal dari 
                  kepedulian terhadap kebutuhan pengasuhan anak yang berkualitas di Jakarta. 
                  Dengan pengalaman lebih dari 15 tahun di bidang pendidikan anak usia dini, 
                  beliau bermimpi menciptakan tempat yang tidak hanya mengasuh, tetapi juga 
                  mendidik dengan penuh kasih sayang.
                </p>
                <p>
                  Nama &ldquo;Omah Bude&rdquo; berasal dari bahasa Jawa yang berarti &ldquo;Rumah Bibi&rdquo;, 
                  melambangkan filosofi kami bahwa setiap anak yang datang akan diperlakukan 
                  seperti keluarga sendiri. Kami percaya bahwa kasih sayang adalah fondasi 
                  utama dalam mendukung tumbuh kembang anak.
                </p>
                <p>
                  Hingga kini, Omah Bude telah dipercaya oleh lebih dari 500 keluarga dan 
                  terus berkembang dengan komitmen yang sama: mengasuh sepenuh hati.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-lavender-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-rose-500 uppercase tracking-wider mb-4 block">
              Visi & Misi
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Panduan Perjalanan Kami
            </h2>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection className="mb-16">
            <GlassCard variant="strong" className="p-8 md:p-12 text-center max-w-4xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-lavender-100 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-lavender-600" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-foreground mb-4">Visi</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {visiMisi.visi}
              </p>
            </GlassCard>
          </AnimatedSection>

          {/* Mission */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visiMisi.misi.map((item, index) => (
              <StaggerItem key={index}>
                <GlassCard className="p-6 h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-rose-500" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70">
                    {item.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Facilities */}
      <section id="fasilitas" className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
              Fasilitas
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Ruang yang Didesain untuk Tumbuh
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Setiap sudut Omah Bude dirancang dengan mempertimbangkan kebutuhan dan keselamatan anak
            </p>
          </AnimatedSection>

          {/* Staggered Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {facilities.map((facility, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className={facility.span}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer h-full"
                  onClick={() => openLightbox(facility.image, facility.name)}
                >
                  <GlassCard className="overflow-hidden h-full">
                    <div className="relative h-64 md:h-full min-h-[280px]">
                      <Image
                        src={facility.image}
                        alt={facility.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/80 via-lavender-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-serif font-semibold text-xl text-white mb-2">
                          {facility.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="tim" className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-lavender-200/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl translate-x-1/3" />

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-rose-500 uppercase tracking-wider mb-4 block">
              Tim Kami
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Pengasuh yang Berdedikasi
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tim profesional yang tidak hanya terlatih, tetapi juga memiliki hati untuk anak
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <GlassCard className="overflow-hidden text-center group">
                  <div className="relative h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-6 -mt-12 relative z-10">
                    <h3 className="font-serif font-semibold text-xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-lavender-600 font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-foreground/60 text-sm">
                      {member.description}
                    </p>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Daily Activities Gallery */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="text-sm font-medium text-lavender-600 uppercase tracking-wider mb-4 block">
              Galeri Kegiatan
            </span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Momen Bahagia Setiap Hari
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Keceriaan dan pembelajaran yang terjadi setiap hari di Omah Bude
            </p>
          </AnimatedSection>

          {/* Horizontal scroll gallery */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {gallery.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 snap-center cursor-pointer group"
                  onClick={() => openLightbox(item.image, item.alt)}
                >
                  <GlassCard className="w-72 md:w-80 overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="320px"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-serif font-medium text-foreground group-hover:text-lavender-600 transition-colors">
                        {item.caption}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        image={lightbox.image}
        alt={lightbox.alt}
      />
    </>
  );
}
