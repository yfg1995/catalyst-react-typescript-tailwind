"use client";

import { FC, PropsWithChildren } from "react";
import useDropdownActiveState from "@/hooks/useDropdownActiveState";
import { cn } from "@/lib/utils";

export interface IMain extends PropsWithChildren {
  className?: string;
}

export const Main: FC<IMain> = ({ children, className }) => {
  const [isHoveredDropdown] = useDropdownActiveState();

  return (
    <main className={cn("overflow-hidden", className)}>
      {isHoveredDropdown && (
        <div className="fixed top-0 left-0 h-full w-full bg-[var(--bg-primary)] opacity-70 z-40" />
      )}

      {children}
    </main>
  );
};
