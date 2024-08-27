import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface NavigationProps {
  showDetails: boolean;
}

export default function Navigation({ showDetails }: NavigationProps) {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const options = [
    { label: t("about"), path: "about" },
    { label: t("experience"), path: "experience" },
    { label: t("skills"), path: "skills" },
    { label: t("contact"), path: "contact" },
    { label: t("resume"), path: "resume" },
  ];

  return (
    <div
      className={`absolute ml-1 mt-24 transition-all duration-[1500ms] ease-in-out md:mt-36 md:px-6 ${
        showDetails ? "opacity-1" : "opacity-0"
      }`}
    >
      {options.map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className={`block py-1 text-[.65rem] text-primary/85 decoration-constrast hover:underline md:py-2 md:text-sm ${
            pathname.split("/")[2] === path
              ? "decoration underline underline-offset-2"
              : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
