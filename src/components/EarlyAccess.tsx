import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const EarlyAccess = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Testimonial Quote Block */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light italic text-primary-foreground leading-relaxed mb-6">
            "{t("early.quote")}"
          </p>
          <p className="text-primary-foreground/80 text-lg">
            {t("early.quoteSubtitle")}
          </p>
        </div>
      </section>

      {/* Early Access Urgency Block */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {t("early.badge")}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("early.headline.before")}
            <span className="text-primary"> {t("early.headline.highlight")}</span>
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            {t("early.urgency")}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto py-4">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">87</p>
              <p className="text-sm text-gray-500 mt-1">{t("early.stat1")}</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">413</p>
              <p className="text-sm text-gray-500 mt-1">{t("early.stat2")}</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">∞</p>
              <p className="text-sm text-gray-500 mt-1">{t("early.stat3")}</p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/15556422389"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-md"
          >
            <Button
              size="lg"
              className="w-full gradient-primary border-0 text-primary-foreground font-semibold text-base h-14 gap-2"
            >
              <MessageCircle size={20} />
              {t("early.cta")}
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default EarlyAccess;
