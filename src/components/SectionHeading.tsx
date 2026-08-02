interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

/**
 * Consistent section header used across the page.
 * Keeps typography hierarchy identical so new sections drop in cleanly.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`mb-10 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
