"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-36">

      {/* Background */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-6xl px-8 text-center"
      >

        <p className="mb-6 text-sm font-semibold uppercase tracking-[10px] text-amber-400">
          STÜDYO DUVAK
        </p>

        <h2 className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          Hayalinizdeki
          <br />
          Fotoğraflar İçin
          <br />
          Hazır mısınız?
        </h2>

        <p className="mx-auto mb-14 max-w-3xl text-xl leading-10 text-gray-200">
          Mezuniyet, düğün, nişan, aile, vesikalık ve biyometrik çekimleriniz
          için profesyonel ekibimizle unutulmaz kareler hazırlıyoruz.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="tel:+90312"
            className="rounded-full bg-amber-500 px-12 py-5 text-xl font-bold text-white transition duration-300 hover:scale-105 hover:bg-amber-600"
          >
            📞 Hemen Ara
          </a>

          <a
            href="https://wa.me/905551112233"
            className="rounded-full border-2 border-white px-12 py-5 text-xl font-bold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>

        </div>

        {/* İstatistikler */}

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-bold text-amber-400">20+</h3>
            <p className="mt-2 text-white/80">Yıllık Deneyim</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-400">10K+</h3>
            <p className="mt-2 text-white/80">Mutlu Müşteri</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-400">%100</h3>
            <p className="mt-2 text-white/80">Memnuniyet</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-amber-400">7/24</h3>
            <p className="mt-2 text-white/80">Destek</p>
          </div>

        </div>

      </motion.div>

    </section>
  );
}