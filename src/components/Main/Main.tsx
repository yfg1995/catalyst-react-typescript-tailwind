"use client";

import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useDropdownActiveState } from "@/zustand/useDropdownActiveState";
import { AnimatePresence, motion } from "framer-motion";

export interface IMain extends PropsWithChildren {
  className?: string;
}

export const Main: FC<IMain> = ({ children, className }) => {
  const { isHovered } = useDropdownActiveState();

  return (
    <main className={cn("overflow-hidden", className)}>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-full bg-[var(--bg-primary)] z-40"
          />
        )}
      </AnimatePresence>
      {children}
    </main>
  );
};
