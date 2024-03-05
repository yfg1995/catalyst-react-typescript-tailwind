import React, { FC, useEffect, useRef, useState } from "react";
import { MainNavDropdownMobile } from "./MainNavDropdownMobile";

export const MainNavButtonMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isOpen &&
      dropdownRef.current &&
      buttonRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="flex flex-col justify-center items-center w-10 h-10 border-2 cursor-pointer border-[var(--bg-primary)] rounded-full focus:outline-none space-y-1 ml-auto [&>*]:bg-[var(--bg-primary)] [&>*]:w-3.5 [&>*]:h-0.5 [&>*]:duration-300 [&>*]:ease-in-out"
        onClick={toggleMenu}
        ref={buttonRef}
      >
        <span className={isOpen ? "transform rotate-45 translate-y-1.5" : ""} />
        <span className={isOpen ? "opacity-0" : ""} />
        <span
          className={isOpen ? "transform -rotate-45 -translate-y-1.5" : ""}
        />
      </div>

      {isOpen && (
        <div ref={dropdownRef}>
          <MainNavDropdownMobile />
        </div>
      )}
    </>
  );
};
