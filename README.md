# Rongrekha — Mehendi Studio

A responsive React website for a bridal mehendi studio. It includes a real-photo design gallery, starting prices, order links, studio contact details, and a persistent light/dark theme.

## Requirements

- Node.js
- npm

## Run locally

From the project directory, install dependencies and start the Vite development server:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`. Do not use VS Code's **Go Live** extension for this React app; use the Vite server.

On terminals other than Windows PowerShell, use `npm` instead of `npm.cmd`.

## Available scripts

```powershell
npm.cmd run dev      # Start the development server
npm.cmd run build    # Create the production build in dist/
npm.cmd run preview  # Preview the production build locally
npm.cmd run lint     # Run Oxlint
```

## Deploy to Netlify
https://beautiful-rabanadas-74bc59.netlify.app/

The Netlify build settings are in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

Connect the repository to Netlify, or build the project locally and manually upload the generated `dist/` directory.

## Customize

Update the studio email, phone number, design names, prices, and order email in `src/App.jsx`. Gallery images are in `public/images/`; their source and license links are shown in the gallery.
