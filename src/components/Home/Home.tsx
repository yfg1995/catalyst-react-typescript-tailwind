"use client";

import { CatalystHero } from "../CatalystHero/CatalystHero";
import { CatalystResearch } from "../CatalystResearch/CatalystResearch";
import { LatestReleases } from "../LatestReleases/LatestReleases";

export function Home() {
  return (
    <>
      <CatalystHero />
      <CatalystResearch />
      <LatestReleases />
    </>
  );
}
