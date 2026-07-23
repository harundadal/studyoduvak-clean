"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[8px] text-amber-400">
            İLETİŞİM
          </p>

          <h2 className="mb-6 text-5xl font-bold text-slate-900">
            Bize Ulaşın
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-gray-500">
            Randevu, fiyat bilgisi veya tüm sorularınız için bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <div className="space-y-6">

            <div className="flex gap-5 rounded-3xl bg-white p-8 shadow-lg">
              <MapPin className="mt-1 text-amber-500" size={34} />

              <div>
                <h3 className="mb-2 text-2xl font-bold">Adres</h3>

                <p className="leading-8 text-gray-600">
                  Mebusevleri, Dögol Cd. 51/6
                  <br />
                  06570 Beşevler-Çankaya
                  <br />
                  Ankara
                </p>
              </div>
            </div>

            <div className="flex gap-5 rounded-3xl bg-white p-8 shadow-lg">
              <Phone className="mt-1 text-amber-500" size={34} />

              <div>
                <h3 className="mb-2 text-2xl font-bold">Telefon</h3>

                <a
                  href="tel:+905322628333"
                  className="text-lg text-gray-600 hover:text-amber-500"
                >
                  0532 262 83 33
                </a>
              </div>
            </div>

            <div className="flex gap-5 rounded-3xl bg-white p-8 shadow-lg">
              <Mail className="mt-1 text-amber-500" size={34} />

              <div>
                <h3 className="mb-2 text-2xl font-bold">E-posta</h3>

                <a
                  href="mailto:studyoduvak@hotmail.com"
                  className="text-lg text-gray-600 hover:text-amber-500"
                >
                  studyoduvak@hotmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-5 rounded-3xl bg-white p-8 shadow-lg">
              <Clock className="mt-1 text-amber-500" size={34} />

              <div>
                <h3 className="mb-2 text-2xl font-bold">Çalışma Saatleri</h3>

                <p className="leading-8 text-gray-600">
                  Hafta İçi : 09:00 - 18:30
                  <br />
                  Cumartesi : 10:30 - 15:30
                  <br />
                  Pazar : Kapalı
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/905322628333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-5 text-xl font-bold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={24} />
              WhatsApp'tan Yazın
            </a>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              src="https://www.google.com/maps?q=Mebusevleri%20D%C3%B6gol%20Cd.%2051/6%20Be%C5%9Fevler%20%C3%87ankaya%20Ankara&output=embed"
              width="100%"
              height="720"
              loading="lazy"
              style={{ border: 0 }}
            />

          </div>

        </div>

      </div>
    </section>
  );
}