import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const { t } = useLanguage();

  const features = [t("pricing.free.f1"), t("pricing.free.f2"), t("pricing.free.f3")];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">{t("pricing.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("pricing.subtitle")}</p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="rounded-2xl border border-border bg-card p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{t("pricing.free.name")}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{t("pricing.free.price")}</span>
              <span className="text-muted-foreground text-sm">{t("pricing.free.period")}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {t("pricing.free.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
