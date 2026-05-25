import { siteConfig } from "@/lib/site-config";
import { LogoMark } from "@/components/LogoMark";

const sizeClasses = {
  sm: "h-12 w-12 md:h-14 md:w-14",
  md: "h-28 w-28 md:h-36 md:w-36",
  lg: "h-56 w-56 md:h-72 md:w-72",
  xl: "h-24 w-24",
} as const;

type BrandLogoProps = {
  size?: keyof typeof sizeClasses;
  className?: string;
  alt?: string;
};

export function BrandLogo({
  size = "md",
  className = "",
  alt = `${siteConfig.name} logotyp`,
}: BrandLogoProps) {
  return (
    <span
      className={`inline-flex shrink-0 overflow-hidden rounded-full shadow-sm ring-2 ring-[#e8ddd6]/80 ${sizeClasses[size]} ${className}`}
    >
      <LogoMark title={alt} />
    </span>
  );
}
