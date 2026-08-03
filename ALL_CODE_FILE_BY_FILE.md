# TransBay Xpress — Complete Code File by File

This document contains the editable code for every root, `src`, and public text file.
The PNG logo and favicon are binary image assets and are already included in the `public` folder.

## Project Root Files

### `package.json`

```json
{
  "name": "transbay-xpress-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "engines": {
    "node": ">=18.18.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "4.3.4",
    "autoprefixer": "10.4.20",
    "postcss": "8.4.49",
    "tailwindcss": "3.4.17",
    "vite": "5.4.11"
  }
}
```

### `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta
      name="description"
      content="TransBay Xpress Inc. provides professional interstate trucking and freight brokerage services from Manteca, California."
    />
    <meta
      name="keywords"
      content="TransBay Xpress, trucking company, freight brokerage, transportation, logistics, Manteca California, interstate carrier"
    />
    <meta property="og:title" content="TransBay Xpress Inc. | Trucking & Freight Brokerage" />
    <meta
      property="og:description"
      content="Authorized interstate trucking and freight brokerage solutions backed by 25 trucks and 25 professional drivers."
    />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/transbay-logo.png" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <title>TransBay Xpress Inc. | Trucking & Freight Brokerage</title>

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TransBay Xpress Inc.",
        "description": "Trucking company and freight brokerage operating interstate in the United States.",
        "telephone": "+1-209-410-4077",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "18401 McKinley Ave",
          "addressLocality": "Manteca",
          "addressRegion": "CA",
          "postalCode": "95337",
          "addressCountry": "US"
        },
        "areaServed": "United States",
        "identifier": [
          {
            "@type": "PropertyValue",
            "name": "USDOT",
            "value": "1357829"
          },
          {
            "@type": "PropertyValue",
            "name": "MC",
            "value": "520713"
          }
        ]
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `.gitignore`

```text
node_modules
dist
.env
.env.*
.DS_Store
*.local
```

### `start-windows.bat`

```bat
@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 18 or newer and run this file again.
  pause
  exit /b 1
)

echo Installing project dependencies...
call npm install
if errorlevel 1 (
  echo Dependency installation failed.
  pause
  exit /b 1
)

echo Starting the TransBay Xpress website...
call npm run dev
endlocal
```

### `start-mac-linux.sh`

```bash
#!/usr/bin/env bash
set -e

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Install Node.js 18 or newer and run this script again."
  exit 1
fi

echo "Installing project dependencies..."
npm install

echo "Starting the TransBay Xpress website..."
npm run dev
```


## Source Entry and Styling Files

### `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### `src/App.jsx`

```jsx
import About from "./components/About";
import Authority from "./components/Authority";
import Cargo from "./components/Cargo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Authority />
        <Cargo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

### `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color: #18181b;
  background: #ffffff;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 120px;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #ffffff;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
}

::selection {
  color: #09090b;
  background: #b6f500;
}

@layer components {
  .section-shell {
    width: min(100% - 2rem, 76rem);
    margin-inline: auto;
  }

  .section-padding {
    padding-block: 5rem;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border-radius: 9999px;
    background: #18181b;
    padding: 0.9rem 1.5rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 800;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    transition:
      transform 180ms ease,
      background-color 180ms ease,
      box-shadow 180ms ease;
  }

  .btn-primary:hover {
    transform: translateY(-1px);
    background: #000000;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border: 1px solid #d4d4d8;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.8);
    padding: 0.9rem 1.5rem;
    color: #18181b;
    font-size: 0.875rem;
    font-weight: 800;
    transition:
      transform 180ms ease,
      border-color 180ms ease,
      background-color 180ms ease;
  }

  .btn-secondary:hover {
    transform: translateY(-1px);
    border-color: #a1a1aa;
    background: #ffffff;
  }

  .btn-lime {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    border-radius: 9999px;
    background: #b6f500;
    padding: 0.9rem 1.5rem;
    color: #09090b;
    font-size: 0.875rem;
    font-weight: 900;
    transition:
      transform 180ms ease,
      filter 180ms ease;
  }

  .btn-lime:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }
}

