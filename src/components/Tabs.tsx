"use client";

import { useSegmentPath } from "@/context/SegmentPathContext";
import { cn } from "@/lib/utils";
import { ReactNode, useState, FC } from "react";

type TTab = {
  id: string;
  title: string;
  content: ReactNode;
  onClick?: () => void;
};

interface ITabs {
  tabs: TTab[];
  activeTabId?: string;
  className?: string;
  navClassName?: string;
}

export const Tabs: FC<ITabs> = ({
  tabs,
  activeTabId,
  className,
  navClassName,
}) => {
  const [activeId, setActiveId] = useState(activeTabId || tabs[0].id);
  const { firstSegment } = useSegmentPath();

  const onTabChange = (id: string) => () => {
    setActiveId(id);
  };

  const borderColor =
    firstSegment === "oncology-cro"
      ? "var(--clr-cyan)"
      : firstSegment === "catalyst-flex"
      ? "var(--clr-green)"
      : "var(--clr-gold)";

  return (
    <div className={cn("flex gap-y-4 flex-col", className)}>
      <div
        className={cn(
          "flex space-x-7 border-b border-slate-400 mb-10",
          navClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "pb-1.5 cursor-pointer uppercase font-semibold leading-[1.5] tracking-[0.8px] transition",
              activeId === tab.id ? "opacity-100 border-b-2" : "opacity-50"
            )}
            style={{ borderColor: borderColor }}
            onClick={onTabChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-y-2.5 duration-300 ease-in-out">
        {tabs.find((tab) => tab.id === activeId)?.content}
      </div>
    </div>
  );
};
