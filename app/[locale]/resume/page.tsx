import { useTranslations } from "next-intl";

export default function Contacts() {
  const t = useTranslations("Resume");

  const contacts = [
    {
      id: 0,
      title: `${t("download")} En-us`,
      path: "/resume_douglas.pdf",
    },
    {
      id: 1,
      title: `${t("download")} Pt-br`,
      path: "/curriculo_douglas.pdf",
    },
  ];
  return (
    <div className="fade-in h-full w-full">
      <div className="flex h-full w-full flex-col items-end justify-end gap-1 pb-4 md:gap-2 md:pb-10 md:pr-10">
        {contacts.map(({ id, title, path }) => (
          <div
            key={id}
            className={`flex h-min w-[90%] cursor-pointer flex-col gap-1 transition-all duration-1000 ease-in-out md:w-[18%]`}
          >
            <div
              className={`relative flex cursor-pointer items-center justify-end gap-1 transition-all duration-1000 ease-in-out`}
            >
              <a
                href={path}
                download
                target="_blank"
                className={`z-20 text-end text-xs font-semibold text-primary/90 transition-all duration-1000 ease-in-out md:text-base md:font-medium hover:md:font-semibold`}
              >
                {title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
