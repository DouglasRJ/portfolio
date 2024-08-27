import { useTranslations } from "next-intl";

interface IntroductionProps {
  centered: boolean;
}
export default function Introduction({ centered }: IntroductionProps) {
  const t = useTranslations("Introduction");

  return (
    <div
      className={`absolute flex transform flex-col tracking-widest transition-all duration-[2500ms] ease-in-out ${
        centered
          ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          : "left-4 top-8 md:left-14 md:top-14"
      }`}
    >
      <h1 className="text-nowrap text-2xl uppercase text-primary md:text-4xl md:font-thin">
        Douglas Junior
      </h1>
      <div className="ml-1 flex items-end gap-1 text-[.55rem] md:gap-2 md:text-sm">
        <p className="font-light text-constrast/75">{t("role")}</p>
        <p className="font-light text-auxiliary">Web & Mobile</p>
      </div>
    </div>
  );
}
