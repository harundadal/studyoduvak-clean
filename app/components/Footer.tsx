import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Image
              src="/images/logo.png"
              alt="Stüdyo Duvak"
              width={180}
              height={60}
            />

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Ankara'da mezuniyet, düğün, vesikalık, biyometrik ve profesyonel
              fotoğraf çekimleri.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Hızlı Menü
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Ana Sayfa</li>
              <li>Hizmetler</li>
              <li>Galeri</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Hizmetler
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Mezuniyet</li>
              <li>Düğün</li>
              <li>Vesikalık</li>
              <li>Biyometrik</li>
              <li>Stüdyo Çekimi</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              İletişim
            </h3>

            <div className="space-y-3 text-gray-400 text-sm">

              <p>
                Mebusevleri Mah.
                <br />
                Dögol Cd. 51/6
                <br />
                Çankaya / Ankara
              </p>

              <p>0532 262 83 33</p>

              <p>studyoduvak@hotmail.com</p>

              <a
                href="https://wa.me/905322628333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
              >
                WhatsApp
              </a>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
          © 2026 Stüdyo Duvak - Tüm Hakları Saklıdır.
        </div>

      </div>
    </footer>
  );
}