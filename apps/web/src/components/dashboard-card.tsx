type DashboardCardProps = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        padding: "24px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          "translateY(-8px)";
        e.currentTarget.style.boxShadow =
          "0 20px 40px rgba(255,0,60,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(0,0,0,0.25)";
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          fontSize: "14px",
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "32px",
          fontWeight: 700,
          margin: 0,
          background:
            "linear-gradient(90deg,#ff003c,#ff6b00,#ffcc00)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </h2>
    </div>
  );
}