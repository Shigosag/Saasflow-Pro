import { Router } from "express";

const router = Router();

router.post("/register", async (req, res) => {
  res.json({
    success: true,
    message: "Register endpoint"
  });
});

router.post("/login", async (req, res) => {
  res.json({
    success: true,
    message: "Login endpoint"
  });
});

export default router;