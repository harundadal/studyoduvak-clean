"use client";

import {
  Camera,
  GraduationCap,
  Heart,
  IdCard,
  Users,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Mezuniyet Çekimleri",
    text: "Profesyonel okul ve üniversite mezuniyet çekimleri.",
  },
  {
    icon: Heart,
    title: "Düğün Fotoğrafçılığı",
    text: "Düğün hikayesi, dış mekan ve albüm çekimleri.",
  },
  {
    icon: Camera,
    title: "Stüdyo Çekimleri",
    text: "Modern stüdyomuzda profesyonel fotoğraf çekimleri.",
  },
  {
    icon: IdCard,
    title: "Vesikalık & Biyometrik",
    text: "ICAO standartlarında biyometrik ve vesikalık fotoğraf.",
  },
  {
    icon: Users,
    title: "Aile Çekimleri",
    text: "Ailece unutulmaz anılar için profesyonel çekimler.",
  },
  {
  icon: Plane,
  title: "Dış Çekim",
  text: "Doğal ışıkta, park, sokak ve özel mekanlarda profesyonel dış çekim hizmeti.",
},
];

export default function Services() {
  return (
    <section className="bg-[#fafafa] py-36">

      <div className="mx-auto max-w-7xl px-8">

        <span className="mb-4 block text-center text-lg font-semibold uppercase tracking-[8px] text-amber-500">
          STÜDYO DUVAK
        </span>

        <h2 className="mb-6 text-center text-6xl font-black text-gray-900">
          Hizmetlerimiz
        </h2>

        <p className="mx-auto mb-24 max-w-3xl text-center text-xl leading-9 text-gray-500">
          Düğün, mezuniyet, vesikalık, biyometrik, aile ve drone
          çekimlerinde profesyonel çözümler sunuyoruz.
        </p>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[32px] border border-gray-200 bg-white p-12 shadow-md transition-all duration-500 hover:-translate-y-4 hover:border-amber-400 hover:shadow-2xl"
              >

                <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 transition-all duration-300 group-hover:bg-amber-500">

                  <Icon
                    size={42}
                    className="text-amber-500 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                  />

                </div>

                <h3 className="mb-5 text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-lg leading-8 text-gray-600">
                  {service.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}