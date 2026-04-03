import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

const WhatsAppMockup = () => {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const messages = [
    t("mock.greeting"),
    t("mock.weather"),
    t("mock.traffic"),
    t("mock.calendar"),
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          messages.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 800);
          });
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isTyping = visibleCount < messages.length;

  return (
    <div className="w-full max-w-sm mx-auto">
      <div ref={ref} className="rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-primary/10">
        {/* WhatsApp header */}
        <div className="rounded-t-[1.5rem] bg-[hsl(152_47%_28%)] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
            O
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Otto</p>
            <p className="text-[10px] text-white/70">
              {isTyping ? "typing..." : "online"}
            </p>
          </div>
        </div>

        {/* Chat body */}
        <div className="bg-[hsl(200_10%_10%)] px-3 py-4 space-y-2 min-h-[320px] rounded-b-[1.5rem]">
          {messages.map((text, i) =>
            i < visibleCount ? (
              <div
                key={i}
                className="max-w-[85%] rounded-lg rounded-tl-sm bg-[hsl(152_30%_18%)] px-3 py-2 text-[11px] leading-relaxed text-white/90 whitespace-pre-line transition-all duration-500 ease-out animate-[fadeInUp_0.4s_ease-out_both]"
              >
                {text}
              </div>
            ) : null
          )}
          {isTyping && visibleCount >= 0 && (
            <div className="max-w-[60px] rounded-lg rounded-tl-sm bg-[hsl(152_30%_18%)] px-3 py-2 flex gap-1 items-center animate-[fadeInUp_0.3s_ease-out_both]">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppMockup;
