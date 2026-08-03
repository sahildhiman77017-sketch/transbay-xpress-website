export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-lime-700">
        <span className="h-px w-8 bg-lime-500" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-lime-500" />}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
