"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-36 max-w-[1700px] items-center px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 mr-12">
          <Image
  src="/images/logo.png"
  alt="Stüdyo Duvak"
  width={275}
  height={190}
  priority
          />
        </Link>

        {/* Menü */}
        <nav className="hidden lg:flex items-center gap-18">

          <a
            href="#anasayfa"
            className="text-4xl font-semibold text-slate-700 transition hover:text-amber-500"
          >
            Ana Sayfa
          </a>

          <a
            href="#hizmetler"
            className="text-3xl font-bold text-slate-700 transition hover:text-amber-500"
          >
            Hizmetler
          </a>

          <a
            href="#hakkimizda"
           className="text-3xl font-bold text-slate-700 transition hover:text-amber-500"
          >
            Hakkımızda
          </a>

          <a
            href="#galeri"
             className="text-4xl font-bold text-slate-700 transition hover:text-amber-500"
          >
            Galeri
          </a>

          <a
            href="#iletisim"
            className="text-4xl font-semibold text-slate-700 transition hover:text-amber-500"
          >
            İletişim
          </a>

        </nav>

        {/* Sağ Butonlar */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:+905322628333"
            className="flex items-center gap-2 rounded-full border border-gray-300 px-8 py-4 text-4xl font-bold transition hover:border-amber-500 hover:text-amber-500"
          >
            <Phone size={18} />
            0532 262 83 33
          </a>

          <a
            href="https://wa.me/905322628333"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

        </div>

      </div>
    </header>
  );
}