import { cn } from "@/lib/utils";

export const RightArrow = ({
  className,
  classNameSvg,
}: {
  className?: string;
  classNameSvg?: string;
}) => {
  return (
    <div className={className}>
      <svg
        className={cn("ease-in-out duration-300", classNameSvg)}
        width="13"
        height="12"
        viewBox="0 0 13 12"
      >
        <path
          d="M12.5303 6.10162C12.8232 5.80873 12.8232 5.33385 12.5303 5.04096L7.75736 0.267988C7.46447 -0.0249052 6.98959 -0.0249052 6.6967 0.267988C6.40381 0.560882 6.40381 1.03576 6.6967 1.32865L10.9393 5.57129L6.6967 9.81393C6.40381 10.1068 6.40381 10.5817 6.6967 10.8746C6.98959 11.1675 7.46447 11.1675 7.75736 10.8746L12.5303 6.10162ZM0 6.32129H12V4.82129H0V6.32129Z"
          fill="000"
          className="ease-in-out duration-300"
        ></path>
      </svg>
    </div>
  );
};
