"use client";

import { useState } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false); // toggle collapse

  const navItems = [
    { name: "Dashboard", icon: "📊", href: "/" },
    { name: "Projects", icon: "📁", href: "/projects" },
    { name: "Users", icon: "👥", href: "/users" },
    { name: "Settings", icon: "⚙️", href: "/settings" },
  ];

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, sans-serif",
          background: "linear-gradient(135deg,#050816,#0b1220,#020617)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* SIDEBAR */}
          <aside
            style={{
              width: open ? "150px" : "40px",
              transition: "width 0.3s",
              background: "#0b1220",
              borderRight: "1px solid #1f2937",
              display: "flex",
              flexDirection: "column",
              alignItems: open ? "flex-start" : "center",
              padding: "20px",
            }}
          >
            {/* LOGO + TOGGLE */}
            <div
              style={{
                display: "flex",
                justifyContent: open ? "space-between" : "center",
                alignItems: "center",
                marginBottom: "30px",
                width: "100%",
              }}
            >
              {open && (
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    background: "linear-gradient(90deg,#ff0000,#ff7a00,#ffd000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  🚀 SaaSFlow
                </div>
              )}
              <button
                onClick={() => setOpen(!open)}
                style={{
                  background: "#111827",
                  border: "1px solid #1f2937",
                  color: "white",
                  padding: "6px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                ☰
              </button>
            </div>

            {/* NAVIGATION */}
            <nav style={{ width: "100%", transition: "all 0.3s" }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: open ? "10px" : "0",
                    padding: "10px",
                    marginBottom: "8px",
                    borderRadius: "8px",
                    color: "#cbd5e1",
                    textDecoration: "none",
                    justifyContent: open ? "flex-start" : "center",
                    transition: "all 0.3s",
                  }}
                >
                  <span>{item.icon}</span>
                  {open && <span>{item.name}</span>}
                </Link>
              ))}
            </nav>
          </aside>

          {/* MAIN CONTENT */}
          <main
            style={{
              flex: 1,
              padding: "20px",
              transition: "margin-left 0.3s",
            }}
          >
            {/* TOP BAR */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
                borderBottom: "1px solid #1f2937",
                paddingBottom: "12px",
              }}
            >
              <h2 style={{ margin: 0 }}>Dashboard</h2>
              <div
                style={{
                  fontSize: "13px",
                  background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                }}
              >
                Powered by Shigosag
              </div>
            </div>

            {/* CHILDREN */}
            <div
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "12px",
                padding: "20px",
                transition: "all 0.3s",
                minHeight: "400px",
              }}
            >
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}