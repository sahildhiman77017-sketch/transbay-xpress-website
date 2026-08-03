# Quick Start — TransBay Xpress Website

## Requirements

- Node.js 18.18 or newer
- npm 9 or newer

## Run locally

```bash
npm install
npm run dev
```

Open the local URL displayed in the terminal, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

The deployable production files will be created in the `dist` folder.

## Where to edit company details

Edit:

```text
src/data/company.js
```

## Where to replace the logo

Replace:

```text
public/transbay-logo.png
```

Keep the same filename unless you also update the image paths used by the components.
