"use client";

import { FC } from "react";
import { TopNavbar } from "./TopNavbar";
import { MainNavbar } from "./MainNavbar";

export const Header: FC = () => {
  return (
    <header>
      <TopNavbar />
      <MainNavbar />
    </header>
  );
};
