# Proyecto Final EBIS Fullstack
by David & Luis

## Finsmart

A comprehensive financial management platform offering investment tools, portfolio tracking, and financial education services. Finsmart helps users make informed financial decisions through a suite of tools and educational resources.

## Project Overview

Finsmart is a web-based financial management platform designed to provide users with:
- Professional investment tools and portfolio tracking
- Real-time stock market information
- Educational resources for financial literacy
- Personalized savings and investment calculators

## Estructura del proyecto

```
proyecto-final-ebis/
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── styles/
│       └── styles.css
├── dist/
│   ├── types/
│   │   └── typescript.d.ts
│   └── typescript.js
├── docs/
│   └── README.md
├── src/
│   └── typescript.ts
├── views/
│   └── contact.html
├── index.html
└── tsconfig.json
```

## Características
### Páginas
- Index - Landing page con presentación y navegación (Davs)
- Contacto - Formulario de contacto con validación JS (Luis)
- Aviso - Textos legales (Davs + Luis)
- Bolsa - Página principal, valores bur´satiles (API) (Luis)
- Ahorro - Calculadora de ahorro (Luis)
- Noticias - API de noticias financieras fácil https://newsapi.org (Davs)
- Dashboard - Demo de dashboard con JSON interno (Davs)
- Conócenos - Conoce a nuestro equipo (Luis)
- Formación - Formación financiera (Davs)

### Core Functionality
- **Portfolio Management (Mi cartera)**: Personal investment portfolio tracking and analysis
- **Market Status (Estado de la bolsa)**: Real-time stock market information and trends
- **Savings Calculator (Calculadora de ahorro)**: Tool for planning and tracking savings goals

### Additional Services
- **Financial Education (Fórmate con nosotros)**: Educational resources and training materials
- **News Section (Noticias)**: Latest financial news and market updates
- **Company Information (Conócenos)**: About us and company details
- **Contact (Contacto)**: Customer support and contact information

## Technical Stack

### Frontend Technologies
- HTML5
- CSS3
- TypeScript

### TypeScript Configuration
- Target: ES2022
- Strict type checking enabled
- Declaration files generation
- Output directory: ./dist
- Additional features:
  - No implicit any
  - No emit on error
  - Comments removed in output