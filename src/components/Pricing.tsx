import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t("pricing.free.name"),
      price: t("pricing.free.price"),
      period: t("pricing.free.period"),
      features: [t("pricing.free.f1"), t("pricing.free.f2"), t("pricing.free.f3")],
      cta: t("pricing.free.cta"),
      popular: false,
    },
    {
      name: t("pricing.pro.name"),
      price: t("pricing.pro.price"),
      period: t("pricing.pro.period"),
      features: [t("pricing.pro.f1"), t("pricing.pro.f2"), t("pricing.pro.f3"), t("pricing.pro.f4")],
      cta: t("pricing.pro.cta"),
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">{t("pricing.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-primary/50 bg-card shadow-xl shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold gradient-primary text-primary-foreground px-4 py-1 rounded-full">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "gradient-primary border-0 text-primary-foreground font-semibold"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
