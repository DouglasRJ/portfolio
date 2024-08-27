"use client";

import { useState } from "react";
import Link from "../components/link";
import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Contacts");
  const [activeId, setActiveId] = useState<number | null>(0);

  const contacts = [
    {
      id: 0,
      title: "Email",
      description: "dgjuniordev@gmail.com",
      path: "mailto:dgjuniordev@gmail.com",
    },
    {
      id: 1,
      title: t("phone"),
      description: "+55 24 99867-5421",
      path: "https://wa.me/5524998675421",
    },
    {
      id: 2,
      title: "Linkedin",
      description: "Douglas Junior",
      path: "https://www.linkedin.com/in/dg-junior/",
    },
    {
      id: 3,
      title: "Github",
      description: "DouglasRJ",
      path: "https://github.com/DouglasRJ",
    },
  ];

  const valuesPosition: Record<number, string> = {
    0: "mr-[11rem] md:mr-[14.5rem]",
    1: "mr-[8.3rem] md:mr-[11rem]",
    2: "mr-[7.25rem] md:mr-[9.5rem]",
    3: "mr-[5.55rem] md:mr-[7.35rem]",
  };

  const handleChangeId = (id: number) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <div className="fade-in h-full w-full">
      <div className="flex h-[50%] w-full flex-col items-end justify-end gap-3 pb-4 md:pb-10 md:pr-10">
        {contacts.map(({ id, title, description, path }) => (
          <div
            key={id}
            className={`flex h-min w-full cursor-pointer flex-col gap-1 transition-all duration-1000 ease-in-out`}
          >
            <div
              className={`relative flex cursor-pointer items-center justify-end gap-1 transition-all duration-1000 ease-in-out ${activeId === id ? "" : ""}`}
            >
              <p
                className={`z-20 text-end text-xs font-semibold text-primary/95 transition-all duration-1000 ease-in-out md:text-base md:font-medium hover:md:font-semibold ${activeId === id ? valuesPosition[id] : "z-10 mr-0"}`}
                onClick={() => handleChangeId(id)}
              >
                {title}
              </p>
              <a
                target="_blank"
                href={path}
                className={`fade-in absolute z-10 flex items-center gap-1 text-xs font-semibold text-primary/95 transition-all duration-1000 ease-in-out md:text-base md:font-medium ${activeId === id ? "opacity-1 z-20 delay-500" : "z-[-1] hidden opacity-0"}`}
              >
                - {description}
                <Link />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
