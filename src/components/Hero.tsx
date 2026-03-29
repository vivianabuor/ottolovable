import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import WhatsAppMockup from "@/components/WhatsAppMockup";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary border-0 text-primary-foreground font-semibold text-base px-8 h-12 gap-2"
              >
                <MessageCircle size={18} />
                {t("hero.cta")}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("hero.noApp")}
            </p>
          </div>

          {/* Right — Phone mockup */}
          <div className="fade-in-up fade-in-up-delay-2 flex justify-center lg:justify-end">
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
