import { siteConfig } from "@/lib/site-config";

const sizeClasses = {
  sm: "h-12 w-12 text-lg md:h-14 md:w-14 md:text-xl",
  md: "h-28 w-28 text-3xl md:h-36 md:w-36 md:text-4xl",
  lg: "h-56 w-56 text-5xl md:h-72 md:w-72 md:text-6xl",
  xl: "h-24 w-24 text-2xl",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeClasses;
  surfaceClassName?: string;
  className?: string;
  alt?: string;
};

/** Generisk logomark för portfolio-demo (inga kundfiler) */
export function BrandLogo({
  size = "md",
  surfaceClassName = "bg-background",
  className = "",
  alt = `${siteConfig.name} logotyp`,
}: BrandLogoProps) {
  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#6d8b72] font-semibold tracking-tight text-white ${sizeClasses[size]} ${surfaceClassName} ${className}`}
    >
      TV
    </span>
  );
}
