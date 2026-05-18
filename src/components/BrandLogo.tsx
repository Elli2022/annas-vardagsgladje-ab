import Image from "next/image";

const sizeClasses = {
  sm: "h-12 w-12 md:h-14 md:w-14",
  md: "h-28 w-28 md:h-36 md:w-36",
  lg: "h-56 w-56 md:h-72 md:w-72",
  xl: "h-24 w-24",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeClasses;
  /** Match parent section background when logo file has a solid backdrop */
  surfaceClassName?: string;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function BrandLogo({
  size = "md",
  surfaceClassName = "bg-background",
  className = "",
  priority = false,
  alt = "Annas VardagsGlädje AB",
}: BrandLogoProps) {
  const dimension = size === "sm" ? 56 : size === "md" ? 140 : size === "lg" ? 280 : 100;

  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full ${surfaceClassName} ${className}`}
    >
      <Image
        src="/logo.png"
        alt={alt}
        width={dimension}
        height={dimension}
        priority={priority}
        className={`${sizeClasses[size]} object-cover`}
      />
    </span>
  );
}
