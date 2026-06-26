import { createContext, useContext, useState, useCallback, type ReactNode, createElement } from 'react'

type Lang = 'en' | 'hi'

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      corridors: 'Corridors',
      projects: 'Projects',
      services: 'Services',
      insights: 'Insights',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookCall: 'Book a Call',
    },
    hero: {
      headline: "Strategic Real Estate Advisory. Gurugram's New Launch Corridors.",
      subheading:
        'Research-led guidance for investors, end-users, NRIs, and corporate decision-makers evaluating Gurugram\'s most important emerging residential corridors.',
      ctaPrimary: 'Schedule an Advisory Call',
      ctaSecondary: 'Contact Our Advisors',
    },
    footer: {
      tagline: 'Strategic Real Estate Advisory · Gurugram',
      description:
        'Research-based strategic real estate advisory for HNI and Ultra HNI buyers, NRI investors, CXOs, and senior professionals seeking credible Gurugram guidance.',
      quickLinks: 'Quick Links',
      disclaimer:
        'All project information, pricing, possession timelines, specifications, and availability are subject to change by the respective developers. Buyers should verify current details, RERA registration, payment plans, and project documents before proceeding.',
      rights: 'All rights reserved.',
    },
    common: {
      learnMore: 'Learn More',
      viewAll: 'View All',
      submit: 'Submit',
      close: 'Close',
      required: 'Required',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      corridors: 'कॉरिडोर',
      projects: 'प्रोजेक्ट',
      services: 'सेवाएं',
      insights: 'जानकारी',
      testimonials: 'प्रशंसापत्र',
      contact: 'संपर्क',
      bookCall: 'कॉल बुक करें',
    },
    hero: {
      headline: 'रणनीतिक रियल एस्टेट सलाह। गुरुग्राम के नए लॉन्च कॉरिडोर।',
      subheading:
        'निवेशकों, एंड-यूज़र्स, NRIs और कॉर्पोरेट निर्णयकर्ताओं के लिए शोध-आधारित मार्गदर्शन।',
      ctaPrimary: 'सलाह कॉल शेड्यूल करें',
      ctaSecondary: 'सक्रिय प्रोजेक्ट देखें',
    },
    footer: {
      tagline: 'रणनीतिक रियल एस्टेट सलाह · गुरुग्राम',
      description:
        'HNI, NRI और वरिष्ठ पेशेवरों के लिए गुरुग्राम में विश्वसनीय रियल एस्टेट सलाह।',
      quickLinks: 'त्वरित लिंक',
      disclaimer:
        'सभी प्रोजेक्ट जानकारी, मूल्य, कब्ज़े की समयसीमा और उपलब्धता डेवलपर्स द्वारा बदली जा सकती है।',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
    common: {
      learnMore: 'और जानें',
      viewAll: 'सब देखें',
      submit: 'जमा करें',
      close: 'बंद करें',
      required: 'आवश्यक',
    },
  },
}

type Translations = typeof translations.en

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
  }, [])

  const value: I18nContextValue = {
    lang,
    setLang,
    t: translations[lang],
  }

  return createElement(I18nContext.Provider, { value }, children)
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
