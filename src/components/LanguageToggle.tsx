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
      <DropdownMenuContent align="end">
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
