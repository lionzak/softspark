import { NextPage } from "next";
import Link from "next/link";

const ThankYou: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#003F8E] to-[#1DBF73] text-white">
      <div className="text-center max-w-lg p-8 bg-white/10 rounded-xl shadow-lg">
        {/* Success Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF9F40] text-white text-3xl">
            ✓
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>

        {/* Subtitle */}
        <p className="text-lg mb-6">
          Your message has been received. 🎉  
          Our team at <span className="font-semibold">SoftSpark</span> will get back to you shortly.
        </p>

        {/* CTA */}
        <div className="space-x-4">
          <Link href="/">
            <span className="inline-block px-6 py-3 rounded-lg bg-[#FF9F40] text-white font-semibold hover:bg-[#e6892f] transition">
              Back to Home
            </span>
          </Link>
          <a
            href="https://wa.me/201224213669"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-[#1DBF73] text-white font-semibold hover:bg-[#17a463] transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
