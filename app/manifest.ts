import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stüdyo Duvak",
    short_name: "Stüdyo Duvak",
    description:
      "Ankara'da mezuniyet, düğün, vesikalık, biyometrik ve profesyonel stüdyo fotoğrafçılığı.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    lang: "tr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}