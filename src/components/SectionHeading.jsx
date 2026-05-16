export function SectionHeading({ eyebrow, title, body, align = "left", tone = "default" }) {
  const isLight = tone === "light";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p
          className={`mb-3 font-display text-lg uppercase tracking-[0.22em] ${
            isLight ? "text-golden-soft" : "text-carnival-red"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`section-title ${isLight ? "text-white" : ""}`}>{title}</h2>
      {body ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${isLight ? "text-white/80" : "text-donut/80"}`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
