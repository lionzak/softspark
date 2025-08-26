"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Confetti from "react-confetti";

const ThankYouClient = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  const thankYouStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Thank You - SoftSpark",
    description: "Thank you for contacting SoftSpark",
    url: "https://softspark.me/thank-you",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(thankYouStructuredData),
        }}
      />

      {/* 🎉 Confetti Celebration */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false} // Confetti falls once
        numberOfPieces={200}
        gravity={0.2}
      />

      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#003F8E] to-[#1DBF73] text-white">
        <div className="text-center max-w-lg p-8 bg-white/10 rounded-xl shadow-lg relative z-10">
          <div className="flex items-center justify-center mb-6" aria-hidden="true">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF9F40] text-white text-3xl">
              ✓
            </div>
          </div>

          <header>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Thank You for Contacting SoftSpark!
            </h1>
          </header>

          <p className="text-base sm:text-lg mb-6">
            Your message has been received successfully. 🎉 <br />
            Our team at <strong>SoftSpark</strong> will get back to you within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-lg bg-[#FF9F40] text-white font-semibold hover:bg-[#e6892f] transition-colors min-h-[48px] flex items-center justify-center"
            >
              Back to Home
            </Link>
            <a
              href="https://wa.me/201224213669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg bg-[#1DBF73] text-white font-semibold hover:bg-[#17a463] transition-colors min-h-[48px] flex items-center justify-center"
              aria-label="Chat with us on WhatsApp for immediate assistance"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ThankYouClient;
