// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Habilita el soporte para React
  .init({
    resources: {
      en: {
        translation: {
          subscribe: "SUBSCRIBE",
          placeholder: "Enter your email",
        },
      },
      es: {
        translation: {
          subscribe: "SUSCRÍBETE",
          placeholder: "Ingresa tu correo electrónico",
        },
      },
    },
    lng: "en", // Idioma por defecto
    fallbackLng: "en", // Idioma de reserva
    interpolation: {
      escapeValue: false, // No es necesario escapar en React
    },
  });

export default i18n;
