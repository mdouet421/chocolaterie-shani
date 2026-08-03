import type { ReactNode } from "react";

import { cn } from "@/lib/tailwind/utils";

export function ColorSwatch({
  bgClass,
  label,
}: {
  bgClass: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn(
          "h-10 w-10 rounded-md border border-neutral-200 shadow-sm",
          bgClass
        )}
      />
      <span className="text-3xs text-neutral-500">{label}</span>
    </div>
  );
}

export function ColorSwatchGrid({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}

export function SemanticSwatch({
  label,
  bgClass,
  fgClass,
}: {
  label: string;
  bgClass: string;
  fgClass: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn(
          "flex h-10 w-20 items-center justify-center rounded-md border border-neutral-200 text-3xs font-medium shadow-sm",
          bgClass,
          fgClass
        )}
      >
        Aa
      </div>
      <span className="text-3xs text-neutral-500">{label}</span>
    </div>
  );
}
