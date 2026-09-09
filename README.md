<div align="center">

  <p align="center">
    <strong style="font-size: 24px; letter-spacing: 0.25em;">A U R I C</strong>
    <br />
    <em>Haute Textile Atelier & Archive</em>
  </p>

  <p align="center">
    A high-end editorial e-commerce platform preserving Sri Lanka’s UNESCO-recognized Dumbara handlooms, heritage silks, and maritime botanical batiks.
  </p>

  <p align="center">
    <a href="https://auric-zeta.vercel.app"><strong>View Live Platform →</strong></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15%2B-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

---

## 🏛️ Architectural Overview

AURIC was engineered as a high-fidelity frontend experience representing a private Colombo-based textile house. The design philosophy centers on **editorial minimalism**, tactile dark palettes, micro-interactions, and typographic hierarchy inspired by luxury European and artisanal Asian ateliers.

### Live Production

- **URL:** [https://auric-zeta.vercel.app](https://auric-zeta.vercel.app)
- **CI/CD:** Automated zero-downtime deployment pipeline configured via GitHub Actions & Vercel.

---

## ✨ Key Features & Page Directory

| Route          | Scope                       | Description                                                                                                      |
| :------------- | :-------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| `/`            | **Curated Showcase (Home)** | Atmospheric hero marquee, artisanal highlight carousels, and slow-craft philosophies.                            |
| `/shop`        | **Textile Archive**         | Full catalog with real-time category filtering (Handlooms, Batiks, Sarees, Linens), pricing, and modal inspects. |
| `/collections` | **Capsule Editions**        | Lookbook of seasonal drops with provenance details, loom tension metrics, and organic dye swatches.              |
| `/about`       | **Heritage & Lineage**      | 1840s-to-present timeline, UNESCO-recognized Dumbara geometry, and ethical guild patronage models.               |
| `/contact`     | **Private Concierge**       | VIP client appointment scheduling, bespoke textile commission intake, and atelier details.                       |
| **Drawer**     | **Client Cart System**      | Slide-out cart drawer with dynamic quantity adjustments, persistent state, and order summary totals.             |

---

## 🛠️ Tech Stack & Technical Decisions

- **Framework:** Next.js (App Router) for hybrid static/dynamic page generation, optimized image pipelines, and edge performance.
- **Styling Engine:** Tailwind CSS utilizing an obsidian dark palette (`#0b0b0c`, `#141416`), luxury borders, and muted editorial neutrals.
- **Component Patterns:** Clean separation of concerns between client components (`"use client"` for Cart/Interactions) and server-rendered layouts.
- **Icons:** `lucide-react` carefully curated to maintain a subtle, non-generic luxury visual rhythm.
- **Custom Insignia:** Dynamic Next.js ImageResponse engine (`icon.tsx`) generating custom serif monogram branding for high-DPI viewports.

---

## 🚀 Local Development Setup

To run AURIC on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone [https://github.com/dishanshanuka/auric.git](https://github.com/dishanshanuka/auric.git)
cd auric
```
