# CFD Starter Lab 🌊

یک وب‌سایت آموزشی مقدماتی برای **Computational Fluid Dynamics (CFD)**، آماده برای آپلود روی **GitHub Pages**.

## Preview

فایل اصلی:

```text
index.html
```

برای مشاهده لوکال، فایل `index.html` را در مرورگر باز کنید.

## Folder Structure

```text
cfd-github-site/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── svg/
│       ├── cfd-pipeline.svg
│       ├── mesh-quality.svg
│       ├── pde-classification.svg
│       └── vorticity.svg
├── cheatsheets/
│   └── cfd-cheatsheet.html
├── docs/
│   └── source-notes.md
└── modules/
    └── README.md
```

## How to Upload to GitHub Pages

1. یک repository جدید در GitHub بسازید، مثلاً:

```text
cfd-starter-lab
```

2. همه فایل‌های این پوشه را داخل repository آپلود کنید.
3. از مسیر زیر GitHub Pages را فعال کنید:

```text
Repository → Settings → Pages → Deploy from branch → main → /root
```

4. بعد از چند دقیقه سایت روی لینک زیر بالا می‌آید:

```text
https://YOUR_USERNAME.github.io/cfd-starter-lab/
```

## Suggested Git Commands

```bash
git init
git add .
git commit -m "Add CFD starter lab website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cfd-starter-lab.git
git push -u origin main
```

## Content Modules

- CFD Mindset and Workflow
- Governing Equations and PDE Classification
- Finite Difference Method
- Finite Volume Method
- Mesh Quality
- Explicit and Implicit Time Methods
- Consistency, Stability, Convergence
- Boundary Conditions
- Turbulence Modeling
- Vorticity–Streamfunction Formulation

## Features

- Persian RTL layout with English/LTR equations
- Interactive quiz
- Progress tracker with `localStorage`
- Printable cheat sheet
- Embedded SVG diagrams
- Responsive design for mobile and desktop

## License

MIT — free to use and modify.
