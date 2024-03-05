"use client";

import { cn } from "@/lib/utils";
import { ChangeEvent, FC, useState } from "react";

interface ITextArea {
  id: string;
  className?: string;
  onSave?: (value: string) => void;
  onChange?: (value: string) => void;
}

export const TextArea: FC<ITextArea> = ({
  id,
  className,
  onSave,
  onChange,
}) => {
  const [textValue, setTextValue] = useState("");

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setTextValue(newValue);
    onChange?.(newValue);
  };

  return (
    <textarea
      id={id}
      onChange={onTextAreaChange}
      className={cn(
        "focus:outline-none w-full border-slate-400 px-4 py-2.5 mt-1 resize-y h-36 border rounded-[10px]",
        className
      )}
      required
    />
  );
};
