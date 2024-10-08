import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/provider/LanguageProvider";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useEffect } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const lang = language;

  const { toast } = useToast();

  const handleClick = (newLang: string) => {
    toast({
      description:
        newLang === "de"
          ? "Die Sprache wurde zu deutsch geändert."
          : "The language has been set to english.",
      action: (
        <ToastAction
          onClick={() => {
            setLanguage(newLang === "de" ? "en" : "de");
          }}
          altText="Try again"
        >
          {newLang === "de" ? "Back to englisch" : "Zurück zu deutsch"}
        </ToastAction>
      ),
    });

    setLanguage(newLang as "de" | "en");
  };

  useEffect(() => {
    // Lese den Zeitpunkt der letzten Ausführung aus dem localStorage
    const storedLastExecutionTime = localStorage.getItem("lastExecutionTime");
    const currentTime = Date.now();
    const twoHoursInMillis = 2 * 60 * 60 * 1000; // 2 Stunden in Millisekunden

    // Überprüfe, ob die letzte Ausführung mehr als 2 Stunden her ist
    if (
      navigator.language.startsWith("de") &&
      lang === "en" &&
      (!storedLastExecutionTime ||
        currentTime - parseInt(storedLastExecutionTime) >= twoHoursInMillis)
    ) {
      setTimeout(() => {
        toast({
          className:
            "max-md:flex max-md:justify-center max-md:items-center max-md:flex-col max-md:gap-2 max-md:px-4 max-md:py-2 max-md:text-center max-md:top-96",
          duration: 6500,
          description: "Ihr System ist auf Deutsch, möchten Sie wechseln?",
          action: (
            <ToastAction
              onClick={() => {
                handleClick("de");
              }}
              altText="Try again"
            >
              Zu deutsch wechseln
            </ToastAction>
          ),
        });
      }, 1000);

      // Aktualisiere den Zeitpunkt der letzten Ausführung im localStorage
      localStorage.setItem("lastExecutionTime", currentTime.toString());
    }
  }, [lang, handleClick]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <p
            className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all `}
          >
            {lang === "de" ? "DE" : "EN"}
          </p>
          <p
            className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all `}
          >
            {lang === "de" ? "EN" : "DE"}
          </p>
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        align="end"
      >
        <DropdownMenuItem onClick={() => handleClick("de")}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleClick("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
