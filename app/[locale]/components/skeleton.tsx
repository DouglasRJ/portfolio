"use client";

import { useEffect, useState } from "react";
import Background from "./background";
import Introduction from "./introduction";
import Navigation from "./navigation";
import Link from "./link";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./language-switch";

interface SkeletonProps {
  locale: string;
  children: React.ReactNode;
}

export default function Skeleton({ locale, children }: SkeletonProps) {
  const [centered, setCentered] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const t = useTranslations("Skeleton");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCentered(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (centered) return;

    const timer = setTimeout(() => {
      setShowDetails(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [centered]);
  return (
    <div className="select-non fixed h-[calc(100dvh)] w-screen overflow-hidden">
      <Background />
      <div className="relative h-full w-full p-4 md:p-8">
        <Introduction centered={centered} />
        <Navigation showDetails={showDetails} />
        <div
          className={`absolute bottom-4 right-8 h-[80%] w-[60%] overflow-scroll transition-all duration-[1500ms] ease-in-out md:w-[85%] ${
            showDetails ? "opacity-1" : "opacity-0"
          }`}
        >
          {children}
        </div>
        <a
          target="_blank"
          href="https://github.com/DouglasRJ/portfolio"
          className="absolute bottom-0 left-2 flex items-center gap-1 md:bottom-2 md:left-4 md:gap-2"
        >
          <p className="text-[0.55rem] text-primary/80 md:text-xs">
            {t("look-source-code")}
          </p>
          <Link />
        </a>
        <LanguageSwitch locale={locale} />
      </div>
    </div>
  );
}
