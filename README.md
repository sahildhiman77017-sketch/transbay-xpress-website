# TransBay Xpress Inc. Website

A complete responsive company website for **TransBay Xpress Inc.**, built with React, Vite, and Tailwind CSS.

## What is included

- Responsive sticky navigation and mobile menu
- Premium hero section based on the supplied logo colors
- Fleet and driver statistics
- Trucking and freight brokerage services
- Company overview and operating commitments
- USDOT, MC, authority, and interstate operating information
- Cargo capability cards
- Direct phone and Google Maps actions
- Responsive footer and company credentials
- SEO metadata, Open Graph metadata, structured data, favicon, and web manifest
- All code organized into separate reusable React components
- File-by-file code reference inside `ALL_CODE_FILE_BY_FILE.md`

## Technology

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS and Autoprefixer
- Local reusable SVG icon component

## Run the project

### Standard method

```bash
npm install
npm run dev
```

Vite will display the local development URL, normally:

```text
http://localhost:5173
```

### Windows shortcut

Double-click:

```text
start-windows.bat
```

### macOS or Linux shortcut

```bash
chmod +x start-mac-linux.sh
./start-mac-linux.sh
```

## Production build

```bash
npm run build
npm run preview
```

The production output will be generated in the `dist` directory.

## Edit company information

All primary company details are centralized in:

```text
src/data/company.js
```

## Replace the logo

Replace the following image while keeping the same filename:

```text
public/transbay-logo.png
```

The favicon is located at:

```text
public/favicon.png
```

## Code reference

Every root, source, and public text file is documented separately in:

```text
ALL_CODE_FILE_BY_FILE.md
```

The actual source files are already separated and ready to edit in the `src`, `public`, and project-root folders.

## Contact-form note

The current website uses direct phone and map actions because no business email address, CRM endpoint, or backend API was supplied. A working quote form can later be connected without restructuring the current website.
