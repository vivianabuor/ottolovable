import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppMockup = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Phone frame */}
      <div className="rounded-[2rem] border border-border bg-card p-2 shadow-2xl shadow-primary/10">
        {/* WhatsApp header */}
        <div className="rounded-t-[1.5rem] bg-[hsl(152_47%_28%)] px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
            O
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Otto</p>
            <p className="text-[10px] text-white/70">online</p>
          </div>
        </div>

        {/* Chat body */}
        <div className="bg-[hsl(200_10%_10%)] px-3 py-4 space-y-2 min-h-[320px] rounded-b-[1.5rem]">
          {/* Otto messages */}
          <ChatBubble text={t("mock.greeting")} delay={0} />
          <ChatBubble text={t("mock.weather")} delay={1} />
          <ChatBubble text={t("mock.traffic")} delay={2} />
          <ChatBubble text={t("mock.calendar")} delay={3} />
          <ChatBubble text={t("mock.finances")} delay={4} />
        </div>
      </div>
    </div>
  );
};

const ChatBubble = ({ text, delay }: { text: string; delay: number }) => (
  <div
    className="fade-in-up max-w-[85%] rounded-lg rounded-tl-sm bg-[hsl(152_30%_18%)] px-3 py-2 text-[11px] leading-relaxed text-white/90"
    style={{ animationDelay: `${0.3 + delay * 0.15}s` }}
  >
    {text}
  </div>
);

export default WhatsAppMockup;
