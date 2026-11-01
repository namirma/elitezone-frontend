# 🌐 EliteZone Frontend — Modern Web Application Portal

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Leaflet](https://img.shields.io/badge/Leaflet-Interactive_Maps-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Lottie](https://img.shields.io/badge/Lottie-Vector_Animations-00DDB3?style=for-the-badge&logo=lottie&logoColor=black)](https://lottiefiles.com/)

> **EliteZone Frontend** is the official modern web application powering [elitezone.me](https://elitezone.me/). Built with **React 18** (JavaScript, Create React App), it delivers a rich, highly interactive user experience with fluid animations, micro-interactions, geolocation maps, and adaptive video streaming.

---

## 🌟 Key Features & UX Innovations

### 1. 🎨 Fluid Motion & Interactive Micro-Interactions
- Smooth page transitions and gesture-driven component layouts powered by **Framer Motion 11**.
- Delightful reward animations with **Canvas Confetti** and vector animations via **Lottie Files**.
- Dynamic countdown timers for flash offers, orders, and service reservations.

### 2. 🗺️ Geolocation & Interactive Map Integration
- Embedded interactive location picker and supplier mapping with **React Leaflet** and **OpenStreetMap**.
- Custom location pins, radius visualization, and coordinates resolution for precise logistics.

### 3. 📹 Media & Video Streaming
- Low-latency HTTP Live Streaming playback via **HLS.js** for product demos, tutorial videos, and live broadcasts.

### 4. ⚡ Modern State & API Communication
- Centralized Axios client with automatic Bearer token injection, response transformers, and unified toast notification handling (`react-hot-toast`).
- Multi-route Single Page Application routing powered by **React Router 6**.

---

## 📂 Project Architecture

```text
elitezone-frontend/
├── public/                 # Static assets, icons, fonts, and HTML template
└── src/                    # Top-level layout (JavaScript, not TypeScript)
    ├── App.js              # Root layout and routing provider
    ├── index.js            # Application entrypoint
    ├── index.css           # Global CSS
    ├── fonts.css           # Font definitions
    ├── Api/                # API communication layer & endpoints
    ├── Buttons/            # Reusable button components and assets
    ├── Contents/           # Shared content
    ├── Context/            # React context providers
    ├── Map/                # Map components
    ├── Pages/              # Routed page views (Home, Roles, Auth, Profile, …)
    ├── PersonalFunction/   # Shared helpers
    ├── PrivateRoute/       # Authenticated-route guard
    ├── PublicAssets/       # Shared public assets
    ├── PWASilder/          # PWA slider (directory name as shipped)
    ├── UserLoginDetection/ # Login detection and data loading
    └── Video/              # Video components
```

---

## 🛠️ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm start
```
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### 3. Build for production
```bash
npm run build
```
Builds the app for production to the `build/` folder with optimal bundling.

---

## 📄 License
Commercial property of EliteZone. All rights reserved.
