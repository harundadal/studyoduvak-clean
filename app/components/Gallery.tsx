"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "/images/mezuniyet.jpg",
    title: "Mezuniyet",
    category: "MEZUNİYET",
    height: "h-[520px]",
  },
  {
    src: "/images/aile.jpg",
    title: "Aile",
    category: "AİLE",
    height: "h-[300px]",
  },
  {
    src: "/images/dis-cekim.jpg",
    title: "Dış Çekim",
    category: "DIŞ ÇEKİM",
    height: "h-[420px]",
  },
  {
    src: "/images/dugun.jpg",
    title: "Düğün",
    category: "DÜĞÜN",
    height: "h-[320px]",
  },
  {
    src: "/images/studyo.jpg",
    title: "Stüdyo",
    category: "STÜDYO",
    height: "h-[380px]",
  },
  {
    src: "/images/vesikalik.jpg",
    title: "Vesikalık",
    category: "VESİKALIK",
    height: "h-[300px]",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="bg-[#0f172a] py-28">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-sm font-bold tracking-[6px] text-amber-400 uppercase">
          STÜDYO DUVAK
        </p>

        <h2 className="mt-3 text-center text-5xl font-bold text-white">
          Galerimiz
        </h2>

        <p className="mx-auto mt-6 mb-16 max-w-3xl text-center text-gray-300">
          Mezuniyet, düğün, aile, dış çekim, vesikalık ve profesyonel stüdyo
          çalışmalarımızdan seçilmiş kareler.
        </p>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8">

          {galleryItems.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative mb-8 overflow-hidden rounded-3xl ${item.height} group`}
            >

              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">

                <p className="mb-2 text-xs font-bold tracking-[4px] text-amber-400 uppercase">
                  {item.category}
                </p>

                <h3 className="text-4xl font-bold text-white">
                  {item.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}