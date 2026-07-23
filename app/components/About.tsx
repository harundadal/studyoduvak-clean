"use client";

import { Award, Camera, Clock3, Star } from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Profesyonel Ekip",
    text: "Modern ekipmanlarla kaliteli çekimler.",
  },
  {
    icon: Award,
    title: "20+ Yıllık Deneyim",
    text: "Binlerce başarılı fotoğraf çekimi.",
  },
  {
    icon: Clock3,
    title: "Hızlı Teslim",
    text: "Fotoğraflarınızı kısa sürede teslim ediyoruz.",
  },
  {
    icon: Star,
    title: "%100 Memnuniyet",
    text: "Müşteri memnuniyeti önceliğimizdir.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-36">

      <div className="mx-auto max-w-7xl px-8">

        <span className="mb-4 block text-center text-lg font-semibold tracking-[8px] uppercase text-amber-500">
          NEDEN BİZ
        </span>

        <h2 className="mb-6 text-center text-6xl font-black text-gray-900">
          Neden Stüdyo Duvak?
        </h2>

        <p className="mx-auto mb-24 max-w-3xl text-center text-xl leading-9 text-gray-500">
          Ankara'da uzun yıllardır profesyonel fotoğrafçılık hizmeti
          sunuyor, her kareyi özenle hazırlıyoruz.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[30px] bg-[#fafafa] p-10 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
              >

                <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-amber-500">

                  <Icon
                    size={42}
                    className="text-white"
                  />

                </div>

                <h3 className="mb-4 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-lg leading-8 text-gray-600">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}