interface SkillBarProps {
  name: string;
  level: number;
}

/**
 * Visual proficiency indicator.
 * The numeric level is decorative — the skill name remains the accessible label.
 */
export function SkillBar({ name, level }: SkillBarProps) {
  const clamped = Math.max(0, Math.min(100, level));

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-app">{name}</span>
        <span className="font-mono text-xs text-muted">{clamped}%</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-muted"
        role="presentation"
        aria-hidden="true"
      >
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-700"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
