import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#how-it-works", label: t("nav.howItWorks") },
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-gradient">Otto</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <Button size="sm" className="gradient-primary border-0 text-primary-foreground font-semibold">
            {t("nav.cta")}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-4 py-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <Button size="sm" className="gradient-primary border-0 text-primary-foreground font-semibold">
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
