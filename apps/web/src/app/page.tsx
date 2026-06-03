import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg,#0b1220,#0f172a,#020617)",
        color: "white",
      }}
    >
      {/* MAIN CONTENT */}
      <div>
        {/* BIG LOGO */}
        <div
          style={{
            fontSize: "80px",
            marginBottom: 20,
            background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🚀
        </div>

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            background: "linear-gradient(90deg,#ff0000,#ff7a00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          SaaSFlow Pro
        </h1>

        <p style={{ color: "#cbd5e1", marginTop: 10 }}>
          SaaS Dashboard by{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Shigosag
          </span>
        </p>

        {/* GET STARTED BUTTON */}
        <Link
          href="/login"
          style={{
            marginTop: 30,
            padding: "12px 24px",
            background: "#ff0000",
            color: "white",
            borderRadius: 10,
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Link>

        {/* FEATURE CARDS */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: 50,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { title: "Fast Dashboard", icon: "⚡" },
            { title: "Secure Users", icon: "🔒" },
            { title: "Analytics", icon: "📊" },
            { title: "Cloud Ready", icon: "☁️" },
          ].map((feature) => (
            <div
              key={feature.title}
              style={{
                background: "#111827",
                border: "1px solid #1f2937",
                borderRadius: "12px",
                padding: "20px",
                width: "200px",
                transition: "transform 0.3s",
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "10px",
                }}
              >
                {feature.icon}
              </div>
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ marginTop: 50, fontSize: "0.85rem", color: "#94a3b8" }}>
        🚀 SaaSFlow Pro • Powered by{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Shigosag
        </span>{" "}
        •{" "}
        <a
          href="https://github.com/shigosag"
          target="_blank"
          style={{ color: "#7c3aed", textDecoration: "none" }}
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}