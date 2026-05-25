# Portfolio Javier Escobar Criado

Portfolio profesional de una sola página desarrollado con React, Vite y Tailwind CSS.

## Stack

- React
- Vite
- Tailwind CSS
- Listo para desplegar en Vercel

## Requisitos

- Node.js 20+ (recomendado)
- npm 10+

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

El servidor de desarrollo se inicia por defecto en `http://localhost:5173`.

## Build de producción

```bash
npm run build
```

Salida generada en la carpeta `dist/`.

## Preview local de producción

```bash
npm run preview
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. Entra en Vercel y selecciona `Add New Project`.
3. Importa el repositorio.
4. Vercel detecta Vite automáticamente.
5. Configuración esperada:
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Despliega.

## Subida a GitHub

```bash
git init
git add .
git commit -m "feat: crear portfolio MVP con React, Vite y Tailwind"
git branch -M main
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

Si el repositorio ya estaba inicializado, omite `git init` y configura solo remoto/push.

## Personalización rápida

- Enlaces activos:
  - LinkedIn: `https://www.linkedin.com/in/javier-escobar-criado-9115b1325/`
  - GitHub: `https://github.com/Javivi555`
  - Email: `mailto:javierec555@gmail.com`
- Si necesitas cambiarlos, edítalos en:
  - `src/components/Hero.jsx`
  - `src/components/Contact.jsx`
- Ajusta textos y proyectos en los componentes de `src/components/`.
