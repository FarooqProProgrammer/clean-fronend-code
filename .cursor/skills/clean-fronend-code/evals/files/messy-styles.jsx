import React from "react";

export default function PromoRow() {
  return (
    <section>
      <button
        style={{
          padding: "12px 20px",
          background: "#111111",
          color: "#ffffff",
          borderRadius: "8px",
          border: "none",
          fontWeight: 600,
        }}
      >
        Save
      </button>
      <button
        style={{
          padding: "12px 20px",
          background: "#111111",
          color: "#ffffff",
          borderRadius: "8px",
          border: "none",
          fontWeight: 600,
        }}
      >
        Publish
      </button>
      <a
        href="/docs"
        style={{
          padding: "12px 20px",
          background: "transparent",
          color: "#111111",
          borderRadius: "8px",
          border: "1px solid #111111",
          fontWeight: 600,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Docs
      </a>
      <p
        style={{
          marginTop: "16px",
          fontSize: "14px",
          lineHeight: 1.5,
          color: "#444444",
        }}
      >
        Primary actions share the same look; extract reusable classes.
      </p>
      <p
        style={{
          marginTop: "16px",
          fontSize: "14px",
          lineHeight: 1.5,
          color: "#444444",
        }}
      >
        Body copy is duplicated inline too.
      </p>
    </section>
  );
}
