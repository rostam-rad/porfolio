import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all available language files
import enCommon from "./en/en.json";
import frCommon from "./fr/fr.json";
import esCommon from "./es/es.json";
import chCommon from "./ch/ch.json";
import farsiCommon from "./farsi/farsi.json";
import hiCommon from "./hi/hindi.json";
import koCommon from "./ko/kor.json";
import rusCommon from "./rus/rus.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon },
      fr: { common: frCommon },
      es: { common: esCommon },
      ch: { common: chCommon },
      farsi: { common: farsiCommon },
      hi: { common: hiCommon },
      ko: { common: koCommon },
      rus: { common: rusCommon },
    },
    fallbackLng: "en",
    debug:
      import.meta.env.NODE_ENV && import.meta.env.NODE_ENV !== "production",
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
