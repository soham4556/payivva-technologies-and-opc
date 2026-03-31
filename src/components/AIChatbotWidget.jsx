import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const BOT_NAME = "PAYIVVA";
const ACCENT = "#00e5ff";
const ACCENT2 = "#7c3aed";

const QUICK_PROMPTS = [
  {
    icon: "🌐",
    label: "Website Redesign",
    value: "I need a website redesign estimate",
  },
  {
    icon: "📣",
    label: "Lead Generation",
    value: "Create a lead generation plan for me",
  },
  {
    icon: "🤖",
    label: "AI Chatbot",
    value: "How do I integrate an AI chatbot?",
  },
  {
    icon: "📈",
    label: "Growth Strategy",
    value: "I need a digital growth strategy",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    from: "bot",
    text: "Hey there 👋 I'm your PAYIVVA AI assistant. I'm here to help with web development, marketing strategy, and AI automation. What can I help you build today?",
    time: now(),
  },
];

function now() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function TypingDots() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "14px 18px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: ACCENT,
            display: "inline-block",
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function LogoMark({ size }) {
  return (
    <div
      aria-label="PAYIVVA logo"
      role="img"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "280%",
        backgroundPosition: "50% 10%",
        filter: "drop-shadow(0 0 6px rgba(0,229,255,0.35))",
      }}
    />
  );
}

