# Signalist - Stock Market Tracker

<div align="center">
  <br />
    <img src="public/readme/hero.webp" alt="Signalist Stock Tracker">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=black"/>
    <img src="https://img.shields.io/badge/-Better Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=black"/>
    <img src="https://img.shields.io/badge/-Shadcn-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=black"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=black"/><br/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-TailwindCSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
  </div>

  <h3 align="center">AI-Powered Stock Market Tracking Platform</h3>

   <div align="center">
     Built by LogeshByte - Advanced stock tracking with real-time alerts and AI insights
    </div>
</div>

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [Deployment](#deployment)

## ✨ Introduction

Signalist is an AI-powered modern stock market application built with Next.js, Shadcn, Better Auth, and Inngest. Track real-time stock prices, set personalized alerts, explore company insights, and manage watchlists. The admin dashboard allows managing stocks, publishing news, and monitoring user activity, while event-driven workflows power automated alerts, AI-driven daily digests, earnings notifications, and sentiment analysis.

## ⚙️ Tech Stack

- **Next.js** - React framework for full-stack web applications
- **Better Auth** - Framework-agnostic authentication library for TypeScript
- **Shadcn** - Customizable, accessible React components
- **Inngest** - Event-driven workflows and background jobs
- **MongoDB** - Flexible, high-performance NoSQL database
- **Finnhub** - Real-time financial data API
- **Nodemailer** - Email sending library for Node.js
- **TailwindCSS** - Utility-first CSS framework
- **TypeScript** - Statically typed superset of JavaScript

## 🔋 Features

👉 **Real-Time Stock Dashboard** - Track live stock prices with interactive charts and historical data

👉 **Intelligent Search** - Quickly find stocks with advanced filtering and search capabilities

👉 **Personalized Watchlists** - Create custom watchlists and set price alerts

👉 **Email Notifications** - Receive instant alerts for price changes and market events

👉 **Company Insights** - Detailed financial data, news, and analyst ratings

👉 **AI-Powered Analysis** - Automated market summaries and sentiment analysis

👉 **Event-Driven Workflows** - Automated processes powered by Inngest

👉 **Admin Dashboard** - Manage stocks, publish news, and monitor user activity

👉 **Responsive Design** - Optimized for desktop and mobile devices

## 🤸 Quick Start

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18 or higher)
- [npm](https://www.npmjs.com/)

**Installation**

```bash
git clone https://github.com/LogeshByte/signalist.git
cd signalist
npm install
```

**Environment Setup**

Create a `.env` file in the root directory:

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
FINNHUB_API_KEY=your_finnhub_api_key
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# MONGODB
MONGODB_URI=your_mongodb_connection_string

# BETTER AUTH
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# GEMINI AI
GEMINI_API_KEY=your_gemini_api_key

# EMAIL
NODEMAILER_EMAIL=your_email@gmail.com
NODEMAILER_PASSWORD=your_app_password
```

**Running the Application**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

For background jobs and workflows:

```bash
npx inngest-cli@latest dev
```

## 🚀 Deployment

The application can be deployed on platforms like Vercel, Netlify, or any Node.js hosting service.

**Vercel Deployment:**

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

---

**Built with ❤️ by LogeshByte**
