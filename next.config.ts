import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportar como sitio estático
  output: 'export',
  
  // Configurar basePath y assetPrefix para GitHub Pages
  basePath: '/subscribe-form', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio en GitHub
  assetPrefix: '/subscribe-form', // Reemplaza <nombre-del-repositorio> con el nombre de tu repositorio en GitHub
  
  // Si necesitas otros ajustes, puedes agregarlos aquí
};

export default nextConfig;
