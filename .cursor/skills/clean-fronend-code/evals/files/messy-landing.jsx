import React from "react";

function SectionWrapper1({ children, className }) {
  return <div className={`rounded-2xl shadow-xl bg-white p-6 ${className || ""}`}>{children}</div>;
}

function SectionWrapper2({ children }) {
  return <div className="rounded-xl border border-gray-200 shadow-md p-4">{children}</div>;
}

export default function LandingPage() {
  const unusedFlag = true;
  const deadConfig = { theme: "purple", glow: true };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between p-4">
        <span className="text-sm">Acme</span>
        <a href="/login">Log in</a>
      </nav>

      <section className="grid grid-cols-2 gap-8 p-8 relative">
        <div>
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            New: 40% off this week
          </span>
          <p className="text-xs uppercase tracking-widest text-purple-500">Welcome to the future</p>
          <h1 className="text-4xl font-bold">Ship faster with Acme</h1>
          <p className="mt-2 text-gray-600">The platform teams use to build, launch, and grow.</p>
          <p className="mt-1 text-sm text-gray-500">Trusted by 12,000+ companies worldwide.</p>
          <div className="mt-4 flex gap-4 text-sm">
            <div>
              <strong>99.9%</strong> uptime
            </div>
            <div>
              <strong>2M+</strong> users
            </div>
            <div>
              <strong>150+</strong> countries
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Start free</button>
            <button className="border px-4 py-2 rounded-full">Book demo</button>
          </div>
          <p className="mt-3 text-xs">Office hours: Mon–Fri 9–5 · 123 Market St</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border">
          <img src="/hero.png" alt="Product" className="w-full h-80 object-cover" />
          <div className="absolute bottom-8 right-8 bg-white shadow-lg rounded-lg p-3 text-xs">
            Live: 842 people online
          </div>
        </div>
      </section>

      <section className="p-8 grid grid-cols-3 gap-4">
        <SectionWrapper1>
          <h2>Analytics</h2>
          <p>See what matters.</p>
          <p>See what matters.</p>
        </SectionWrapper1>
        <SectionWrapper2>
          <h2>Automation</h2>
          <p>Remove busywork.</p>
        </SectionWrapper2>
        <SectionWrapper1 className="bg-gray-50">
          <h2>Security</h2>
          <p>Stay protected.</p>
        </SectionWrapper1>
      </section>

      {false && <div>Legacy promo banner</div>}
      {unusedFlag && deadConfig.glow ? null : null}
    </div>
  );
}
