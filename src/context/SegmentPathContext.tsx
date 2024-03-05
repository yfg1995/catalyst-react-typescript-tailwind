"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { FC, ReactNode, createContext, useContext } from "react";

interface ISegmentPathProvider {
  children: ReactNode;
}

interface ISegmentPathContext {
  firstSegment: string;
  homepage: boolean;
}

const SegmentPathContext = createContext({} as ISegmentPathContext);

export const useSegmentPath = () => {
  return useContext(SegmentPathContext);
};

export const SegmentPathProvider: FC<ISegmentPathProvider> = ({ children }) => {
  const segments = useSelectedLayoutSegments();
  const firstSegment = segments[0];

  const homepage =
    (firstSegment !== "oncology-cro" && firstSegment !== "catalyst-flex") ||
    firstSegment === undefined;

  const value = { firstSegment, homepage };

  return (
    <SegmentPathContext.Provider value={value}>
      {children}
    </SegmentPathContext.Provider>
  );
};
