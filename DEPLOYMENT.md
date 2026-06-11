# Hostinger Node.js Deployment Guide

This project has been restructured from a monorepo setup into a standard Node.js application to run seamlessly on Hostinger Node.js Hosting.

## Project Structure & How it Works

We use **Vite** to build the React application and **Express** as a production-grade web server to serve the compiled assets. This ensures that Hostinger can find the `package.json` at the root, run the standard build script, and keep the site running on the port dynamically assigned by Hostinger.

---

## Deployment Configuration

### 1. Build Settings
- **Build Command**: `npm run build`
  - This executes `node tools/generate-llms.js` and compiles the React app using `vite build`.
- **Output Directory**: `dist`
  - The build assets are output directly to the `./dist` folder at the repository root.

### 2. Start Settings
- **Start Command**: `npm run start`
  - This runs the lightweight web server via `node server.js` to serve the static assets and handle routing.
- **Entry File**: `server.js`

### 3. Environment Variables
- **`PORT`**: Hostinger Node.js hosting automatically injects a `PORT` environment variable. The Express application dynamically listens on `process.env.PORT` to bind to Hostinger's reverse proxy correctly.
- **`NODE_ENV`**: Set to `production`.

---

## Step-by-Step Hostinger Deployment Steps

1. **Upload Code**:
   - Push your changes to the GitHub repository (`main` branch).
   - In your Hostinger hPanel, navigate to **Advanced** -> **Node.js**.
   - Create a new Node.js application or link your Git repository.

2. **Select Node.js Version**:
   - Select **Node.js 18 or newer** (Node 20 recommended) to ensure full compatibility with modern dependencies and Vite.

3. **Configure Paths & Files**:
   - **Application Directory**: Set to `/` (the root of the project).
   - **Application Document Root**: Set to `dist` or the root folder depending on how you point public traffic.
   - **Application Startup File**: Set to `server.js`.

4. **Install Dependencies**:
   - Click the **NPM Install** button in the Hostinger Node.js dashboard to install all dependencies from the root `package.json`.

5. **Build the Application**:
   - Click **Run Script** or execute the build command `npm run build` via SSH.
   - Alternatively, Hostinger's build pipeline will run the `build` script during deployment.

6. **Start the Server**:
   - Click **Start App** in the dashboard to spin up the Express server.
   - The application will boot up, bind to the assigned port, and route traffic to the compiled React interface.
