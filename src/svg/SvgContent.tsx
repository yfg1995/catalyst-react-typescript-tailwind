import { FC } from "react";

export interface ISvgContent {
  className?: string;
}

export const SvgContent: FC<ISvgContent> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 5.00398L13.0908 0.5L12.9395 5.9595L18.0908 4.13014L14.7547 8.45854L20 10.0021L14.7547 11.5415L18.0908 15.8699L12.9395 14.0405L13.0908 19.5L10 14.996L6.90926 19.5L7.06052 14.0405L1.90926 15.8699L5.24531 11.5415L0 10.0021L5.24531 8.45854L1.90926 4.13014L7.06052 5.9595L6.90926 0.5L10 5.00398Z"
        fill="#EB6852"
      />
    </svg>
  );
};
