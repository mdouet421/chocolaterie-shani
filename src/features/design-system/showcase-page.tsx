import type { ReactNode } from "react";

export function ShowcasePage({ children }: { children: ReactNode }) {
  return <div id="peinture-design-system-page"><div id="peinture-design-system-container">{children}</div></div>;
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      {children}
    </div>
  );
}