.hero-grid {
  background-image:
    linear-gradient(rgba(24, 24, 27, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(24, 24, 27, 0.055) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black 10%, transparent 88%);
}

@media (min-width: 640px) {
  .section-shell {
    width: min(100% - 3rem, 76rem);
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding-block: 7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```


## Source Data

### `src/data/company.js`

```javascript
export const company = {
  name: "TransBay Xpress Inc.",
  shortName: "TransBay Xpress",
  businessType: "Trucking Company & Freight Brokerage",
  industry: "Transportation & Logistics",
  address: "18401 McKinley Ave, Manteca, CA 95337",
  phone: "(209) 410-4077",
  phoneHref: "+12094104077",
  usdot: "1357829",
  mc: "520713",
  operatingAuthority: "Authorized For Hire",
  operatingRegion: "Interstate — United States",
  fleetSize: 25,
  drivers: 25,
  cargo: [
    "General Freight",
    "Dry Bulk Commodities",
    "Beverages",
    "Paper Products",
    "Utilities",
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=18401%20McKinley%20Ave%2C%20Manteca%2C%20CA%2095337",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Authority", href: "#authority" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "25", label: "Power Units", detail: "Company fleet" },
  { value: "25", label: "Professional Drivers", detail: "Experienced team" },
  { value: "48", label: "States Covered", detail: "Interstate operations" },
  { value: "24/7", label: "Dispatch Support", detail: "Operational readiness" },
];

export const services = [
  {
    icon: "truck",
    title: "Full Truckload Transportation",
    description:
      "Reliable truckload capacity for time-sensitive freight, supported by professional drivers and disciplined dispatch coordination.",
  },
  {
    icon: "route",
    title: "Interstate Freight",
    description:
      "Long-haul transportation across the continental United States with clear communication from pickup through delivery.",
  },
  {
    icon: "network",
    title: "Freight Brokerage",
    description:
      "Flexible capacity solutions that connect shippers with qualified carriers when additional coverage is required.",
  },
  {
    icon: "package",
    title: "General Freight",
    description:
      "Professional handling for general commodities, beverages, paper products, utilities-related freight, and more.",
  },
  {
    icon: "scale",
    title: "Dry Bulk Commodities",
    description:
      "Transportation support for eligible dry bulk commodity loads with a focus on compliance, planning, and safe execution.",
  },
  {
    icon: "headset",
    title: "Dedicated Dispatch Support",
    description:
      "Responsive shipment coordination, status visibility, and direct communication throughout the transportation lifecycle.",
  },
];

export const authorityItems = [
  {
    label: "USDOT Number",
    value: company.usdot,
    description: "Federal motor carrier registration identifier",
  },
  {
    label: "MC Number",
    value: company.mc,
    description: "Interstate operating authority identifier",
  },
  {
    label: "Operating Authority",
    value: company.operatingAuthority,
    description: "Commercial transportation authorization",
  },
  {
    label: "Operating Region",
    value: company.operatingRegion,
    description: "Interstate service throughout the United States",
  },
];
```


## React Components

### `src/components/Navbar.jsx`

```jsx
import { useEffect, useState } from "react";
import { company, navigation } from "../data/company";
import Icon from "./Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-zinc-950 text-white md:block">
        <div className="section-shell flex h-9 items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
          <span>Authorized Interstate Carrier & Freight Broker</span>
          <div className="flex items-center gap-5">
            <span>USDOT {company.usdot}</span>
            <span>MC {company.mc}</span>
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-zinc-200/80 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="group flex items-center gap-3" aria-label="TransBay Xpress home">
            <img
              src="/transbay-logo.png"
              alt="TransBay Xpress Inc. logo"
              className="h-12 w-12 rounded-full border border-zinc-200 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="text-base font-black tracking-[-0.025em] text-zinc-950 sm:text-lg">
                TransBay Xpress
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                Transportation & Logistics
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={`tel:${company.phoneHref}`} className="btn-primary">
              <Icon name="phone" size={17} />
              Call Dispatch
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-950 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-zinc-200 bg-white lg:hidden">
            <div className="section-shell grid gap-2 py-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
              <a href={`tel:${company.phoneHref}`} className="btn-primary mt-2 justify-center">
                <Icon name="phone" size={17} />
                {company.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

### `src/components/Hero.jsx`

```jsx
import { company } from "../data/company";
import Icon from "./Icons";

const trustPoints = ["Authorized for hire", "Interstate operations", "25-truck fleet"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-zinc-50 pb-20 pt-36 sm:pt-44 lg:pb-28">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-48 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl" />
      <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300 bg-lime-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime-900">
            <Icon name="shield" size={16} />
            Reliable freight. Professional execution.
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            Freight moves better with a carrier you can
            <span className="relative ml-3 inline-block">
              trust.
              <span className="absolute -bottom-2 left-0 h-2 w-full -rotate-1 bg-lime-400/80" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 sm:text-xl">
            {company.name} delivers professional interstate trucking and freight brokerage solutions from
            Manteca, California—backed by a dedicated fleet, experienced drivers, and responsive dispatch.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${company.phoneHref}`} className="btn-primary justify-center sm:justify-start">
              Speak with Dispatch
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#services" className="btn-secondary justify-center sm:justify-start">
              Explore Services
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
                <Icon name="check" size={18} className="text-lime-600" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="absolute -inset-5 rotate-2 rounded-[2.25rem] bg-lime-400/55 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(182,245,0,0.20),transparent_40%)]" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Carrier Profile</p>
                <p className="mt-1 text-sm text-zinc-400">Verified company information</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-xs font-bold text-lime-300">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(182,245,0,0.8)]" />
                Authorized
              </span>
            </div>

            <div className="relative my-7 flex justify-center">
              <div className="relative rounded-full bg-white p-2 shadow-[0_0_45px_rgba(182,245,0,0.18)]">
                <img
                  src="/transbay-logo.png"
                  alt="TransBay Xpress truck logo"
                  className="h-60 w-60 rounded-full object-cover sm:h-72 sm:w-72"
                />
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3">
              <ProfileDetail label="USDOT" value={company.usdot} />
              <ProfileDetail label="MC Number" value={company.mc} />
              <ProfileDetail label="Power Units" value={`${company.fleetSize} Trucks`} />
              <ProfileDetail label="Drivers" value={`${company.drivers} Professionals`} />
            </div>

            <div className="relative mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300">
              <Icon name="mapPin" size={20} className="mt-0.5 shrink-0 text-lime-400" />
              <span>{company.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileDetail({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm font-bold text-white sm:text-base">{value}</p>
    </div>
  );
}
```

### `src/components/Stats.jsx`

```jsx
import { stats } from "../data/company";

export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative z-10 -mt-7 pb-16 lg:-mt-10 lg:pb-24">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-6 sm:p-7 ${index > 0 ? "border-t border-zinc-200 sm:border-t-0 sm:border-l" : ""} ${
                index === 2 ? "sm:border-l-0 lg:border-l" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="text-4xl font-black tracking-[-0.05em] text-zinc-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">{stat.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.detail}</p>
              <span className="absolute bottom-0 left-7 right-7 h-1 rounded-t-full bg-lime-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Services.jsx`

```jsx
import { services } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What we do"
          title="Transportation solutions built around dependable execution."
          description="From company-owned capacity to flexible brokerage support, TransBay Xpress helps customers move freight with responsive communication and professional coordination."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <span className="absolute right-6 top-5 text-5xl font-black tracking-[-0.08em] text-zinc-200/80 transition-colors group-hover:text-lime-100">
                0{index + 1}
              </span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-lime-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Icon name={service.icon} size={25} />
              </div>
              <h3 className="relative mt-7 max-w-[85%] text-xl font-black tracking-[-0.025em] text-zinc-950">
                {service.title}
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-zinc-600">{service.description}</p>
              <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-zinc-900">
                Service capability
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `src/components/About.jsx`

```jsx
import { company } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const commitments = [
  "Clear pickup and delivery coordination",
  "Professional, safety-conscious drivers",
  "Responsive dispatch communication",
  "Flexible carrier and brokerage capacity",
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-zinc-50">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-lime-300/45 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-9">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Company Snapshot</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Built to keep freight moving.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Operating from California’s Central Valley, TransBay Xpress combines fleet capacity,
                driver experience, and brokerage flexibility to support interstate transportation needs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <SnapshotCard icon="truck" label="Fleet" value={`${company.fleetSize} power units`} />
                <SnapshotCard icon="users" label="Team" value={`${company.drivers} drivers`} />
                <SnapshotCard icon="route" label="Coverage" value="Interstate U.S." />
                <SnapshotCard icon="building" label="Head Office" value="Manteca, CA" />
              </div>

              <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/10 p-5">
                <p className="text-sm font-bold text-lime-300">Operational focus</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  General freight, dry bulk commodities, beverages, paper products, and utilities-related cargo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About TransBay"
            title="A transportation partner focused on reliability, communication, and compliance."
            description="We understand that every shipment carries a deadline, a customer promise, and operational risk. Our approach is direct: plan carefully, communicate clearly, and execute professionally."
          />

          <div className="mt-8 grid gap-4">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <Icon name="check" size={21} className="mt-0.5 shrink-0 text-lime-600" />
                <p className="text-sm font-semibold leading-6 text-zinc-700">{commitment}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-zinc-950">
            Work with TransBay Xpress
            <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SnapshotCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <Icon name={icon} className="text-lime-400" size={23} />
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-1.5 text-base font-bold text-white">{value}</p>
    </div>
  );
}
```

### `src/components/Authority.jsx`

```jsx
import { authorityItems } from "../data/company";
import Icon from "./Icons";

export default function Authority() {
  return (
    <section id="authority" className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(182,245,0,0.15),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(182,245,0,0.08),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-400">
              <span className="h-px w-8 bg-lime-400" />
              Operating credentials
            </p>
            <h2 className="text-balance text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">
              Authorized to move freight interstate.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            Our federal carrier identifiers and operating profile are presented clearly so customers and partners
            can verify the organization they are working with.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {authorityItems.map((item, index) => (
            <article
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-lime-400/40 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                  <p className={`mt-3 font-black tracking-[-0.03em] text-white ${index < 2 ? "text-3xl" : "text-xl"}`}>
                    {item.value}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-zinc-950">
                  <Icon name={index < 2 ? "shield" : index === 2 ? "check" : "route"} size={22} />
                </div>
              </div>
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <Icon name="shield" size={27} className="mt-0.5 shrink-0 text-lime-400" />
            <div>
              <p className="font-bold text-white">Authorized For Hire</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">
                Interstate transportation operations across the United States.
              </p>
            </div>
          </div>
          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime-300">
            Active company profile
          </span>
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Cargo.jsx`

```jsx
import { company } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Cargo() {
  return (
    <section className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-36">
            <SectionHeading
              eyebrow="Cargo capabilities"
              title="Equipped for essential freight categories."
              description="Our operating profile includes a practical mix of general and specialized commodity categories supported by experienced transportation coordination."
            />
            <a href={`tel:${company.phoneHref}`} className="btn-primary mt-8">
              Discuss Your Shipment
              <Icon name="phone" size={17} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {company.cargo.map((item, index) => (
              <article
                key={item}
                className={`group min-h-48 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index === 0
                    ? "border-zinc-950 bg-zinc-950 text-white sm:col-span-2"
                    : "border-zinc-200 bg-zinc-50 text-zinc-950 hover:border-lime-300 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      index === 0 ? "bg-lime-400 text-zinc-950" : "bg-white text-zinc-950 shadow-sm"
                    }`}
                  >
                    <Icon name={index === 1 ? "scale" : "package"} size={22} />
                  </div>
                  <span className={`text-xs font-black ${index === 0 ? "text-zinc-600" : "text-zinc-300"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black tracking-[-0.025em]">{item}</h3>
                <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-zinc-400" : "text-zinc-600"}`}>
                  Coordinated with clear dispatch communication and professional transportation support.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `src/components/Contact.jsx`

```jsx
import { company } from "../data/company";
import Icon from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-lime-400 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[2rem] bg-zinc-950 text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative p-7 sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(182,245,0,0.14),transparent_38%)]" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-400">Let’s move freight</p>
              <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Need dependable transportation capacity?
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                Call TransBay Xpress to discuss lanes, shipment requirements, brokerage support, or carrier capacity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${company.phoneHref}`} className="btn-lime justify-center sm:justify-start">
                  <Icon name="phone" size={18} />
                  {company.phone}
                </a>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  View Location
                  <Icon name="external" size={16} />
                </a>
              </div>
            </div>
          </div>

          <aside className="border-t border-white/10 bg-white/[0.045] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-white">Company Contact</p>
            <div className="mt-7 grid gap-6">
              <ContactItem icon="phone" label="Phone" value={company.phone} href={`tel:${company.phoneHref}`} />
              <ContactItem icon="mapPin" label="Head Office" value={company.address} href={company.mapsUrl} external />
              <ContactItem icon="truck" label="Business Type" value={company.businessType} />
              <ContactItem icon="route" label="Operating Region" value={company.operatingRegion} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, external = false }) {
  const content = (
    <div className="group flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-lime-400 transition-colors group-hover:border-lime-400/30">
        <Icon name={icon} size={21} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
        <p className="mt-1.5 text-sm font-semibold leading-6 text-zinc-200">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}
```

### `src/components/Footer.jsx`

```jsx
import { company, navigation } from "../data/company";
import Icon from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pb-8 pt-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto_auto] lg:gap-20">
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/transbay-logo.png"
                alt="TransBay Xpress logo"
                className="h-14 w-14 rounded-full border border-white/10 object-cover"
              />
              <div>
                <p className="text-lg font-black">TransBay Xpress Inc.</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-zinc-500">Transportation & Logistics</p>
              </div>
            </a>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Professional interstate trucking and freight brokerage solutions based in Manteca, California.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Navigation</p>
            <div className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-semibold text-zinc-300 hover:text-lime-400">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Credentials</p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              <p>USDOT {company.usdot}</p>
              <p>MC {company.mc}</p>
              <p>{company.operatingAuthority}</p>
              <a href={`tel:${company.phoneHref}`} className="mt-2 inline-flex items-center gap-2 font-bold text-lime-400">
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TransBay Xpress Inc. All rights reserved.</p>
          <p>Authorized interstate carrier & freight brokerage</p>
        </div>
      </div>
    </footer>
  );
}
```

### `src/components/SectionHeading.jsx`

```jsx
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-700">
        <span className="h-px w-8 bg-lime-500" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-lime-500" />}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
```

### `src/components/Icons.jsx`

```jsx
const paths = {
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  shield: (
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  ),
  truck: (
    <>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M14 9h4l4 4v4h-3" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="5" r="3" />
      <path d="M8.5 17.5 15.5 6.5" />
      <path d="M9 5H6a3 3 0 0 0-3 3v2" />
      <path d="M15 19h3a3 3 0 0 0 3-3v-2" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <path d="m10.5 7.5-4 8" />
      <path d="m13.5 7.5 4 8" />
      <path d="M8 19h8" />
    </>
  ),
  package: (
    <>
      <path d="m21 8-9-5-9 5 9 5 9-5Z" />
      <path d="m3 8 9 5 9-5" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="m5 7-3 6h6L5 7Z" />
      <path d="m19 7-3 6h6l-3-6Z" />
      <path d="M8 21h8" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M18 19c0 1.1-.9 2-2 2h-3" />
      <rect x="3" y="13" width="4" height="6" rx="2" />
      <rect x="17" y="13" width="4" height="6" rx="2" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  building: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 7h.01" />
      <path d="M12 7h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M9 21v-5h6v5" />
    </>
  ),
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="m10 14 11-11" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = "", strokeWidth = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  );
}
```


## Public Text Files

### `public/robots.txt`

```text
User-agent: *
Allow: /
```

### `public/site.webmanifest`

```text
{
  "name": "TransBay Xpress Inc.",
  "short_name": "TransBay Xpress",
  "description": "Interstate trucking and freight brokerage services.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#b6f500",
  "icons": [
    {
      "src": "/favicon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Public Image Assets

- `public/transbay-logo.png` — supplied TransBay Xpress company logo.
- `public/favicon.png` — browser favicon generated from the supplied logo.