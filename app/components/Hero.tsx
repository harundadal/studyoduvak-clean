"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden">

      {/* Background */}

      <Image
        src="/images/hero2.jpg"
        alt="Stüdyo Duvak"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1700px] px-16">

        <div className="max-w-3xl">

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block rounded-full border border-amber-400 px-6 py-2 text-sm font-semibold tracking-[5px] text-amber-400"
          >
            STÜDYO DUVAK
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-6xl font-black leading-tight text-white xl:text-8xl"
          >
            Hayatınızdaki
            <br />
            En Özel Anlar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 max-w-2xl text-xl leading-9 text-gray-200"
          >
            Mezuniyet, düğün, nişan, aile, vesikalık ve biyometrik
            çekimlerde Ankara'nın profesyonel fotoğraf stüdyosu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#"
              className="rounded-full bg-amber-500 px-10 py-5 text-xl font-bold text-white transition hover:scale-105 hover:bg-amber-600"
            >
              Randevu Al
            </a>

            <a
              href="https://wa.me/905551112233"
              className="rounded-full border-2 border-white px-10 py-5 text-xl font-bold text-white transition hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex gap-16"
          >
            <div>
              <h3 className="text-5xl font-black text-white">40+</h3>
              <p className="mt-2 text-gray-300">Yıllık Deneyim</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">10K+</h3>
              <p className="mt-2 text-gray-300">Mutlu Müşteri</p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">100%</h3>
              <p className="mt-2 text-gray-300">Memnuniyet</p>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}