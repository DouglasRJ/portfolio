"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Skills() {
  const t = useTranslations("Skills");
  const [activeId, setActiveId] = useState<number | null>(0);

  const handleChangeId = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };

  const skills = [
    {
      id: 0,
      title: t("0.title"),
      description: t("0.description"),
    },
    {
      id: 1,
      title: t("1.title"),
      description: t("1.description"),
    },
    {
      id: 2,
      title: t("2.title"),
      description: t("2.description"),
    },
    {
      id: 3,
      title: t("3.title"),
      description: t("3.description"),
    },
    {
      id: 4,
      title: t("4.title"),
      description: t("4.description"),
    },
    {
      id: 5,
      title: t("5.title"),
      description: t("5.description"),
    },
    {
      id: 6,
      title: t("6.title"),
      description: t("6.description"),
    },
    {
      id: 7,
      title: t("7.title"),
      description: t("7.description"),
    },
    {
      id: 8,
      title: t("8.title"),
      description: t("8.description"),
    },
    {
      id: 9,
      title: t("9.title"),
      description: t("9.description"),
    },
    {
      id: 10,
      title: t("10.title"),
      description: t("10.description"),
    },
    {
      id: 11,
      title: t("11.title"),
      description: t("11.description"),
    },
    {
      id: 12,
      title: t("12.title"),
      description: t("12.description"),
    },
  ];

  return (
    <div className="fade-in h-full w-full">
      <div className="flex h-full w-full flex-col items-end justify-end gap-1 pb-4 md:gap-2 md:pb-10 md:pr-10">
        {skills.map(({ id, title, description }) => (
          <div
            key={id}
            className={`flex w-[90%] cursor-pointer flex-col gap-1 transition-all duration-1000 ease-in-out md:w-[18%] ${activeId === id ? "h-full" : "h-[20px]"}`}
          >
            <div
              className={`relative flex cursor-pointer items-center justify-end gap-1 transition-all duration-1000 ease-in-out ${activeId === id ? "" : ""}`}
            >
              <p
                className={`text-end text-xs font-semibold text-primary/95 transition-all duration-1000 ease-in-out md:text-base md:font-medium hover:md:font-semibold`}
                onClick={() => handleChangeId(id)}
              >
                {title}
              </p>
            </div>
            {activeId === id && (
              <div className="fade-in flex h-[95%] flex-col items-end gap-1">
                <div className="relative w-full flex-1 overflow-hidden">
                  <div className="absolute inset-0 overflow-y-auto pr-2">
                    <p className="text-[.65rem] font-semibold text-primary/95 md:text-sm md:font-medium">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
