import { cn } from "@/lib/utils";
import { DownArrow } from "@/svg/DownArrow";
import { useState, FC, CSSProperties } from "react";

export type TSelectOption = {
  value: string;
  id: string;
};

export interface ISelect {
  options: TSelectOption[];
  isEmptyInit?: boolean;
  defaultSelectedId?: string;
  className?: string;
  onSelect?: (id: string) => void;
  onSave?: (value: string) => void;
}

export const SelectDropdown: FC<ISelect> = ({
  options,
  defaultSelectedId,
  className,
  isEmptyInit,
  onSelect,
  onSave,
}) => {
  const [selectedId, setSelectedId] = useState(
    isEmptyInit ? null : defaultSelectedId || options[0]?.id
  );
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleSelect = (id: string) => () => {
    setSelectedId(id);
    onSelect?.(id);
    setToggle(false);
    onSave?.(options.find((option) => option.id === id)?.value || "");
  };

  const itemHeight = 50;

  return (
    <div className="relative cursor-pointer">
      <div
        className={cn(
          "relative flex justify-between items-center p-2.5 text-lg w-full border-slate-400 border rounded-tl-lg rounded-tr-lg",
          className
        )}
        onClick={handleToggle}
      >
        {options.find((option) => option.id === selectedId)?.value || ""}

        <DownArrow
          svgClassName={cn(
            "h-6 w-6",
            toggle ? "rotate-180 translate-y-[2px]" : ""
          )}
        />
      </div>

      {toggle && (
        <div
          className={cn(
            "absolute top-full left-0 border border-slate-400 w-full -mt-[1px] z-10 rounded-bl-lg  overflow-x-auto max-h-[var(--item-height)] divide-y divide-y-slate-400",
            className
          )}
          style={{ "--item-height": `${itemHeight * 5}px` } as CSSProperties}
        >
          {options.map((option) => (
            <div
              className="flex justify-center items-center cursor-pointer transition hover:!bg-[var(--clr-cyan)] hover:text-white"
              key={option.id}
              style={{
                color: selectedId === option.id ? "white" : "",
                background:
                  selectedId === option.id ? "var(--clr-cyan)" : "white",
                height: `${itemHeight}px`,
              }}
              onClick={handleSelect(option.id)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
