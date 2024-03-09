import { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface IContainer extends PropsWithChildren {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export const Container: FC<IContainer> = ({ className, ref, children }) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full px-4 py-2 sm:px-6 lg:px-8 xl:max-w-[1024px] 2xl:max-w-[1280px]",
        className
      )}
    >
      {children}
    </div>
  );
};
