import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import pinoHttp from "pino-http";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(helmet());

app.use(cookieParser());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
);

app.use(pinoHttp());

app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "SaaSFlow API Running",
    author: "Shigosag"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
================================
🚀 SaaSFlow API Running
🔥 Powered by Shigosag
🌐 Port: ${PORT}
================================
`);
});