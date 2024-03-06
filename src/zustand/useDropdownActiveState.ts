import { create } from "zustand";

interface DropdownState {
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
}

export const useDropdownActiveState = create<DropdownState>((set) => ({
  isHovered: false,
  setIsHovered: (hovered) => set({ isHovered: hovered }),
}));
