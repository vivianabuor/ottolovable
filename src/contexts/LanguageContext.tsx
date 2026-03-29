import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.howItWorks": { en: "How it works", es: "Cómo funciona" },
  "nav.features": { en: "Features", es: "Funciones" },
  "nav.pricing": { en: "Pricing", es: "Precios" },
  "nav.cta": { en: "Get Otto", es: "Obtener Otto" },

  // Hero
  "hero.title": { en: "Your day organized.\nBefore you even ask.", es: "Tu día organizado.\nAntes de que preguntes." },
  "hero.subtitle": { en: "oπo is your personal copilot on WhatsApp. Weather, traffic, calendar, finances. All in one message, every morning, without you having to ask.", es: "oπo es tu copiloto personal en WhatsApp. Clima, tráfico, calendario y finanzas. Todo en un mensaje, cada mañana, sin que tengas que pedirlo." },
  "hero.cta": { en: "Start", es: "Comienza" },
  "hero.noApp": { en: "No app to download. Just a number you save.", es: "Sin app que descargar. Solo un número que guardas." },

  // How it works
  "how.title": { en: "How it works", es: "Cómo funciona" },
  "how.subtitle": { en: "Three simple steps to start your day smarter", es: "Tres simples pasos para empezar tu día más inteligente" },
  "how.step1.title": { en: "Save the number", es: "Guarda el número" },
  "how.step1.desc": { en: "Add Otto to your WhatsApp contacts. That's it — no downloads, no signups.", es: "Agrega a Otto a tus contactos de WhatsApp. Eso es todo! sin descargas, sin registros." },
  "how.step2.title": { en: "Get your summary", es: "Recibe tu resumen" },
  "how.step2.desc": { en: "Every morning, Otto sends you a personalized summary of your day ahead.", es: "Cada mañana, Otto te envía un resumen personalizado de tu día." },
  "how.step3.title": { en: "Reply to act", es: "Responde para actuar" },
  "how.step3.desc": { en: "Need to reschedule? Check a route? Just reply and Otto handles it.", es: "¿Necesitas reprogramar? ¿Revisar una ruta? Solo responde y Otto se encarga." },

  // Features
  "features.title": { en: "Everything you need.\nOne message.", es: "Todo lo que necesitas.\nUn mensaje." },
  "features.subtitle": { en: "Otto pulls from multiple sources to give you a complete picture", es: "Otto extrae de múltiples fuentes para darte una imagen completa" },
  "features.weather.title": { en: "Weather", es: "Clima" },
  "features.weather.desc": { en: "Real-time forecast so you dress right and plan ahead.", es: "Pronóstico en tiempo real para que te vistas bien y planifiques." },
  "features.traffic.title": { en: "Traffic", es: "Tráfico" },
  "features.traffic.desc": { en: "Know your commute time before you leave. Alternate routes included.", es: "Conoce tu tiempo de viaje antes de salir. Rutas alternativas incluidas." },
  "features.calendar.title": { en: "Calendar", es: "Calendario" },
  "features.calendar.desc": { en: "Meetings, deadlines, birthdays. All in your morning message.", es: "Reuniones, plazos, cumpleaños. Todo en tu mensaje matutino." },
  "features.finances.title": { en: "Finances", es: "Finanzas" },
  "features.finances.desc": { en: "Daily spending snapshot and alerts so you stay on budget.", es: "Resumen diario de gastos y alertas para mantenerte en presupuesto." },

  // Pricing
  "pricing.title": { en: "Simple pricing", es: "Precios simples" },
  "pricing.subtitle": { en: "Start free. Upgrade when you're ready.", es: "Empieza gratis. Mejora cuando estés listo." },
  "pricing.free.name": { en: "Free", es: "Gratis" },
  "pricing.free.price": { en: "$0", es: "$0" },
  "pricing.free.period": { en: "/month", es: "/mes" },
  "pricing.free.f1": { en: "Daily morning briefing", es: "Briefing matutino diario" },
  "pricing.free.f2": { en: "Weather & calendar", es: "Clima y calendario" },
  "pricing.free.f3": { en: "Basic traffic info", es: "Información básica de tráfico" },
  "pricing.free.cta": { en: "Get started", es: "Comenzar" },
  "pricing.pro.name": { en: "Pro", es: "Pro" },
  "pricing.pro.price": { en: "$9", es: "$9" },
  "pricing.pro.period": { en: "/month", es: "/mes" },
  "pricing.pro.f1": { en: "Everything in Free", es: "Todo en Gratis" },
  "pricing.pro.f2": { en: "Finance tracking", es: "Seguimiento financiero" },
  "pricing.pro.f3": { en: "Smart replies & actions", es: "Respuestas y acciones inteligentes" },
  "pricing.pro.f4": { en: "Priority support", es: "Soporte prioritario" },
  "pricing.pro.cta": { en: "Upgrade to Pro", es: "Mejorar a Pro" },
  "pricing.popular": { en: "Most popular", es: "Más popular" },

  // FAQ
  "faq.title": { en: "Frequently asked questions", es: "Preguntas frecuentes" },
  "faq.q1": { en: "Do I need to download an app?", es: "¿Necesito descargar una app?" },
  "faq.a1": { en: "No! Otto works entirely through WhatsApp. Just save the number and you're ready.", es: "¡No! Otto funciona completamente a través de WhatsApp. Solo guarda el número y listo." },
  "faq.q2": { en: "How does Otto access my calendar?", es: "¿Cómo accede Otto a mi calendario?" },
  "faq.a2": { en: "Otto connects securely to Google Calendar and Outlook. You authorize once and it stays synced.", es: "Otto se conecta de forma segura a Google Calendar y Outlook. Autorizas una vez y se mantiene sincronizado." },
  "faq.q3": { en: "Is my data safe?", es: "¿Mis datos están seguros?" },
  "faq.a3": { en: "Absolutely. We use end-to-end encryption and never store your messages. Your data is yours.", es: "Absolutamente. Usamos cifrado de extremo a extremo y nunca almacenamos tus mensajes. Tus datos son tuyos." },
  "faq.q4": { en: "Can I customize what Otto sends me?", es: "¿Puedo personalizar lo que Otto me envía?" },
  "faq.a4": { en: "Yes! Just tell Otto what you care about and it adapts. You can adjust anytime via chat.", es: "¡Sí! Solo dile a Otto qué te interesa y se adapta. Puedes ajustar en cualquier momento por chat." },

  // Early Access
  "early.quote": { en: "Imagine waking up and someone brilliant already checked everything for you. That's oπo.", es: "Imagina despertar y que alguien brillante ya revisó todo por ti. Eso es oπo." },
  "early.quoteSubtitle": { en: "The copilot your routine needed.", es: "El copiloto que tu rutina necesitaba." },
  "early.badge": { en: "Early access — Limited spots", es: "Acceso anticipado — Cupos limitados" },
  "early.headline.before": { en: "The first 500 users get in", es: "Los primeros 500 usuarios entran" },
  "early.headline.highlight": { en: "free forever", es: "gratis para siempre" },
  "early.urgency": { en: "Don't think about it too long. When spots run out, the price goes up.", es: "No lo pienses demasiado. Cuando se acaben los cupos, el precio sube." },
  "early.stat1": { en: "spots taken", es: "cupos tomados" },
  "early.stat2": { en: "free spots left", es: "lugares gratis restantes" },
  "early.stat3": { en: "days it saves you", es: "días que te ahorra" },
  "early.cta": { en: "Start here — I want my free spot", es: "Comenzar aquí — Quiero mi lugar gratis" },

  // Footer
  "footer.tagline": { en: "Your day, delivered.", es: "Tu día, entregado." },
  "footer.privacy": { en: "Privacy", es: "Privacidad" },
  "footer.terms": { en: "Terms", es: "Términos" },
  "footer.contact": { en: "Contact", es: "Contacto" },

  // WhatsApp mockup
  "mock.greeting": { en: "Good morning! ☀️ Here's your briefing for today:", es: "¡Buenos días! ☀️ Aquí está tu briefing de hoy:" },
  "mock.weather": { en: "🌤 Weather: 24°C, partly cloudy. Rain at 3 PM — bring an umbrella!", es: "🌤 Clima: 24°C, parcialmente nublado. Lluvia a las 3 PM — ¡lleva paraguas!" },
  "mock.traffic": { en: "🚗 Traffic: 35 min to office. Take Av. Reforma — 10 min faster today.", es: "🚗 Tráfico: 35 min a la oficina. Toma Av. Reforma — 10 min más rápido hoy." },
  "mock.calendar": { en: "📅 Calendar: Team standup at 9 AM, lunch with María at 1 PM, dentist at 5 PM.", es: "📅 Calendario: Standup a las 9 AM, almuerzo con María a la 1 PM, dentista a las 5 PM." },
  "mock.finances": { en: "💰 Finances: You've spent $42 today. Monthly budget at 68%.", es: "💰 Finanzas: Has gastado $42 hoy. Presupuesto mensual al 68%." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
