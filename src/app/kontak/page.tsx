"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/page/AnimatedSection";
import GlassCard from "@/components/ui/page/GlassCard";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Instagram,
  Facebook,
  MessageCircle,
  CheckCircle,
  User,
  Baby
} from "lucide-react";
import { useState } from "react";

// Contact info
const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Kebahagiaan No. 123, Kelurahan Ceria, Jakarta Selatan 12345",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "0812-3456-7890",
    link: "tel:+6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@omahbude.com",
    link: "mailto:hello@omahbude.com",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07:00 - 18:00\nSabtu: 07:00 - 14:00",
    link: null,
  },
];

// Social media
const socialMedia = [
  { icon: Instagram, name: "Instagram", handle: "@omahbude", link: "https://instagram.com/omahbude" },
  { icon: Facebook, name: "Facebook", handle: "Omah Bude Daycare", link: "https://facebook.com/omahbude" },
  { icon: MessageCircle, name: "WhatsApp", handle: "0812-3456-7890", link: "https://wa.me/6281234567890" },
];

// Age options
const ageOptions = [
  "0-6 bulan",
  "6-12 bulan",
  "1-2 tahun",
  "2-3 tahun",
  "3-4 tahun",
  "4-5 tahun",
];

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/facilities/reception.png"
            alt="Ruang resepsi Omah Bude Daycare"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/95" />
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-lavender-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-rose-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 container-custom py-24 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-500 text-sm font-medium mb-6">
              Hubungi Kami
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Mari{" "}
              <span className="text-gradient">Berkenalan</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
              Jadwalkan kunjungan dan lihat langsung mengapa Omah Bude menjadi pilihan keluarga Jakarta
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-lavender-200/30 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-rose-200/30 rounded-full blur-3xl translate-x-1/3" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection direction="left">
              <GlassCard variant="strong" className="p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-foreground mb-4">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-foreground/70 mb-6">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons 
                      dalam 1x24 jam.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          childAge: "",
                          message: "",
                        });
                      }}
                      className="text-lavender-600 font-medium hover:text-lavender-700"
                    >
                      Kirim pesan lain
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-serif font-bold text-2xl text-foreground mb-2">
                      Jadwalkan Kunjungan
                    </h2>
                    <p className="text-foreground/60 mb-8">
                      Isi form berikut dan tim kami akan menghubungi Anda
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nama Lengkap
                        </label>
                        <div className="relative">
                          <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                            focusedField === "name" ? "text-lavender-500" : "text-foreground/30"
                          }`} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-lavender-100 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100 transition-all outline-none"
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-lavender-100 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100 transition-all outline-none"
                            placeholder="email@contoh.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            No. Telepon
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/50 border border-lavender-100 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100 transition-all outline-none font-mono"
                            placeholder="08xx-xxxx-xxxx"
                          />
                        </div>
                      </div>

                      {/* Child Age */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Usia Anak
                        </label>
                        <div className="relative">
                          <Baby className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
                            focusedField === "childAge" ? "text-lavender-500" : "text-foreground/30"
                          }`} />
                          <select
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("childAge")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/50 border border-lavender-100 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100 transition-all outline-none appearance-none"
                          >
                            <option value="">Pilih usia anak</option>
                            {ageOptions.map((age) => (
                              <option key={age} value={age}>
                                {age}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Pesan
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-white/50 border border-lavender-100 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-100 transition-all outline-none resize-none"
                          placeholder="Ceritakan kebutuhan anak Anda atau pertanyaan yang ingin ditanyakan..."
                        />
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-gradient-to-r from-lavender-500 to-lavender-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-lavender-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            Kirim Pesan
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </GlassCard>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {/* Contact Cards */}
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <GlassCard hover={false} className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-lavender-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-foreground/70 hover:text-lavender-600 transition-colors whitespace-pre-line"
                                target={info.link.startsWith("http") ? "_blank" : undefined}
                                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-foreground/70 whitespace-pre-line">
                                {info.content}
                              </p>
                            )}
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Ikuti Kami
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialMedia.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                        className="glass-card px-5 py-3 flex items-center gap-3 hover:bg-lavender-50 transition-colors"
                      >
                        <social.icon className="w-5 h-5 text-lavender-600" />
                        <div>
                          <p className="font-medium text-sm text-foreground">
                            {social.name}
                          </p>
                          <p className="text-xs text-foreground/60">
                            {social.handle}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <GlassCard variant="strong" className="p-6 bg-gradient-to-br from-lavender-500 to-lavender-600">
                  <h3 className="font-semibold text-white text-lg mb-2">
                    Butuh respons cepat?
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Hubungi kami langsung melalui WhatsApp untuk pertanyaan mendesak.
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-lavender-600 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat WhatsApp
                  </a>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-subtle-gradient relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Lokasi Kami
            </h2>
            <p className="text-foreground/60">
              Mudah dijangkau dari berbagai area di Jakarta Selatan
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard className="overflow-hidden">
              <div className="relative h-80 md:h-96 bg-lavender-100">
                {/* Placeholder map - in production, use Google Maps or similar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-lavender-50 to-rose-50">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-lavender-400 mx-auto mb-4" />
                    <p className="text-foreground/70 mb-4">
                      Jl. Kebahagiaan No. 123, Jakarta Selatan
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-lavender-500 text-white font-medium rounded-full hover:bg-lavender-600 transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-4">
              Pertanyaan Umum
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Berapa usia minimal untuk mendaftar?",
                a: "Kami menerima anak mulai usia 3 bulan hingga 5 tahun.",
              },
              {
                q: "Apakah ada biaya pendaftaran?",
                a: "Ya, ada biaya pendaftaran satu kali sebesar Rp 500.000 yang mencakup seragam dan perlengkapan awal.",
              },
              {
                q: "Bagaimana proses adaptasi anak baru?",
                a: "Kami memiliki program adaptasi bertahap selama 1-2 minggu dengan pendampingan khusus.",
              },
              {
                q: "Apakah menyediakan makanan?",
                a: "Ya, kami menyediakan 3 kali makan (sarapan, siang, sore) yang bergizi dan sesuai usia anak.",
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlassCard className="p-6 h-full">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {faq.a}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
