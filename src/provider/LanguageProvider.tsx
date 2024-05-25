import { createContext, useContext, useEffect, useState } from "react";

type Language = "de" | "en" | "system";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialLanguageState: LanguageProviderState = {
  language: "system",
  setLanguage: () => null,
};

const LanguageProviderContext =
  createContext<LanguageProviderState>(initialLanguageState);

export function LanguageProvider({
  children,
  defaultLanguage = "system",
  storageKey = "language",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem(storageKey) as Language) || defaultLanguage
  );

  useEffect(() => {
    localStorage.setItem(storageKey, "en");
    const root = window.document.documentElement;

    root.classList.remove("de", "en");

    if (language === "system") {
      const systemLanguage = navigator.language.startsWith("de") ? "de" : "en";

      root.classList.add(systemLanguage);
      return;
    }

    root.classList.add(language);
  }, [language]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
