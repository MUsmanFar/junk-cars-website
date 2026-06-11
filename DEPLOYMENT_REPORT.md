# Deployment Report

This report outlines the project architecture and configuration instructions to deploy the "Frank's Auto Parts" website directly from GitHub onto both **Vercel** and **Hostinger Node.js Hosting**.

---

## 1. Project Specifications

*   **Framework Detected**: React (v18) built with **Vite** (v7)
*   **Project Structure**: Flat layout (all application files, source `src/`, and config files reside in the root directory)
*   **Build Script**: `npm run build`
    *   This script compiles the Vite app and generates static assets inside the `dist/` directory.
*   **Production Output Directory**: `dist`
*   **Routing Mechanism**: Client-side routing with `react-router-dom`

---

## 2. Platform Deployment Configuration

The repository is configured to support dual-deployment methods directly from git:
1.  **Static Serving (Vercel)**: Serves client-side React routes as a static CDN website using rewrite rules.
2.  **Node.js Server Serving (Hostinger)**: Serves files through an Express web server process.

---

## 3. Vercel Deployment Instructions (Static CDN)

Vercel acts as a static hosting provider and serves files directly from the `dist` build output. Client-side routing path redirects are managed by the root `vercel.json` configuration.

### Deployment Steps:
1.  Log in to your **Vercel Dashboard** and click **Add New** -> **Project**.
2.  Import your GitHub repository: `MUsmanFar/junk-cars-website`.
3.  Vercel will automatically detect the **Vite** framework preset.
4.  Keep the default configuration values:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  *(Optional)* Add any environment variables in the project settings if you are using custom template scripts.
6.  Click **Deploy**.
7.  Vercel will build the application and serve it. All client paths (like `/services`, `/contact`) will route correctly due to the included [vercel.json](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/vercel.json) rewrite rule.

---

## 4. Hostinger Deployment Instructions (Node.js Hosting)

Hostinger Node.js hosting expects a persistent server process. The project utilizes [server.js](file:///d:/Projects/horizons-export-a6c8f40e-c499-48b5-ae50-220ec17217ca/server.js) (Express) to bind to Hostinger's proxy port and serve files.

### Configuration Settings:
*   **Startup File**: `server.js`
*   **Start Command**: `npm run start` (triggers `node server.js`)
*   **Application Directory**: `/` (project root)

### Deployment Steps:
1.  Log in to your **Hostinger hPanel** and navigate to **Advanced** -> **Node.js**.
2.  Select **Node.js 18 or newer** (Node 20 recommended) as the environment version.
3.  Set the **Application Startup File** to `server.js`.
4.  Click **NPM Install** to resolve all root dependencies (including `express`).
5.  Run the build command `npm run build` (either via SSH terminal or dashboard scripts) to compile the React code into `dist/`.
6.  Set `NODE_ENV=production` and any other variables from `.env.example` in the environment configuration.
7.  Click **Start App** to spin up the Express server process.
