type LogoMarkProps = {
  className?: string;
  title?: string;
};

/** Logomark: blomma med rosa kronblad, gul mitt och gröna blad (växtlighet, omtanke, vardagsglädje) */
export function LogoMark({ className = "h-full w-full", title }: LogoMarkProps) {
  const petals = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden={!title}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="60" cy="60" r="58" fill="#5f8168" />
      <circle cx="60" cy="60" r="50" fill="#f7f0e8" />
      <g transform="translate(60 50)">
        {petals.map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-20"
            rx="11"
            ry="21"
            fill="#d49aaa"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle r="14" fill="#e8c9a8" />
        <circle r="8" fill="#f5e6c8" />
      </g>
      <path
        d="M60 72 Q52 88 44 96 Q56 90 60 82 Q64 90 76 96 Q68 88 60 72Z"
        fill="#5f8168"
      />
      <path
        d="M48 78 Q38 84 34 92 Q46 86 50 80Z"
        fill="#8fb396"
      />
      <path
        d="M72 78 Q82 84 86 92 Q74 86 70 80Z"
        fill="#8fb396"
      />
    </svg>
  );
}
