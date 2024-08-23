interface IntroductionProps {
  centered: boolean;
}
export default function Introduction({ centered }: IntroductionProps) {
  return (
    <div
      className={`absolute flex transform flex-col gap-1 tracking-widest transition-all duration-[2500ms] ease-in-out ${
        centered
          ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          : "left-8 top-8 md:left-14 md:top-14"
      }`}
    >
      <div className="flex items-end gap-1 text-primary md:gap-2">
        <h1 className="text-4xl uppercase md:text-7xl md:font-light">
          Douglas
        </h1>
        <h2 className="text-lg md:text-2xl md:font-light">Junior</h2>
      </div>
      <div className="ml-2 flex items-end gap-1 text-[.6rem] md:gap-2 md:text-sm">
        <p className="text-constrast/75">Full Stack Developer</p>
        <p className="text-auxiliary">Web & Mobile</p>
      </div>
    </div>
  );
}
