type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif text-4xl font-medium leading-tight sm:text-5xl"
      >
        {title}
      </h2>
      {text && <p className="mt-5 leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
