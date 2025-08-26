// components/ChatWidget.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const iframeUrl = process.env.NEXT_PUBLIC_CHATBOT_IFRAME_URL || "";
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!iframeUrl) return null; // nothing to render if no URL

  return (
    <div className="fixed bottom-5 right-5 z-[9999]">
      <div className="flex flex-col items-end gap-3">
        {/* Panel */}
        {open && (
          <div
            ref={panelRef}
            className="w-[360px] sm:w-[420px] h-[520px] sm:h-[600px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
            style={{ maxWidth: "calc(100vw - 32px)" }}
            role="dialog"
            aria-label="Chat with SoftSpark"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white grid place-items-center font-semibold">SS</div>
                <div className="text-sm font-semibold">SoftSpark Assistant</div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Open in new tab"
                  className="text-xs text-gray-500 hover:text-gray-700"
                  onClick={() => window.open(iframeUrl, "_blank")}
                >
                  Open
                </button>
                <button
                  aria-label="Close chat"
                  className="p-2 rounded hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  <FiX />
                </button>
              </div>
            </div>

            <iframe
              src={iframeUrl}
              title="SoftSpark Chat"
              className="flex-1 w-full h-full border-0"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups"
            />
          </div>
        )}

        {/* Floating button */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Close chat" : "Open chat"}
          className="group relative  inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          <span className="sr-only">Chat</span>
          <FiMessageCircle size={20} />
          {/* optional subtle pulse */}
          <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 bg-white/10 transition" />
        </button>
      </div>
    </div>
  );
}
