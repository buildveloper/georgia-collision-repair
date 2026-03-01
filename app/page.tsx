"use client";

import { useState } from "react";

const makes = ["Toyota", "Ford", "Honda", "Chevrolet", "Nissan", "Jeep", "Hyundai", "Kia", "Subaru", "Ram", "GMC", "Dodge", "BMW", "Mercedes", "Other"];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
  setIsSubmitting(true);
  setMessage("");

  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      window.location.href = "/thank-you";
    } else {
      setMessage(data.error || "Something went wrong. Please try again.");
    }
  } catch (err: any) {
    setMessage("Network error: " + (err.message || "Please try again."));
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div>
      {/* Hero */}
      <div className="hero">
        <img src="/mainhero.png" loading="lazy" alt="Collision repair Georgia – Auto body shop near me in Atlanta GA"/>
        <div className="hero-overlay" />
        <div className="hero-content">
         {/* <img src="/logo.png" loading="lazy" alt="Georgia Collision Repair logo – Collision repair Georgia and auto body shop Atlanta GA" className="logo" /> */}
          <h1 style={{ color: "#ffffff", fontSize: "48px", lineHeight: "1.1", marginBottom: "16px", fontWeight: "800" }}>
            Collision Repair Georgia – Fast Free Quotes
          </h1>
          <p style={{ color: "#ffffff", fontSize: "22px", marginBottom: "24px" }}>
            Trusted auto body repair in Georgia. Get quotes from local shops in Atlanta, Savannah, Augusta for car collision repair near me, dent repair, and auto paint.<br />100% Free • No spam • Georgia only
          </p>
          <div style={{ color: "#ffffff", display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", padding: "12px 24px", borderRadius: "9999px", fontSize: "15px" }}>
            ✅ Collision Repair Atlanta • Auto Body Shop Savannah GA • Dent Repair Augusta • All Georgia
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="form-wrapper">
        <div className="main-form">
          <form action={handleSubmit} className="space-y-6">
            <div className="form-group">
              <label className="label">Full Name *</label>
              <input name="name" required type="text" className="input" />
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="label">Phone Number * (for quotes)</label>
                <input name="phone" required type="tel" className="input" />
              </div>
              <div className="form-group">
                <label className="label">Email Address</label>
                <input name="email" type="email" className="input" />
              </div>
            </div>

            <div className="grid-3">
              <div className="form-group">
                <label className="label">Zip Code *</label>
                <input name="zip" required type="text" className="input" />
              </div>
              <div className="form-group">
                <label className="label">Vehicle Year *</label>
                <select name="year" required className="input">
                  {Array.from({ length: 27 }, (_, i) => 2026 - i).map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="label">Make *</label>
                <select name="make" required className="input">
                  {makes.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="label">Model</label>
              <input name="model" type="text" className="input" />
            </div>

            <div className="form-group">
              <label className="label">Damage Description *</label>
              <textarea name="description" required rows={4} className="textarea input" placeholder="Rear-ended, bumper damage, needs paint..." />
            </div>

            <div className="form-group">
              <label className="label">Photos of Damage (optional – up to 3)</label>
              <input name="photos" type="file" accept="image/*" multiple className="input" />
            </div>

            <div className="consent-label">
              <input type="checkbox" name="consent" required />
              <span>I consent to being contacted by phone, text, or email by local Georgia collision repair shops for repair quotes. This is a free service. I can opt out anytime.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn"
            >
              {isSubmitting ? "Sending to local shops..." : "Get Free Quotes Now"}
            </button>

            {message && <p style={{ color: "#ef4444", textAlign: "center", marginTop: "16px" }}>{message}</p>}
          </form>
        </div>

        <div className="trust-bar">
          Trusted by Georgia drivers • Your info stays private • Leads go straight to real shops
        </div>
      </div>
    </div>
  );
}