# N3XO.CL — Plataforma Web Oficial

**OOH · SOFTWARE & SISTEMAS · CHILE & ALEMANIA**

Plataforma web de alto rendimiento construida con **Astro 5** y **Tailwind CSS**, diseñada bajo la identidad corporativa oficial y estándares de ingeniería moderna.

---

## Inicio Rápido

### Requisitos
- Node.js 18+ (recomendado Node 20 o superior).

### Instalación y Desarrollo Local
```bash
# Instalar dependencias (si es primera vez)
npm install

# Iniciar servidor de desarrollo con acceso local y en red
npm run dev
# Abrir en el navegador: http://localhost:3030
```

### Compilar para Producción
```bash
npm run build
# Los archivos estáticos optimizados se generarán en la carpeta /dist/
```

### Previsualizar Build
```bash
npm run preview
```

---

## Identidad de Marca Aplicada

- **Obsidian Black:** `#08080C` (Fondo y atmósferas oscuras premium).
- **Electric Violet:** `#7200FF` (Color distintivo principal).
- **Neon Lavender:** `#C45BFF` / `#E879FF` (Brillos y degradados de acento).
- **Pure White:** `#FFFFFF` (Textos de contraste).
- **Silver Grey:** `#A1A1AA` (Bordes y textos secundarios).
- **Tipografías:**
  - Títulos y Display: **Space Grotesk**
  - Cuerpo de texto y UI: **Inter**

---

## Estructura del Proyecto

```
N3XO/
├── public/
│   ├── img/             # Fotografías reales de soportes y tecnología
│   ├── logos/           # Logotipos oficiales en alta definición
│   └── videos/          # Videos de fondo (1080p, 720p, poster)
├── src/
│   ├── components/
│   │   ├── Navbar.astro              # Navegación fija con cristal esmerilado y menú móvil
│   │   ├── Hero.astro                # Video background 100dvh con dos divisiones claras
│   │   ├── ServicesOOH.astro         # Catálogo de vía pública en Chile
│   │   ├── ServicesDigital.astro     # Soluciones de software, plataformas y web desde Alemania
│   │   ├── CoverageSection.astro     # Cobertura nacional (Concepción, Santiago, Rutas)
│   │   ├── TeamSection.astro         # Liderazgo técnico y comercial
│   │   ├── ContactSection.astro      # Formulario interactivo de propuesta y sedes
│   │   ├── WhatsAppDual.astro        # Botón flotante interactivo Chile / Alemania
│   │   └── Footer.astro              # Mapa del sitio, correos y créditos
│   ├── layouts/
│   │   └── Layout.astro              # Metatags SEO, fuentes y script de revelación
│   ├── pages/
│   │   ├── index.astro               # Portada principal
│   │   ├── nosotros.astro            # Trayectoria, equipo y métricas (+20 años)
│   │   ├── cotizar.astro             # Cotizador interactivo
│   │   └── servicios/
│   │       ├── index.astro           # Resumen de ambas divisiones
│   │       ├── ooh.astro             # División Vía Pública (Chile)
│   │       └── digital.astro         # División Software & Web (Alemania)
│   └── styles/
│       └── global.css                # Estilos base, scrollbar Apple y utilidades
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Canales Integrados

- **Chile (Operación, Medios & OOH):** `+56 9 3234 6724`
- **Alemania (Software, Plataformas & Digital):** `+49 170 9020413`
- **Correos:** `carola.carrasco@n3xo.cl` · `pame.ortega@n3xo.cl`
