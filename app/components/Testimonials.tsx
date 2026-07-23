"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayşe K.",
    job: "Mezuniyet Çekimi",
    text:
      "Fotoğraflar beklediğimizden çok daha güzel oldu. İlgi ve kalite gerçekten harikaydı.",
  },
  {
    name: "Merve & Emre",
    job: "Düğün Hikayesi",
    text:
      "Düğün günümüzü ölümsüzleştirdiler. Albüm kalitesi ve çekimler mükemmeldi.",
  },
  {
    name: "Ahmet Y.",
    job: "Vesikalık",
    text:
      "Çok kısa sürede profesyonel vesikalık teslim edildi. Kesinlikle tavsiye ederim.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[8px] text-amber-400">
          MÜŞTERİ YORUMLARI
        </p>

        <h2 className="mb-6 text-center text-6xl font-bold text-slate-900">
          Bizi Tercih Edenler
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-lg text-gray-500">
          Binlerce mutlu müşterimizin yorumlarından bazıları.
        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {reviews.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex">

                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={22}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}

              </div>

              <p className="mb-8 leading-8 text-gray-600">
                {item.text}
              </p>

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-2xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-xl font-bold">
                    {item.name}
                  </h4>

                  <p className="text-gray-500">
                    {item.job}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}