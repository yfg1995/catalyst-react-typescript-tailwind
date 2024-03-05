import { useState, Dispatch, SetStateAction } from "react";

export default function useDropdownActiveState(): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] {
  const [isHoveredDropdown, setIsHoveredDropdown] = useState(false);

  return [isHoveredDropdown, setIsHoveredDropdown];
}
