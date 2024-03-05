import { FC, PropsWithChildren } from "react";

export interface IContactFormContainer extends PropsWithChildren {}

export const ContactFormContainer: FC<IContactFormContainer> = ({
  children,
}) => {
  return (
    <div className="relative z-20 bg-white max-w-[800px] w-full mx-auto p-14 xl:-mt-[5%] rounded-[20px] shadow-normal">
      {children}
    </div>
  );
};
