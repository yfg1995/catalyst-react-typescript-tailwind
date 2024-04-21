"use client";

import { CatalystHero } from "../CatalystHero/CatalystHero";
import { CatalystResearch } from "../CatalystResearch/CatalystResearch";
import { LatestReleases } from "../LatestReleases/LatestReleases";
import { UserList } from "../Asd";

export function Home() {
  return (
    <>
      <UserList />
      <CatalystHero />
      <CatalystResearch />
      <LatestReleases />
    </>
  );
}
