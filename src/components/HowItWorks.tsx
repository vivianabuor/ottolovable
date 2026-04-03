import { useLanguage } from "@/contexts/LanguageContext";
import { Save, Send, Reply } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const HowItWorks = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const steps = [
    { icon: Save, title: t("how.step1.title"), desc: t("how.step1.desc"), num: "01" },
    { icon: Send, title: t("how.step2.title"), desc: t("how.step2.desc"), num: "02" },
    { icon: Reply, title: t("how.step3.title"), desc: t("how.step3.desc"), num: "03" },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">{t("how.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("how.subtitle")}</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-700 ease-out ${
                visible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: visible ? `${i * 200}ms` : "0ms" }}
            >
              <span className="text-5xl font-bold text-primary/10 absolute top-4 right-6">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <step.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
