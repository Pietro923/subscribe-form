import React from "react";
import { useLanguageContext } from "@/context/LanguageContext";

const Footer = () => {
  const { language } = useLanguageContext();
  return (
    <footer className="text-xs  pt-4 text-center dark:text-white text-dark"> 
    {language === 'es' ? '© 2025 Formulario de Suscripción. Todos los derechos reservados. Diseño por EquipoDotGuru.' : '© 2025 Subscribe Form. All Rights Reserved. Design by EquipoDotGuru.'}
      
    </footer>
  );
};

export default Footer;
