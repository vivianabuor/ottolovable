import { useLanguage } from "@/contexts/LanguageContext";
import { Cloud, Car, CalendarDays, Wallet } from "lucide-react";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Cloud, title: t("features.weather.title"), desc: t("features.weather.desc") },
    { icon: Car, title: t("features.traffic.title"), desc: t("features.traffic.desc") },
    { icon: CalendarDays, title: t("features.calendar.title"), desc: t("features.calendar.desc") },
    { icon: Wallet, title: t("features.finances.title"), desc: t("features.finances.desc") },
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 gradient-glow pointer-events-none opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold whitespace-pre-line">{t("features.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("features.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
