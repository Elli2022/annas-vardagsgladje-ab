type LogoMarkProps = {
  className?: string;
  title?: string;
};

/**
 * Logomark: grön cirkel (trygghet/natur), cream (vardag), rosa hjärta (omtanke),
 * grönt hjärta inuti (meningsfull närvaro), mjuka “blad” nedtill (växande gemenskap).
 */
export function LogoMark({ className = "h-full w-full", title }: LogoMarkProps) {
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
      <circle cx="60" cy="60" r="48" fill="#f7f0e8" />
      <path
        d="M60 34c-14 10-22 26-14 38 4-6 10-9 14-9s10 3 14 9c8-12 0-28-14-38z"
        fill="#d49aaa"
      />
      <path
        d="M60 44c-8 6-12 16-8 24 3-4 5-6 8-6s5 2 8 6c4-8 0-18-8-24z"
        fill="#5f8168"
      />
      <ellipse cx="42" cy="78" rx="10" ry="6" fill="#8fb396" opacity="0.9" />
      <ellipse cx="78" cy="78" rx="10" ry="6" fill="#8fb396" opacity="0.9" />
    </svg>
  );
}
