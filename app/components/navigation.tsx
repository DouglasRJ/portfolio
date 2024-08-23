import Link from "next/link";

interface NavigationProps {
  showDetails: boolean;
}
export default function Navigation({ showDetails }: NavigationProps) {
  const options = [
    { label: "About", path: "/about" },
    { label: "Experience", path: "/experience" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
    { label: "Resume", path: "/resume" },
  ];

  return (
    <div
      className={`absolute ml-4 mt-24 px-4 transition-all duration-[1500ms] ease-in-out md:mt-36 md:px-6 ${
        showDetails ? "opacity-1" : "opacity-0"
      }`}
    >
      {options.map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className="block py-2 text-[.65rem] font-semibold text-primary/90 hover:underline md:text-sm"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
