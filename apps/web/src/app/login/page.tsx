"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (res?.error) {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "80px",
        textAlign: "center",
        background: "linear-gradient(135deg,#0b1220,#0f172a,#020617)",
        color: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(17,24,39,0.9)",
          border: "1px solid #1f2937",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "6px",
            background: "linear-gradient(90deg,#ff0000,#ff7a00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SaaSFlow Pro
        </div>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Welcome back 👋 Sign in to continue
        </p>

        {/* ERROR */}
        {error && (
          <div
            style={{
              background: "#7f1d1d",
              padding: "10px",
              borderRadius: "8px",
              marginBottom: "12px",
              fontSize: "13px",
              color: "#fecaca",
            }}
          >
            {error}
          </div>
        )}

        {/* EMAIL */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            background: "#0b1220",
            border: "1px solid #1f2937",
            borderRadius: "8px",
            color: "white",
          }}
        />

        {/* PASSWORD */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            background: "#0b1220",
            border: "1px solid #1f2937",
            borderRadius: "8px",
            color: "white",
          }}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: loading ? "#7f1d1d" : "#ff0000",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* GOOGLE LOGIN */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          style={{
            width: "100%",
            padding: "12px",
            background: "#111827",
            border: "1px solid #374151",
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

        {/* FOOTER */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#64748b",
            marginTop: "15px",
          }}
        >
          Demo: admin@shigosag.com / 123456
        </p>
      </div>
    </div>
  );
}