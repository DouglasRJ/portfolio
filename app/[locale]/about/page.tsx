import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  return (
    <div className="fade-in h-full w-full">
      <div className="absolute bottom-6 right-0 flex w-[150px] flex-col gap-4 text-[.65rem] font-semibold text-primary/90 md:bottom-12 md:right-12 md:w-52 md:text-sm md:font-medium">
        <p>{t("first-paragraph")}</p>
        <p>{t("second-paragraph")}</p>
      </div>
    </div>
  );
}
