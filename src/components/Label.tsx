import { FC, PropsWithChildren } from "react";

export interface ILabel extends PropsWithChildren {
  title: string;
  htmlFor: string;
}

export const Label: FC<ILabel> = ({ title, htmlFor, children }) => {
  return (
    <div className="mb-6">
      <label htmlFor={htmlFor} className="font-semibold">
        {title}
      </label>

      {children}
    </div>
  );
};
