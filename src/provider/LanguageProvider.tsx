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
    const storedLanguage = localStorage.getItem(storageKey) as Language;
    const storedLanguageTime = localStorage.getItem(`${storageKey}Time`);
    const currentTime = Date.now();
    const twoHoursInMillis = 2 * 60 * 60 * 1000; // 2 Stunden in Millisekunden

    // Überprüfe, ob die Sprache vor mehr als 2 Stunden geändert wurde
    if (
      storedLanguageTime &&
      currentTime - parseInt(storedLanguageTime) >= twoHoursInMillis
    ) {
      localStorage.setItem(storageKey, "en");
      setLanguage("en");
    } else {
      setLanguage(storedLanguage || defaultLanguage);
    }

    const root = window.document.documentElement;
    root.classList.remove("de", "en");

    if (language === "system") {
      const systemLanguage = navigator.language.startsWith("de") ? "de" : "en";
      root.classList.add(systemLanguage);
    } else {
      root.classList.add(language);
    }
  }, [language, storageKey]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      localStorage.setItem(`${storageKey}Time`, Date.now().toString());
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
