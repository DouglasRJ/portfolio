import { Link, usePathname } from "@/navigation";
import { useTranslations } from "next-intl";

interface LanguageSwitcherProps {
  locale: string;
}

const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const locales = ["pt", "en"] as const;

  type LocaleType = (typeof locales)[number];

  const languages: { language: string; code: LocaleType }[] = [
    {
      language: t("pt"),
      code: "pt",
    },
    {
      language: t("en"),
      code: "en",
    },
  ];

  return (
    <div className="absolute right-8 flex items-center gap-2">
      {languages.map(({ language, code }) => (
        <Link
          className="flex items-center gap-1 text-[0.55rem] text-primary/75 md:text-xs"
          href={pathname}
          locale={code}
          key={code}
        >
          {language}
          <div
            className={`h-2 w-2 border-2 border-primary/75 ${code === locale ? "border-none bg-primary/75" : "bg-transparent"}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
