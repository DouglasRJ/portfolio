"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Experience() {
  const [activeId, setActiveId] = useState<number | null>(0);
  const t = useTranslations("Experience");

  const experiences = [
    {
      id: 0,
      title: t("0.title"),
      company: "Freelancer",
      dateInit: "2020-01",
      dateEnd: t("present"),
      resume: t("0.resume"),
    },
    {
      id: 1,
      title: t("1.title"),
      company: "Bluepaper",
      dateInit: "2022-06",
      dateEnd: t("present"),
      resume: t("1.resume"),
    },
    {
      id: 2,
      title: t("2.title"),
      company: "SmartNX",
      dateInit: "2022-12",
      dateEnd: "2024-08",
      resume: t("2.resume"),
    },
    {
      id: 3,
      title: t("3.title"),
      company: "BocaVox",
      dateInit: "2022-03",
      dateEnd: "2022-06",
      resume: t("3.resume"),
    },
  ];

  const valuesPosition: Record<number, string> = {
    0: "mr-[3.5rem] md:mr-[4.9rem]",
    1: "mr-[3.45rem] md:mr-[4.8rem]",
    2: "mr-[3.1rem] md:mr-[4.3rem]",
    3: "mr-[3rem] md:mr-[4.1rem]",
  };

  const handleChangeId = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <div className="fade-in h-full w-full">
      <div className="flex h-full w-full flex-col items-end justify-end gap-1 pb-4 md:gap-2 md:pb-10 md:pr-10">
        {experiences.map(
          ({ id, title, company, dateInit, dateEnd, resume }) => (
            <div
              key={id}
              className={`flex w-[90%] cursor-pointer flex-col gap-1 transition-all duration-1000 ease-in-out md:w-[30%] lg:w-[18%] ${activeId === id ? "h-full" : "h-[20px]"}`}
            >
              <div
                className={`relative flex cursor-pointer items-center justify-end gap-1 transition-all duration-1000 ease-in-out ${activeId === id ? "" : ""}`}
              >
                <p
                  className={`text-nowrap text-end text-xs font-semibold text-primary/95 transition-all duration-1000 ease-in-out md:text-base md:font-medium hover:md:font-semibold ${activeId === id ? valuesPosition[id] : "mr-0"}`}
                  onClick={() => handleChangeId(id)}
                >
                  {title}
                </p>
                <p
                  className={`fade-in absolute text-[0.55rem] font-semibold text-section transition-all duration-1000 ease-in-out md:text-xs ${activeId === id ? "opacity-1" : "opacity-0"}`}
                >
                  - {company}
                </p>
              </div>
              {activeId === id && (
                <div className="fade-in flex h-[95%] flex-col items-end gap-1">
                  <div>
                    <p className="text-[0.55rem] font-semibold text-section md:text-xs">
                      {dateInit} - {dateEnd}
                    </p>
                  </div>
                  <div className="relative w-full flex-1 overflow-hidden">
                    <div className="absolute inset-0 overflow-y-auto pr-2">
                      <p className="text-[.65rem] font-semibold text-primary/95 md:text-sm md:font-medium">
                        {resume}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