function Avatar({ bot }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16,
        background: bot
          ? `linear-gradient(135deg, #0ff2 0%, #7c3aed55 100%)`
          : `linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)`,
        border: bot ? `1.5px solid ${ACCENT}44` : "none",
        boxShadow: bot ? `0 0 12px ${ACCENT}33` : "none",
        overflow: "hidden",
      }}
    >
      {bot ? <LogoMark size={34} /> : "U"}
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(1);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "user", text: msg, time: now() },
    ]);
    setTyping(true);
    setTimeout(
      () => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            from: "bot",
            text: getBotReply(msg),
            time: now(),
          },
        ]);
      },
      1600 + Math.random() * 700,
    );
  };

  const getBotReply = (msg) => {
    const m = msg.toLowerCase();
    if (m.includes("website") || m.includes("redesign"))
      return "Great choice! A website redesign can transform your brand. I'll need to know your goals, current pain points, and timeline. Shall we set up a discovery call? 🚀";
    if (m.includes("lead") || m.includes("generation"))
      return "Lead generation is our speciality! We blend content marketing, paid ads, and CRM automation to build you a full-funnel strategy. Want a custom plan? 📈";
    if (m.includes("chatbot") || m.includes("ai"))
      return "AI chatbots can handle 70%+ of customer queries automatically. I can walk you through our integration process — usually live within 2 weeks. Interested? 🤖";
    if (m.includes("growth") || m.includes("strategy"))
      return "We love building growth engines! We'll analyze your current funnel, identify bottlenecks, and create a 90-day roadmap. Let's get started! 💡";
    return "Thanks for reaching out! Our team specializes in digital transformation. Could you share a bit more about your project? I'd love to tailor a solution for you. ✨";
  };

  const panelStyle = {
    position: "fixed",
    bottom: 104,
    right: 24,
    zIndex: 9999,
    width: "min(92vw, 420px)",
    borderRadius: 28,
    overflow: "hidden",
    background: "#0a0f1e",
    border: "1px solid #ffffff12",
    boxShadow:
      "0 32px 80px rgba(0,0,0,0.72), 0 0 0 1px rgba(0,229,255,0.07) inset",
    display: "flex",
    flexDirection: "column",
    transformOrigin: "bottom right",
    transition:
      "opacity 0.3s cubic-bezier(.2,.8,.2,1), transform 0.3s cubic-bezier(.2,.8,.2,1)",
    opacity: open ? 1 : 0,
    transform: open ? "scale(1) translateY(0)" : "scale(0.92) translateY(20px)",
    pointerEvents: open ? "auto" : "none",
    maxHeight: "80vh",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes orbPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,229,255,0.35), 0 16px 44px rgba(0,0,0,0.55); }
          50% { box-shadow: 0 0 0 14px rgba(0,229,255,0), 0 16px 44px rgba(0,0,0,0.55); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .chat-msg { animation: msgIn 0.3s ease forwards; }
        .send-btn:hover { filter: brightness(1.15); transform: scale(1.05); }
        .send-btn:active { transform: scale(0.96); }
        .quick-btn:hover { background: rgba(0,229,255,0.12) !important; border-color: rgba(0,229,255,0.5) !important; transform: translateY(-1px); }
        .input-field:focus { outline: none; border-color: rgba(0,229,255,0.5) !important; box-shadow: 0 0 0 3px rgba(0,229,255,0.08) !important; }
        .scroll-area::-webkit-scrollbar { width: 4px; }
        .scroll-area::-webkit-scrollbar-track { background: transparent; }
        .scroll-area::-webkit-scrollbar-thumb { background: #ffffff18; border-radius: 4px; }
      `}</style>

      {/* Panel */}
      <div style={panelStyle}>
        {/* Header */}
        <div
          style={{
            padding: "20px 22px 18px",
            background:
              "linear-gradient(135deg, #0c1630 0%, #12173a 60%, #0e1529 100%)",
            borderBottom: "1px solid #ffffff0e",
            position: "relative",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* Scanline effect */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.015) 2px, rgba(0,229,255,0.015) 4px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: -40,
              top: -40,
              width: 180,
              height: 180,
              background: `radial-gradient(circle, ${ACCENT}18 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -20,
              bottom: -30,
              width: 140,
              height: 140,
              background: `radial-gradient(circle, ${ACCENT2}22 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${ACCENT}22, ${ACCENT2}33)`,
                  border: `1.5px solid ${ACCENT}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  boxShadow: `0 0 20px ${ACCENT}22`,
                  overflow: "hidden",
                }}
              >
                <LogoMark size={48} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 18,
                    color: "#fff",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    background: `linear-gradient(90deg, #fff 40%, ${ACCENT} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {BOT_NAME} AI
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 5,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#22c55e",
                      boxShadow: "0 0 6px #22c55e",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      color: "#22c55e",
                      fontWeight: 500,
                    }}
                  >
                    Online · Typically replies instantly
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#ffffff0c",
                border: "1px solid #ffffff14",
                color: "#ffffff88",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                transition: "all 0.2s",
                fontFamily: "sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#ffffff18")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#ffffff0c")
              }
            >
              ×
            </button>
          </div>
        </div>

        {/* Quick prompts strip */}
        <div
          style={{
            display: "flex",
            gap: 8,
            padding: "12px 16px",
            overflowX: "auto",
            flexShrink: 0,
            background: "#0c1225",
            borderBottom: "1px solid #ffffff08",
            scrollbarWidth: "none",
          }}
        >
          {QUICK_PROMPTS.map((q) => (
            <button
              key={q.label}
              className="quick-btn"
              onClick={() => sendMessage(q.value)}
              style={{
                flexShrink: 0,
                padding: "7px 14px",
                borderRadius: 20,
                background: "rgba(0,229,255,0.06)",
                border: "1px solid rgba(0,229,255,0.2)",
                color: "#c8eeff",
                fontSize: 12,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
            >
              <span>{q.icon}</span> {q.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div
          className="scroll-area"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "18px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: "#090e1c",
            minHeight: 0,
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="chat-msg"
              style={{
                display: "flex",
                flexDirection: msg.from === "user" ? "row-reverse" : "row",
                alignItems: "flex-end",
                gap: 10,
              }}
            >
              <Avatar bot={msg.from === "bot"} />
              <div
                style={{
                  maxWidth: "78%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: msg.from === "user" ? "flex-end" : "flex-start",
                  gap: 4,
                }}
              >
                <div
                  style={{
                    padding: "11px 16px",
                    borderRadius:
                      msg.from === "bot"
                        ? "18px 18px 18px 4px"
                        : "18px 18px 4px 18px",
                    background:
                      msg.from === "bot"
                        ? "linear-gradient(135deg, #101c3a 0%, #131e3f 100%)"
                        : `linear-gradient(135deg, ${ACCENT2} 0%, #4f46e5 100%)`,
                    border: msg.from === "bot" ? "1px solid #ffffff0e" : "none",
                    color: msg.from === "bot" ? "#d0e8ff" : "#fff",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    boxShadow:
                      msg.from === "bot" ? "none" : `0 4px 20px ${ACCENT2}44`,
                  }}
                >
                  {msg.text}
                </div>
                <span
                  style={{
                    fontSize: 10.5,
                    color: "#ffffff33",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          {typing && (
            <div
              className="chat-msg"
              style={{ display: "flex", alignItems: "flex-end", gap: 10 }}
            >
              <Avatar bot />
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #101c3a 0%, #131e3f 100%)",
                  border: "1px solid #ffffff0e",
                  borderRadius: "18px 18px 18px 4px",
                }}
              >
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input area */}
        <div
          style={{
            padding: "14px 16px",
            background: "#0c1225",
            borderTop: "1px solid #ffffff0a",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#101828",
              borderRadius: 20,
              border: "1px solid #ffffff12",
              padding: "6px 6px 6px 16px",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          >
            <input
              ref={inputRef}
              className="input-field"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything…"
              style={{
                flex: 1,
                background: "none",
                border: "none",
                color: "#e0eeff",
                fontSize: 14,
                fontFamily: "'DM Sans', sans-serif",
                padding: "8px 0",
                caretColor: ACCENT,
              }}
            />
            <button
              className="send-btn"
              onClick={() => sendMessage()}
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: `linear-gradient(135deg, ${ACCENT} 0%, #0ea5c9 100%)`,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                color: "#000",
                fontWeight: 700,
                transition: "all 0.18s",
                flexShrink: 0,
                boxShadow: `0 0 18px ${ACCENT}44`,
              }}
            >
              ↑
            </button>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 11,
              color: "#ffffff28",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Powered by PAYIVVA AI · End-to-end encrypted
          </p>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: open
            ? `linear-gradient(135deg, #1e293b, #0f172a)`
            : `linear-gradient(135deg, ${ACCENT} 0%, #0ea5c9 50%, ${ACCENT2} 100%)`,
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: open ? 26 : 28,
          color: open ? ACCENT : "#fff",
          zIndex: 10000,
          transition: "background 0.3s, transform 0.2s",
          animation: open
            ? "none"
            : "orbPulse 2.5s ease-out infinite, orbFloat 3s ease-in-out infinite",
          boxShadow: open
            ? `0 0 0 2px ${ACCENT}44, 0 12px 30px rgba(0,0,0,0.5)`
            : `0 0 0 2px rgba(0,229,255,0.2), 0 16px 40px rgba(0,0,0,0.5)`,
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Toggle AI Chat"
      >
        {open ? "×" : <LogoMark size={50} />}
        {!open && unread > 0 && (
          <span
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#ef4444",
              border: "2px solid #090e1c",
              fontSize: 10,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
            }}
          >
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
