# 🚀 SaaSFlow Pro

Modern SaaS Dashboard built with **Next.js**, **NextAuth**, and **Neon PostgreSQL**.

Designed and developed by **Shigosag**.

---

## ✨ Features

- 🔐 Authentication (NextAuth Credentials + Google)
- 📊 Modern SaaS Dashboard UI
- 👥 User Role System (Admin/User)
- ⚡ Fast Next.js App Router
- ☁️ Neon PostgreSQL Database
- 🎨 Clean responsive UI design

---

## 🧰 Tech Stack

- Next.js 15
- React
- NextAuth.js
- Prisma ORM
- Neon PostgreSQL
- TypeScript
- CSS Modules / Inline Styling

---

## 🗄️ Database (Neon PostgreSQL)

This project uses **Neon Serverless PostgreSQL**.

👉 Neon Docs: https://neon.tech

Add your connection string in `apps/api/.env`:

DATABASE_URL="your_neon_postgres_connection_string" 

---

## Project Structure

```txt
Saasflow-Pro/
│
├── apps/
│   ├── web/
│   └── api/
│
├── packages/
│   ├── ui/
│   ├── types/
│   └── config/
│
├── docker/
│
├── .env
├── docker-compose.yml
├── pnpm-workspace.yaml
└── README.md
```

---

## 🚀 Setup Instructions

## 1. Clone repository

```bash
git clone https://github.com/shigosag/Saasflow-Pro.git
cd Saasflow-Pro
```

### Start Backend 
```bash
cd apps/api
pnpm install
pnpm prisma generate
pnpm prisma migrate dev
pnpm dev
```

App: http://localhost:5000

### Start Frontend
```bash
cd apps/web
pnpm dev
```

App: http://localhost:3000

---

## 👨‍💻 Author & Credits

- Built by **Shigosag**
- Portions of code generated with AI support

GitHub: [Shigosag](https://github.com/shigosag)

---

## 📜 License

MIT License
