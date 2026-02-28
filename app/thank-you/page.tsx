export default function ThankYou() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Hero-style top section */}
      <div style={{ 
        backgroundColor: "#0a2540", 
        color: "white", 
        padding: "100px 24px 80px", 
        textAlign: "center" 
      }}>
        <div style={{ fontSize: "72px", marginBottom: "16px" }}>✅</div>
        <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "16px" }}>
          Request Sent Successfully!
        </h1>
        <p style={{ fontSize: "22px", maxWidth: "600px", margin: "0 auto 32px" }}>
          Your details have been sent to 3–5 trusted collision repair shops near you in Georgia.<br />
          They will call or text you within 1–3 hours with free quotes.
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "640px", margin: "-60px auto 0", padding: "0 24px", position: "relative", zIndex: 10 }}>
        <div style={{ 
          background: "white", 
          borderRadius: "24px", 
          boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", 
          padding: "48px 40px", 
          textAlign: "center" 
        }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px", color: "#111827" }}>
            While you wait for calls…
          </h2>
          
          <p style={{ fontSize: "18px", marginBottom: "32px", color: "#4b5563" }}>
            Need a rental car while your vehicle is being repaired? Book instantly below (most shops offer loaners, but these are fast backup options).
          </p>

          <a 
            href="https://www.discovercars.com/?aff=yourcode" 
            target="_blank" 
            style={{ 
              display: "block", 
              background: "#f97316", 
              color: "white", 
              fontSize: "18px", 
              fontWeight: "700", 
              padding: "18px", 
              borderRadius: "16px", 
              marginBottom: "16px", 
              textDecoration: "none" 
            }}
          >
            Book Rental Car – Best Prices (DiscoverCars)
          </a>

          <a 
            href="https://www.hertz.com/" 
            target="_blank" 
            style={{ 
              display: "block", 
              background: "#0a2540", 
              color: "white", 
              fontSize: "18px", 
              fontWeight: "700", 
              padding: "18px", 
              borderRadius: "16px", 
              marginBottom: "16px", 
              textDecoration: "none" 
            }}
          >
            Hertz – Book Direct
          </a>

          <a 
            href="https://www.enterprise.com/" 
            target="_blank" 
            style={{ 
              display: "block", 
              background: "#0a2540", 
              color: "white", 
              fontSize: "18px", 
              fontWeight: "700", 
              padding: "18px", 
              borderRadius: "16px", 
              textDecoration: "none" 
            }}
          >
            Enterprise – Book Direct
          </a>
        </div>

        <div style={{ 
          textAlign: "center", 
          marginTop: "40px", 
          color: "#6b7280", 
          fontSize: "15px" 
        }}>
          GeorgiaCollisionRepair.com © 2026 • Your info is safe and only shared with real local shops
        </div>
      </div>
    </div>
  );
}