"use client";

import { cn } from "@/lib/utils";
import { useState, FC, ChangeEvent } from "react";

interface IInput {
  placeholder?: string;
  value?: string;
  className?: string;
  id: string;
  onChange?: (value: string) => void;
  onSave?: (value: string) => void;
}

export const Input: FC<IInput> = ({
  placeholder,
  value,
  id,
  className,
  onChange,
  onSave,
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
    onSave?.(newValue);
  };

  return (
    <input
      id={id}
      type="text"
      className={cn(
        "focus:outline-none w-full text-[#787878] border-slate-400 px-4 py-2.5 mt-1 h-[50px] border rounded-[10px]",
        className
      )}
      value={inputValue}
      onChange={onInputChange}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};
