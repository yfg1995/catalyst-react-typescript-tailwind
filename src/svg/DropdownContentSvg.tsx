import { FC } from "react";

export interface IDropdownContentSvg {
  svgClassName?: string;
  pathClassName?: string;
}

export const DropdownContentSvg: FC<IDropdownContentSvg> = ({
  svgClassName,
  pathClassName,
}) => {
  return (
    <svg className={svgClassName} width="50" height="51" viewBox="0 0 50 51">
      <circle
        className={pathClassName}
        fillOpacity="0.15"
        cx="25"
        cy="25.6719"
        r="25"
      ></circle>
      <path
        className={pathClassName}
        d="M24.9751 18.3093L29.5299 11.6719L29.307 19.7174L36.8983 17.0215L31.982 23.4002L39.712 25.6749L31.982 27.9435L36.8983 34.3222L29.307 31.6263L29.5299 39.6719L24.9751 33.0344L20.4203 39.6719L20.6432 31.6263L13.0519 34.3222L17.9682 27.9435L10.2383 25.6749L17.9682 23.4002L13.0519 17.0215L20.6432 19.7174L20.4203 11.6719L24.9751 18.3093Z"
      ></path>
    </svg>
  );
};
